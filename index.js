var playEl = document.querySelector('.play');
var secEl = document.querySelector('.timesec');
var minEl = document.querySelector('.timemin');
var stopEl = document.querySelector('.stop');
var pauseEl = document.querySelector('.pause');
var statusSpan = document.querySelector('#status');
var statusToggle = document.querySelector('#status-toggle');

playEl.addEventListener('click', startTime);
stopEl.addEventListener('click', stopTime);
pauseEl.addEventListener('click', pauseTime);
statusToggle.addEventListener("change", toggleStatus);
let counter = 00;
let minCounter = 25;
var secCountDown;
var isPaused = false;
var sec; var mins;


function toggleStatus(event){
    var checked = event.target.checked;
    // console.log(checked);
    if ( checked ){
        status = "Working";
    } else{
        status = "Resting";
    }
    statusSpan.textContent = status;
    
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
    secEl.innerHTML = counter;
    console.log(secEl.innerHTML);
    
    if( counter == 0){ 
        clearInterval(secCountDown);
        minCountDown();   
        console.log('i am checked')    
    }  
}

function minCountDown(){
    minCounter --;
    minEl.innerHTML = minCounter;
    
    if( minCounter == 0 ){
        console.log('i am checked');
        
    } else
        {
            startTime();
        }
}

function stopTime(){
    clearInterval(secCountDown);
    minEl.innerHTML = 25;
    secEl.textContent = 00;
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
