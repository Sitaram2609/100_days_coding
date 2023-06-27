let maximum=parseInt(prompt("maximum"));

while(!maximum){
    maximum=parseInt(prompt("invalid input"));
}


const target = Math.floor(Math.random()*maximum)+1;

let guess=parseInt(prompt("guess"));



while(guess!==target){

    
    if(!guess || guess===""){
    guess=parseInt(prompt("enter a number"));
    }
    else if(guess>target){
        guess=parseInt(prompt("high"));
    }
    else{
        guess=parseInt(prompt("low"));
    }
}

console.log("correct answer");
