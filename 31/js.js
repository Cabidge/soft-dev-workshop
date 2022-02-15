const c = document.getElementById("slate");
const ctx = c.getContext("2d");

ctx.fillStyle = "lime";

const clear = () => {
  ctx.clearRect(0, 0, c.width, c.height);
};

let requestID;

let radius = 0;
let growing = true;

const draw = (a) => {
  console.log(a);
  if (growing) {
    radius++;
    if (radius >= c.width / 2) {
      growing = false;
    }
  } else {
    radius--;
    if (radius <= 0) {
      growing = true;
    }
  }
  ctx.ellipse(250, 250, radius, radius, 0, 0, 2 * Math.PI);
  requestID = window.requestAnimationFrame(draw);
};

const stop = () => {
  window.cancelAnimationFrame(requestID);
};

const btnGo = document.getElementById("btn-go");
const btnStop = document.getElementById("btn-stop");

btnGo.addEventListener("click", draw);
btnStop.addEventListener("click", stop);
