const clockContainer = document.querySelector('#clock');

function todayTime() {
  const today = new Date();

  const clock = {
    hour: String(today.getHours()).padStart(2, 0),
    min: String(today.getMinutes()).padStart(2, 0),
    sec: String(today.getSeconds()).padStart(2, 0),
  };

  clockContainer.innerText = `${clock.hour} : ${clock.min} : ${clock.sec}`;
}

todayTime();
setInterval(todayTime, 1000);
