const body = document.querySelector('body')
const toggle = document.getElementById('toggle');
toggle.onclick = function() {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}



function displayTime() {
    var dateTime = new Date()
    var hrs = dateTime.getHours();
    var min =dateTime.getMinutes();
    var session = document.getElementById('session');
    var greeting = document.getElementById('greeting');


    if(hrs >= 12){
        session.innerHTML = 'PM';
    } else{
        session.innerHTML = 'AM';
    }
    
    if(hrs <10) {
        hrs = "0" + hrs;
    }
    if(min <10) {
        min = "0" + min; 
    }

    if (hrs >= 12){
        greeting.innerHTML = 'GOOD EVENING, ITS CURRNENTLY';
    } else{
        greeting.innerHTML = 'GOOD MORNING, ITS CURRNENTLY';
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
}
setInterval(displayTime, 10);
