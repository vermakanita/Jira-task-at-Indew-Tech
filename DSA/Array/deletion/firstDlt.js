let array  = [1,2,3,4,5];
 
for(let i = 0 ; i<array.length;i++){
    array[i] = array[i+1];
};
array.length = array.length-1
console.log(array)