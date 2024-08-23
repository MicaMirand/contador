// script.js
function getNextSaturday31() {
    const now = new Date();
    let targetDate = new Date(now.getFullYear(), now.getMonth(), 31);
  
    if (targetDate.getDay() !== 6 || targetDate <= now) {
      while (true) {
        targetDate.setMonth(targetDate.getMonth() + 1);
        targetDate.setDate(31);
        if (targetDate.getDay() === 6) {
          break;
        }
      }
    }
  
    return targetDate;
  }
  
  function countdown() {
    const targetDate = getNextSaturday31().getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  
    if (difference < 0) {
      document.getElementById("countdown").innerHTML = "¡El tiempo ha terminado!";
    }
  }
  
  setInterval(countdown, 1000);
  