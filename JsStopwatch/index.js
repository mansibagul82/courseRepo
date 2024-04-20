let seconds = 0;
let miliSeconds = 0;
let  hours =  0;
let  minutes = 0;

let timeStop ;

let display = document.getElementById("display")
display.innerText = "00hr : 00min : 00s : 00ms"

function start(){
    timeStop = setInterval(displaytimer,8)
}

function pause(){
    clearInterval(timeStop)
}

function reset(){
    clearInterval(timeStop)
    hours =  0;
    minutes = 0;
    seconds = 0;
    miliSeconds = 0;
    display.innerText = `${seconds}s :${miliSeconds}ms`
}

function displaytimer(){

    if (miliSeconds == 1000)
    {
        miliSeconds = 0;
        seconds++
    }
    else{
        miliSeconds++
    }

    if (seconds == 60)
    {
        seconds = 0
        minutes++
    }
    
    if (minutes == 60)
    {
        minutes = 0
        hours++
    }
    
    if (hours == 0 && minutes == 0){
        display.innerText = `${seconds}s : ${miliSeconds}ms`
    }
    else if (hours == 0){
        display.innerText = `${minutes}m : ${seconds}s : ${miliSeconds}ms`
    }
    else{
        display.innerText = `${hours}hr : ${minutes}m : ${seconds}s : ${miliSeconds}ms`
    }
}