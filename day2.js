const password=prompt("enter any number")


if(password.length>6){

    if(password.indexOf(' ')===-1){
        console.log("valid password")
    }else{
        console.log("space must not be included")
    } 
}else{
    console.log("too short")
}



