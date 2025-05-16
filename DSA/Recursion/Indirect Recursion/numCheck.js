function isOdd(n){
    if(n%2!==0){
        console.log(`odd: - ${n}`);
        return ;
        
    }
    else{
        isEven(n)
    }
   
}
function isEven(n){
    if(n%2==0){
        console.log(`even :- ${n}`);
        return;
        
    }
    else{
        isOdd(n)
    }
     
}
isOdd(10);