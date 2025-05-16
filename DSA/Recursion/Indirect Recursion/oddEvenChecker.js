function odd(num){
   

      if(num>0 && num%2!==0){
        console.log(`odd : ${num}`);
        
          even(num-1);
        
    }
    else{
        even(num)
    }
}




function even(num){
    
    if(num >0 && num%2==0){
        console.log(`even : ${num}`);
        
         odd(num-1);
        
    }
    else{
        even(num)
    }
}


 odd(10);