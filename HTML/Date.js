//digital clock
document.addEventListener('DOMContentLoaded', function() {
    // Your code here
 
  
let hourHand=document.querySelector('.hour1');
let minHand=document.querySelector('.minute');
let secHand=document.querySelector('.second');

let ticking=function(){
    let currentDate=new Date();
    
    let getHour=currentDate.getHours();
    let getMin=currentDate.getMinutes();
    let getSeconds=currentDate.getSeconds();

    hourHand.textContent= getHour;
    minHand.textContent= getMin;
    secHand.textContent= getSeconds;
}
setInterval(ticking,1000);
});