const getRemainTime = deadline => {
  let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2),
    remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));

  return {
    remainTime,
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays
  };
};

const countdown = (deadline, elem, mensajeFinal) => {
  const el = document.getElementById(elem);

  const timerUpdate = setInterval(() => {
    let tiempo = getRemainTime(deadline);
    el.innerHTML = `<span>${tiempo.remainDays}d:${tiempo.remainHours}h:${tiempo.remainMinutes}m:${tiempo.remainSeconds}s</span>`;

    if (tiempo.remainTime <= 1){
        clearInterval(timerUpdate);
        el.innerHTML = mensajeFinal;
    }
  }, 1000);
};

countdown('Mar 07 2020 10:00                                                        :00 GMT-0300', 'clock', '¡¡¡A FESTEJAR!!!')
