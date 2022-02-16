const c = document.getElementById("slate");
const ctx = c.getContext("2d");

const halfWidth = c.width / 2;

ctx.fillStyle = "lime";

const clear = () => {
  ctx.clearRect(0, 0, c.width, c.height);
};

let requestID;

let radius = 0;
let growing = true;

const draw = (a) => {
  stop();
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
  clear();
  ctx.beginPath();
  ctx.ellipse(halfWidth, halfWidth, radius, radius, 0, 0, 2 * Math.PI);
  ctx.fill();
  requestID = window.requestAnimationFrame(draw);
};

const stop = () => {
  window.cancelAnimationFrame(requestID);
};

const btnGo = document.getElementById("btn-go");
const btnStop = document.getElementById("btn-stop");

btnGo.addEventListener("click", draw);
btnStop.addEventListener("click", stop);
