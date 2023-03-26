let sec=00;
let min=00;
 let getSec=document.querySelector('.sec');
let getMin =document.querySelector('.min');
 let startBtn=document.querySelector('.btn-start');
 let stopBtn=document.querySelector('.btn-stop');
 let resetBtn=document.querySelector('.btn-reset');
let interval;
 startBtn.addEventListener('click',()=>{
  interval= setInterval(startTimer,10)
 })

 stopBtn.addEventListener('click',()=>{
clearInterval(interval);
 })

 resetBtn.addEventListener('click',()=>{
    clearInterval(interval);
    min='00';
    sec='00';
    getSec.innerHTML=sec;
    getMin.innerHTML=min;
     })

 function startTimer(){
    min++;
    if(min<=9){
        getMin.innerHTML ='0'+min;
    }
    if(min>9){
        getMin.innerHTML =min;
    }
    if(min>99){
        sec++;
        getSec.innerHTML ='0'+sec;
        min=0;
        getMin.innerHTML='0' + 0;
    }
    if(sec > 9){
        getSec.innerHTML=sec;
    }
 }