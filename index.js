const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const min = 0;
const max = colors.length - 1;
let id = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  start: document.querySelector("#start"),
  stop: document.querySelector("#stop"),
};

function randomBc(min, max) {
  document.body.style.backgroundColor =
    colors[randomIntegerFromInterval(min, max)];
}

refs.start.addEventListener("click", onClickStart);
function onClickStart(e) {
  randomBc(min, max);
  id = setInterval(() => {
    randomBc(min, max);
  }, 1000);
  refs.start.disabled = true;
}

refs.stop.addEventListener("click", onClickStop);
function onClickStop(e) {
  clearInterval(id);
  refs.start.disabled = false;
}
