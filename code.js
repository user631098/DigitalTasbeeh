let count=0
let interval=1;

function func(op) {

    if(op==='+') { count+=interval; }
    else if(op==='-' && count-interval>-1) { count-=interval; }
    else if(op==='r') { count=0; }

    document.getElementById("text").innerText = count;

}

function int(op) {

    if(op==='+' && interval<10) { interval++; }
    else if(op==='-' && interval>1) { interval--; }

    document.getElementById("set").innerText = interval;
    document.getElementById("increment").innerText = "+"+interval;
    document.getElementById("decrement").innerText = "-"+interval;

}