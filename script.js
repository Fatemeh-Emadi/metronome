const tempo=document.querySelector(".tempo");
const mines=document.querySelector(".mines");
const plus=document.querySelector(".plus");
var bpmslider=document.getElementById("input1");
var icon_sound=document.getElementById("icon_sound");
var text=document.getElementById("bmp");
var num=document.getElementById("num");
var bpm=140;
var beats=4;
mines.addEventListener('click', ()=>{
    if(bpm<41){return}
    bpm--;
    tempo.textContent=bpm;
    bpmslider.value=bpm;
});
plus.addEventListener('click', ()=>{
    if(bpm > 279){return}
    bpm++;
    tempo.textContent=bpm;
    bpmslider.value=bpm;
});
bpmslider.addEventListener('input', ()=>{
    bpm=bpmslider.value;
    tempo.textContent=bpm;
    bpmslider.value=bpm;
    if(bpm <140){
        plus.style.background="blue";
        mines.style.background="blue";
        text.style.color="blue";
        num.style.color="blue";
    }
    else{
        plus.style.background="red";
        mines.style.background="red";
        text.style.color="red"; 
        num.style.color="red"; 
    }

});
var i=0;
function beep() {
   var snd=new Audio("mp3/download.wav");
    if(i==1){
        snd.play();
    }
    else{
        snd.pause();
    }  
}
function soundBPM(bpm){
    var myTimer;
    if(i==0){
    icon_sound.src="images/stop.svg";
   
  myTimer=setInterval(beep,60000/ bpm);
   i=1;
    }
    else{
        icon_sound.src="images/play.svg"; 
        clearInterval(myTimer);
        i=0;
    }
    
}


