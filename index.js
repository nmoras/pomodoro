var playEl = document.querySelector('.play');
var secEl = document.querySelector('.timesec');
var minEl = document.querySelector('.timemin');
var stopEl = document.querySelector('.stop');
var pauseEl = document.querySelector('.pause');
var statusSpan = document.querySelector('#status');
var statusToggle = document.querySelector('#status-toggle');
// var audio = document.querySelector('#myAudio')

var audio = new Audio('./assets/Twin-bell-alarm-clock-sound.mp3');

playEl.addEventListener('click', setTimer);
stopEl.addEventListener('click', stopTime);
pauseEl.addEventListener('click', pauseTime);
statusToggle.addEventListener("change", toggleStatus);



let counter = 00;
let minCounter;
var secCountDown;
var isPaused = false;
var sec; var mins; var status;


function toggleStatus(event){
    stopTime();
    var checked = event.target.checked;

    console.log(checked);
    if ( checked ){
        status = "Working";
        statusSpan.textContent = status;
        minEl.innerHTML = 25;
        minCounter = 24;
    } else{
        status = "Resting";
        statusSpan.textContent = status;
        minEl.innerHTML = '0' + 5;
        minCounter =  '0' + 4;
        
    }
}

function setTimer(){
    if( !isPaused ){
        if( status == "Working"){
            minEl.innerHTML = 24; 
            
        } else{
            minEl.innerHTML = '0' + 4; 
           
        }
        startTime();
    } else{
        startTime();
    }
   
}

function startTime(){
    if( !isPaused ){
        counter = 60;
        secEl.innerHTML = counter;
        console.log('i am clicked', counter)
        secCountDown = setInterval( countDown, 1000);    
    } else {
        afterPause();
        isPaused = false;
    }
}    

function countDown(){
    counter--;
    if( counter < 10){
        secEl.innerHTML = '0' + counter;
    } else {
        secEl.innerHTML = counter;
    }
    
    // console.log(secEl.innerHTML);
    
    if( counter == 0){ 
        clearInterval(secCountDown);
        minCountDown();   
        console.log('i am checked')    
    }  
}

function minCountDown(){
    minCounter --;
    if( minCounter < 10 & minCounter > -1 ){
        minEl.innerHTML = '0' + minCounter;
    } else {
        minEl.innerHTML = minCounter;
    }
    
    if( minCounter == -1 ){
        minEl.innerHTML = 00;
        console.log('i am checked');
        alarmBell();
        
    } else
        {
            startTime();
        }
}

function stopTime(){
    clearInterval(secCountDown);
    if( status == "Working"){
        minEl.innerHTML = 25;
        secEl.textContent = '0' + 0;
    } else {
            minEl.innerHTML = '0' + 5;
            secEl.textContent = '0' + 0;
    }   
} 
   

function pauseTime(){
    sec = secEl.textContent;
    mins = minEl.textContent;
    clearInterval(secCountDown);  
    isPaused = true;
}
    
function afterPause(){
    secEl.innerHTML = sec;
    minEl.innerHTMl = mins;
    counter = sec;
    minCounter = mins;
    secCountDown = setInterval( countDown, 1000);
    isPaused = false;
}

function alarmBell(){
    audio.play();
    stopTime();
    // setTimeout(stopTime, 2000);
}
