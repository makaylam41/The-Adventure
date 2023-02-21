let blah = "MAKAYLA";
console.log("blah");

let button1= document.querySelector(".option-one");
console.log("option-one");
let screen1= document.querySelector(".option-one-screen");
console.log("option-one-screen");
let button2= document.querySelector(".option-two");
console.log("option-two");
let screen2= document.querySelector(".option-two-screen");
console.log("option-two-screen");
let end1= document.querySelector(".option-one-end");
console.log("option-one-end"); 
let end2= document.querySelector(".option-two-end");
let option3= document.querySelector(".option3") ;
console.log("option3");
let runButton=document.querySelector(".run");
let runScreen=document.querySelector(".run-screen");
let alleyway=document.querySelector(".alleyway");
let hideButton=document.querySelector(".hide");
let hideScreen=document.querySelector(".hide-screen");
let hiding=document.querySelector(".hiding");
let body=document.querySelector("body");
       

button1.onmouseover = function(){
screen1.style.display = "block";
runButton.style.display="block";
    hideButton.style.display="block";


};

button2.onmouseover = function(){
     screen2.style.display = "block";
    let o3= document.querySelector(".option3");
    o3.style.display = "block";

};

option3.onmouseover = function (){ 
  end2.style.display = "block";  
    option3.style.display="none";
}; 


runButton.onmouseover=function(){
    runScreen.style.display="block";
    alleyway.style.display="block";
};

hideButton.onmouseover=function(){
    hideScreen.style.display="block";
    hiding.style.display="block";
};

button1.onclick=function(){

    body.style.backgroundColor = "gray";
};

button2.onclick=function(){

    body.style.backgroundColor = "#CBC3E3";
};
