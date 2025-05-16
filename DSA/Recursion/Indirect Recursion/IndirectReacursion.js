// when a one function call anothers function inside there function it is call indirect recursion 

// let me explaine with one example 


function a(n){
    if(n>0){
        console.log(`A : ${n}`);
        b(n-1)
        
    }
}



function b(n){
    if(n>1){
        console.log(`B : ${n}`);
        a(n/2)
        
    }
}
a(10)