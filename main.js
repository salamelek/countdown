const upgradeTime = 80000;
let seconds = upgradeTime;
let targetTimeStamp = 1686312000;

let countdownTimer = setInterval('timer()', 100);

function timer() {
    const d = new Date();
    let currentTimeStamp = d.getTime();
    let remainingTime = Math.round(targetTimeStamp - (currentTimeStamp / 1000));

    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const remainingDays = Math.trunc(remainingTime / day);
    remainingTime = remainingTime - (remainingDays * day);
    const remainingHours = Math.trunc(remainingTime / hour);
    remainingTime = remainingTime - (remainingHours * hour);
    const remainingMinutes = Math.trunc(remainingTime / minute);
    remainingTime = remainingTime - (remainingMinutes * minute);
    const remainingSeconds = remainingTime;
    
    document.getElementById('days1').innerHTML = remainingDays;
    document.getElementById('hours1').innerHTML = remainingHours;
    document.getElementById('minutes1').innerHTML = remainingMinutes;
    document.getElementById('seconds1').innerHTML = remainingSeconds;
    
    if (seconds === 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown').innerHTML = "Completed";
    } 
    else {
        seconds--;
    }
}