const c = document.getElementById("slate");
const ctx = c.getContext("2d");

const halfWidth = c.width / 2;

const clear = () => {
  ctx.clearRect(0, 0, c.width, c.height);
};

let requestID;

let radius = 0;
let growing = true;

const drawDot = () => {
  console.log("test");
  if (growing) {
    radius++;
    if (radius >= halfWidth) {
      growing = false;
    }
  } else {
    radius--;
    if (radius <= 0) {
      growing = true;
    }
  }

  ctx.fillStyle = "lime";
  ctx.beginPath();
  ctx.ellipse(halfWidth, halfWidth, radius, radius, 0, 0, 2 * Math.PI);
  ctx.fill();
};

let x, y;
let dx = 1;
let dy = 1;

const dvd = new Image();
const scale = 0.1;
let width, height;

dvd.onload = () => {
  width = dvd.width * scale;
  height = dvd.height * scale;
};

dvd.src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/DVD_logo.svg/1200px-DVD_logo.svg.png";

const drawBounce = () => {
  x += dx;
  y += dy;

  if (x <= 0 || x >= c.width - width) {
    dx *= -1;
  }

  if (y <= 0 || y >= c.height - height) {
    dy *= -1;
  }

  ctx.drawImage(dvd, x, y, width, height);
};

const drawLoop = (a, drawCallback) => {
  clear();

  drawCallback(a);

  requestID = window.requestAnimationFrame((a) => drawLoop(a, drawCallback));
};

const stop = () => {
  window.cancelAnimationFrame(requestID);
};

const btnGo = document.getElementById("btn-go");
const btnGo2 = document.getElementById("btn-go2");
const btnStop = document.getElementById("btn-stop");

btnGo.addEventListener("click", () => {
  stop();
  drawLoop(0, drawDot);
});

btnGo2.addEventListener("click", () => {
  stop();
  x = Math.random() * (c.width - width);
  y = Math.random() * (c.height - height);
  drawLoop(0, drawBounce);
});

btnStop.addEventListener("click", stop);
