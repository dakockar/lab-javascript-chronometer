class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  // before the bonus part

  // startClick(callback) {
  //   this.intervalId = setInterval(() => {
  //     this.currentTime++;
  //     callback();
  //     console.log(this.currentTime);
  //   }, 1000);
  // }

  startClick(callback) {
    this.intervalId = setInterval(() => {

      this.currentTime++;
      callback();

      // console.log(this.currentTime);
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);

    // return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60;

    // return this.currentTime % 60;
  }

  getMilliseconds() {
    return Math.floor(this.currentTime % 100);
  }

  twoDigitsNumber(num) {
    if (num < 10) {
      return "0" + num.toString();
    }
    else {
      return num.toString();
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick(callback) {
    this.currentTime = 0;
    callback();
  }
  splitClick() {
    let output = `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMilliseconds())}`;
    return output;
  }
}