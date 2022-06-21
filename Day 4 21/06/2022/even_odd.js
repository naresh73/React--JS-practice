function evenodd(num){
    if (num %2 == 0){
        console.log(num,"is a EVEN number");
    }
    else if(num %2 != 0){
        console.log(num,"is a ODD number");
    }
    else{
        console.log("Your entered a wrong number");
    }
}

evenodd(17);