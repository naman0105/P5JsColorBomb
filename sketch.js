function setup() {
  createCanvas(1280,720);
  // put setup code here
}


//getting random colorful dots and 
// function draw() {
//   if(mouseIsPressed){
//     fill(192)
//   } else{
//     fill(Math.random()*255,Math.random()*255,Math.random()*255)
//   }
//   var x = Math.random()*1000;
//   var y = Math.random()*1000;
//   ellipse(x,y, 20,20)
//   // put drawing code here
// }

function draw() {
  noStroke()
  if(mouseIsPressed){
    fill(192)
    ellipse(mouseX,mouseY, 20,20)
  } else{
    fill(Math.random()*255,Math.random()*255,Math.random()*255)
    var x = Math.random()*1000;
    var y = Math.random()*1000;
    var size = Math.random()*100;
    ellipse(x,y, size,size)
  }

  // put drawing code here
}