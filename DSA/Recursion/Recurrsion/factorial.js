// fun which is call itself untill constion is satisfied 

function fact (num){
    if(num===1){
        console.log(num);
         return 1;
        
    }
    else{
        console.log(num);
        return  num * fact(num-1);
         
        
    }
}
 
console.log(fact(5));
 