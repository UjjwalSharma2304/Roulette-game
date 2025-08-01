let random;
let input;
let button;
let tryCount=0;
let trydisplay;
let win= document.getElementById("win");
trydisplay=document.getElementById("tries");
input=document.getElementById("input");
button=document.getElementById("roll");

button.onclick=function(){
    random=Math.floor(Math.random()*10)+1;
    document.getElementById("number").textContent=random;
    tryCount++;
    trydisplay.textContent=`TRIES: ${tryCount}`;
    if(input.value=="" || input.value>10 || input.value<1){
        window.alert("please enter a number between 1-10 to continue")}
    else if(random==Number(input.value)){
       win.textContent="YOU WIN!!"
       tryCount=0;
       input.value = "";
    } 
    else{
         win.textContent="---------"
    } 
}



