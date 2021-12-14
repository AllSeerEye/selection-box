let cMouseX = 0;
let cMouseY = 0;
let points = [];
let num1 = 20;
let num2 = num1 / 2;
let timerMax = 120;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(num1);
}

function draw() {
  background(220);

  if (mouseIsPressed) {
    rectMode(CORNERS);
    noFill();
    strokeWeight(num1);
    rect(cMouseX, cMouseY, mouseX, mouseY, 3);
  }
  if (points.length > 0) {
    for (let i = 0; i < points.length; i++) {
      points[i][4]++;
      /*
    if (points[i][4] > timerMax) {
      points[i][5] = -1;
    } else if (points[i][4] < 1) {
      points[i][5] = 1;
    } */
      if (points[i][4] > timerMax) {
        points.splice(i, i + 1);
      }
    }
  }

  for (let i = 0; i < points.length; i++) {
    if (points[i][4] <= timerMax / 3) {
      strokeWeight(map(points[i][4], 0, timerMax / 3, num1, num2));
    } else if (points[i][4] <= (timerMax / 3) * 2) {
      strokeWeight(
        map(points[i][4], timerMax / 3, (timerMax / 3) * 2, num2, num1)
      );
    } else {
      strokeWeight(map(points[i][4], (timerMax / 3) * 2, timerMax, num1, 0));
    }
    // strokeWeight(map(points[i][4], 0, timerMax, num1, 0));
    rect(points[i][0], points[i][1], points[i][2], points[i][3], 3);
  }
}

function mousePressed() {
  cMouseX = mouseX;
  cMouseY = mouseY;
}

function mouseReleased() {
  let p1 = cMouseX;
  let p2 = cMouseY;
  let p3 = mouseX;
  let p4 = mouseY;
  // first four are the points, and fifth is the timer
  // sixth is used for something commented out
  points.push([cMouseX, cMouseY, mouseX, mouseY, 0, 1]);
}

