while(true){
    let num = Number(prompt("enter number"))
    if(num <=0){
        console.log("the num is less then or equal to zero ");
        return;
    }
    else{
        console.log(`${num}  cube  is : ${num*num*num}`)
    }
    }