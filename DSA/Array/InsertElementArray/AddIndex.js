// add Element in index without using method
let array = [11,12,13,14,15];
let add = 20;
let index = 2;
array.length = array.length+1;
for(let i=array.length-1; i>index ;i--){
    
    array[i] = array[i-1]; 
}
array[index] = add;

 
console.log(array);

