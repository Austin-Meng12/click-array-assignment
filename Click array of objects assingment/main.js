let cnv = document.getElementById("my-canvas")
let ctx = cnv.getContext("2d")
document.addEventListener("mousedown", () => mouseIsPressed = true);
document.addEventListener("mouseup", () => mouseIsPressed = false);
document.addEventListener("mousemove", mousemoveHandlerLib);
cnv.width = 800
cnv.height = 600
 let mouseX;
 let mouseY;
 let mouseIsPressed = false;
//different rectangles
let rectangles = [];
 for (let i=1; i<=6;i++) {
    rectangles.push(newRandomRectangle());
 }

requestAnimationFrame(draw);
//draw rectangles
function draw() {
    // clear canvas
    ctx.clearRect(0,0, cnv.width, cnv.height)
   for (let i = 0; i < rectangles.length; i++ ) {
        moveRectangle(rectangles[i]);
        drawRectangle(rectangles[i]);
        
        

        if (ptInRectangle(mouseX,mouseY,rectangles[i])){
            console.log("monkey")
            if(mouseIsPressed) {
                mousedownHandler(rectangles[i])
            }
            
        }
   }
   
   requestAnimationFrame(draw);
}

function newRectangle(initX,initY,initW,initH,initColor,initSpeed) {
    return {
    
        x: initX,
        y: initY,
        w: initW,
        h: initH,
        color: initColor,
        speed : initSpeed,
        
        
    }
}
//draw rectangles
function drawRectangle(aRectangle) {
    fill(aRectangle.color)
    rect(aRectangle.x,aRectangle.y ,aRectangle.w,aRectangle.h,"fill")

}
//moving the rectangles

function moveRectangle(aRectangle) {

    if (aRectangle.y < cnv.height ){
        aRectangle.y += aRectangle.speed;
    } else {
        aRectangle.x = randomInt(temp.w,cnv.width -aRectangle.w)
        aRectangle.y = - aRectangle.h - 10
    }
}


//creating a random different sized rectanlges
function newRandomRectangle() {
    temp = {
        
        y: randomInt(0,20),
        w : randomInt(5,150),
        h : randomInt(5,60),
        color: randomRGB(),
        speed: randomInt(1,7),
        
    }
      temp.x = randomInt(temp.w,cnv.width-temp.w)
    return temp

}

//timer/remove rectagnle every 3 seconds
//setInterval(removeRectangle, 3000);
//function removeRectangle() {
  //  rectangles.pop();
//}

cnv.addEventListener("mousedown", mousedownHandler);
function mousedownHandler(aRectangle){
      aRectangle.color =  randomRGB();
     aRectangle.y = cnv.height + aRectangle.height;
     aRectangle.x = randomDec(temp.w,cnv.w-aRectangle.w);
     
}







//random integer/decima/color functions
function randomDec(low,high) {
    return Math.random() *(high-low) +low;
 
 
 }
 //return a random integer between low and high
 function randomInt(low,high) {
    return Math.floor(Math.random() *(high-low)+low);
 
 }
 // return a random rgb string
 function randomRGB() {
    let r=randomInt(0,256);
    let g=randomInt(0,256);
    let b=randomInt(0,256);
 
    return "rgb("+ r +", "+g+", " +b+")";
 } 

 


