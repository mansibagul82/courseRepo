let totalseconds;
let timer;

function start(){

    totalseconds = 
    Number(document.getElementById("hours").value) * 3600 +
    Number(document.getElementById("minutes").value) * 60 +
    Number(document.getElementById("seconds").value)

 
    if (totalseconds <= 0 ){
        alert("Please Enter Valid Time")
        return
    }

    timer = setInterval(updatetimer,100)
}

function updatetimer(){
    if (totalseconds <= 0 ){
        clearInterval(timer);
        timer;
        alert(" Time is up ");
        reset()
        document.getElementById('seconds').value = '0';
        return;
    }

    let hours = Math.floor(totalseconds / 3600)
    let minutes = Math.floor((totalseconds % 3600) / 60)
    let seconds = totalseconds % 60

    document.getElementById("hours").value = hours;
    document.getElementById("minutes").value = minutes;
    document.getElementById("seconds").value = seconds;

    totalseconds -= 1
}


function pause(){
    clearInterval(timer);
    timer

}

function reset(){
    
    clearInterval(timer);
    timer;
    totalseconds = 0;

    document.getElementById("hours").value = '0';
    document.getElementById("minutes").value = '0';
    document.getElementById("seconds").value = '0';
}




