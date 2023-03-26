// variable
let sec=00;
let MileSec=00;
//  get html using querySelector with class name
 let getSec=document.querySelector('.sec');
 let getMileSec =document.querySelector('.MileSec');
 let startBtn=document.querySelector('.btn-start');
 let stopBtn=document.querySelector('.btn-stop');
 let resetBtn=document.querySelector('.btn-reset');
//  created interval variable for clear interval
 let interval;
//  added eventListener on start button
 startBtn.addEventListener('click',()=>{
  interval= setInterval(startTimer,10)
 })
//  added eventListener on stop button
 stopBtn.addEventListener('click',()=>{
clearInterval(interval);
 })
//  added eventListener on reset button
 resetBtn.addEventListener('click',()=>{
    clearInterval(interval);
    MileSec='00';
    sec='00';
    getSec.innerHTML=sec;
    getMileSec.innerHTML=MileSec;
     })
// start timer function with some condition
 function startTimer(){
   MileSec++;
    if(MileSec<=9){
        getMileSec.innerHTML ='0'+MileSec;
    }
    if(MileSec>9){
        getMileSec.innerHTML =MileSec;
    }
    if(MileSec>99){
        sec++;
        getSec.innerHTML ='0'+sec;
       MileSec=0;
        getMileSec.innerHTML='0' + 0;
    }
    if(sec > 9){
        getSec.innerHTML=sec;
    }
 }
