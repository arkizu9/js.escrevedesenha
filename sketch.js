function setup() {
    createCanvas(450, 450);
   background("lightblue");
  }
  
    function draw() {
  
    
  
    stroke("yellow");
    fill("purple");
  
    // console.log (mouseIsPressed);
  
    if (mouseIsPressed) {
      circle(mouseX, mouseY, 25, 25);
    }
  }
  