let timer;
let seg = 0 
let min = 0 
let hora = 0 

let start_btn = document.getElementById("start");
 
start_btn.addEventListener('click', function(){
   timer = setInterval(Timer, 1000);
   reset_btn.disabled = true;
   start_btn.disabled = true;
})

let pause_btn = document.getElementById("pause");

pause_btn.addEventListener('click', function(){
   timer = clearInterval(timer);
   reset_btn.disabled = false;
   start_btn.disabled = false;
})

let reset_btn = document.getElementById("reset");

reset_btn.addEventListener('click', function(){
    timer = clearInterval(timer);
    reset_btn.disabled = true;
   start_btn.disabled = false;
    seg = 0;
    min = 0;
    hora = 0;
    timer_elemento.innerHTML = '00:00:00';
})

function Timer (){
    seg++;

    if (seg === 60){
        seg = 0;
        min++;
    }

    if (min === 60){
        min = 0;
        hora++;
    }

    MostrarTimer();
}

function MostrarTimer() {
    let seg_x = seg;
    let min_x = min;
    let hora_x = hora;
    let timer_elemento = document.getElementById("timer");
    if (seg < 10){
        seg_x = '0'+seg;
    }

    if (min < 10){
        min_x = '0'+min;
    }

    if (hora < 10){
        hora_x = '0'+hora;
    }
    timer_elemento.innerHTML = hora_x + ":" + min_x + ":" + seg_x;
}