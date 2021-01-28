function setup() {
    frameRate(60);
    var canvas = createCanvas(800, 200);
    canvas.parent('p5');

}

function draw() {
    background(180);
    strokeWeight(5);
    point(20, 20);
    point(80, 20);
    point(50, 50);

    noFill();
    strokeWeight(1);
    beginShape();
    vertex(20, 20);
    quadraticVertex(80, 20, 50, 50);
    endShape();
}
