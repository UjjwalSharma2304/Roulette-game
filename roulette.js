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
    if(random==Number(input.value)){
       win.textContent="YOU WIN!!"
       tryCount=0;
       input.value = "";
    } 
    else{
         win.textContent="---------"
    } 
}



