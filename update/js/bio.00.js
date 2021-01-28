function setup() {
    frameRate(60);
    var clientWidth = document.getElementById('p5').clientWidth;
    var canvas = createCanvas(clientWidth, 480);
    canvas.parent('p5');
    angleMode(DEGREES);
}

function draw() {
    background(235);
    stroke(50);
    noFill();
    beginShape();
    let spacing = 5;


    for (let a = 0; a < 360; a += spacing) {

      let x = mouseX * sin(a) + canvas.clientWidth/2;
      let y = mouseY * cos(a) + 480/2;
      curveVertex(x, y);
      strokeWeight(5);
      point(x, y);
      strokeWeight(1);

    }
endShape(CLOSE);
}
