const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  let twoDigitMin = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = twoDigitMin[0];
  minUni.innerHTML = twoDigitMin[1];
}

function printSeconds() {
  let twoDigitSec = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = twoDigitSec[0];
  secUni.innerHTML = twoDigitSec[1];
}

// ==> BONUS
function printMilliseconds() {
  let twoDigitMilli = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
  milDec.innerHTML = twoDigitMilli[0];
  milUni.innerHTML = twoDigitMilli[1];
}

function printSplit() {
  let newLi = document.createElement("li");
  newLi.innerHTML = chronometer.splitClick();
  splits.appendChild(newLi);
}

function clearSplits() {
  splits.textContent = ""; // removes everything in the ol
}

function setStopBtn() {
  btnLeft.innerHTML = "STOP";
  btnLeft.setAttribute("class", "btn stop");
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
  btnRight.setAttribute("class", "btn split");
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.setAttribute("class", "btn start");
}

function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.setAttribute("class", "btn reset");
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {

  if (btnLeft.getAttribute("class") === "btn start") {
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();
  }
  else if (btnLeft.getAttribute("class") === "btn stop") {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnLeft.getAttribute("class") === "btn start") {
    chronometer.resetClick(printTime);
    clearSplits();
  }
  else if (btnLeft.getAttribute("class") === "btn stop") {
    printSplit();
  }
});