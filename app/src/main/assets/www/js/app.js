let heading=0,lastHeading=0;
const needle=document.getElementById("compassNeedle");
const headingValue=document.getElementById("headingValue");
const moonAzimuthSpan=document.getElementById("moonAzimuth");
const diffValue=document.getElementById("diffValue");
const splash=document.getElementById("splash");
const debugOverlay=document.getElementById("debugOverlay");
const dbgH=document.getElementById("dbgHeading");
const dbgD=document.getElementById("dbgDiff");
const dbgI=document.getElementById("dbgIntensity");
const toggleDebug=document.getElementById("toggleDebug");
const pulseEffect=document.getElementById("pulseEffect");
const compassGlow=document.getElementById("compassGlow");
const sweepSound=document.getElementById("sweepSound");

/* Splash */
window.addEventListener("load",()=>{setTimeout(()=>{splash.style.opacity="0";setTimeout(()=>splash.remove(),500)},800)});

/* Dev Mode */
let DEV_MODE=localStorage.getItem("devMode")==="true";
if(DEV_MODE) debugOverlay.classList.add("show");
toggleDebug.onclick=()=>{
  const on=debugOverlay.classList.toggle("show");
  localStorage.setItem("devMode",on?"true":"false");
};

/* Settings Panel basic (open/close/reset only) */
const panel=document.getElementById("settingsPanel");
document.getElementById("openSettings").onclick=()=>panel.classList.toggle("show");
document.getElementById("resetSettings").onclick=()=>{localStorage.clear();location.reload();};

/* Compass Simulation */
const moonAz=130;
setInterval(()=>{
  heading=(heading+2)%360;
  const diffRaw=Math.abs(heading-moonAz);
  const diff=diffRaw>180?360-diffRaw:diffRaw;
  const intensity=1-Math.min(diff,30)/30;

  headingValue.textContent=heading+"°";
  moonAzimuthSpan.textContent=moonAz+"°";
  diffValue.textContent=diff.toFixed(0)+"°";

  needle.style.transform=`translate(-50%,-85%) rotate(${heading}deg)`;

  if(Math.abs(heading-lastHeading)>5) needle.classList.add("motion-blur");
  else needle.classList.remove("motion-blur");
  lastHeading=heading;

  compassGlow.style.opacity=intensity*0.9;
  if(diff<8){pulseEffect.style.opacity="1";pulseEffect.classList.add("pulse-active");}
  else{pulseEffect.style.opacity="0";pulseEffect.classList.remove("pulse-active");}

  dbgH.textContent=heading;
  dbgD.textContent=diff.toFixed(1);
  dbgI.textContent=intensity.toFixed(2);
},80);

/* Sweep Sound بسيط */
setInterval(()=>{sweepSound.currentTime=0;sweepSound.play().catch(()=>{})},400);
