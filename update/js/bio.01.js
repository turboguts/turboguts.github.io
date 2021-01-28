let zoff = 0;

function setup() {
    frameRate(60);
    var clientWidth = document.getElementById('p5').clientWidth;
    var canvas = createCanvas(clientWidth, 200);
    canvas.parent('p5');
    pixelDensity(1);

}

function draw() {
    background(255);
    stroke(128);
    noFill();

    translate(canvas.clientWidth / 2, height / 2)
    zoff += 0.005;
    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.5) {
        let xoff = cos(a) + mouseX / 1000;
        let yoff = sin(a) + mouseY / 1000;
        let r = map(noise(xoff, yoff, zoff), 0, 1, 1, 250);
        let x = r * cos(a);
        let y = r * sin(a);

        curveVertex((x / 2), (y / 2));
    }
    endShape(CLOSE);
    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.5) {
        let xoff = cos(a) + mouseX / 1000;
        let yoff = sin(a) + mouseY / 1000;
        let r = map(noise(xoff, yoff, zoff), 0, 1, 1, 250);
        let x = r * cos(a);
        let y = r * sin(a);

        curveVertex((x / 2.5), (y / 2.5));
    }
    endShape(CLOSE);

}
