const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
var secpos = date.getSeconds() * (360/60);
var minpos = (date.getMinutes() * (360/60)) +(secpos/60) ;
var hourpos = (date.getHours() * (360/12)) + (minpos/60);

function runClock(){
secpos +=6;
minpos += 6/60;
hourpos += 3/360;

HOURHAND.style.transform = 'rotate('+hourpos+'deg)';
MINUTEHAND.style.transform = 'rotate('+minpos+'deg)';
SECONDHAND.style.transform = 'rotate('+secpos+'deg)';

}


setInterval(runClock,1000); 