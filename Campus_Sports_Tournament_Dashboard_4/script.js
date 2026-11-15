
document.addEventListener("DOMContentLoaded",()=>{
 const reg=document.querySelector("#registration-form");
 if(reg)reg.addEventListener("submit",e=>{e.preventDefault();document.querySelector("#reg-message").textContent="Demo registration received on this page. No information has been sent to a server.";reg.reset();});
 const inquiry=document.querySelector("#inquiry-form");
 if(inquiry)inquiry.addEventListener("submit",e=>{e.preventDefault();document.querySelector("#inquiry-message").textContent="Thank you! Your inquiry has been previewed. This demo does not send email or store data.";inquiry.reset();});
 const ann=document.querySelector("#announcement-form");
 if(ann)ann.addEventListener("submit",e=>{e.preventDefault();document.querySelector("#announcement-preview").textContent=document.querySelector("#announcement").value||"Please enter an announcement.";});
 const score=document.querySelector("#score-form");
 if(score)score.addEventListener("submit",e=>{e.preventDefault();document.querySelector("#score-preview").textContent="Preview score: Team A "+score.a.value+" — Team B "+score.b.value;});
});
