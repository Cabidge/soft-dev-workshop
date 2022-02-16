const c = document.getElementById("slate");
const ctx = c.getContext("2d");

const getRandByte = () => Math.floor(255 * Math.random());

const randColor = () => {
  let r = getRandByte();
  let g = getRandByte();
  let b = getRandByte();
  ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
};

const drawRect = (e) => {
  const mouseX = e.layerX - c.offsetLeft;
  const mouseY = e.layerY - c.offsetTop;
  randColor();
  ctx.fillRect(mouseX, mouseY, 100, 300);
};

const drawCircle = (e) => {
  const mouseX = e.layerX - c.offsetLeft;
  const mouseY = e.layerY - c.offsetTop;
  randColor();
  ctx.beginPath();
  ctx.ellipse(mouseX, mouseY, 100, 100, 0, 0, 2 * Math.PI);
  ctx.fill();
};

let mode = "rect";

const draw = (e) => {
  if (mode == "rect") {
    drawRect(e);
  } else {
    drawCircle(e);
  }
};

const wipeCanvas = () => {
  ctx.clearRect(0, 0, c.width, c.height);
};

c.addEventListener("click", draw);

const bToggler = document.getElementById("buttonToggle");
const toggleMode = (e) => {
  if (mode == "rect") {
    mode = "circle";
  } else {
    mode = "rect";
  }
  bToggler.innerText = mode;
};
bToggler.addEventListener("click", toggleMode);

const clearB = document.getElementById("buttonClear");
clearB.addEventListener("click", wipeCanvas);
