class Chronometer {
  constructor() {

    this.currentTime = 0;
    this.intervalId = 1000;

  }
  startClick() {
    setInterval(()=> {
    this.currentTime++;  
    
    }, this.intervalId);

  }
  getMinutes() {
    let minutes = this.currentTime;
    minutes = Math.floor(this.currentTime / 60);
    return minutes;

  }
  getSeconds() {
    let seconds = this.currentTime;
    seconds = this.currentTime % 60;
    return seconds;

  }
  twoDigitsNumber() {
    let minutesDisplay = this.currentTime.toString();
    if (minutesDisplay<10){
      minutesDisplay = '0'+minutesDisplay;
    }
    else if (minutesDisplay>=10){
      minutesDisplay = this.currentTime;
    }
    return minutesDisplay;
  }
  stopClick() {
    clearInterval(this.intervalId);
    this.intervalId = 0;
  }
  resetClick() {}

  splitClick() {}

}