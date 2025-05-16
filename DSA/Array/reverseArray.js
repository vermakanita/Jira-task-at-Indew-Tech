// reverse this array

let array = [ 1,2,3,4,5]
let i = 0;
let j = array.length-1
console.log(i , j);
while(i<j){
    let c = array[i];
    array[i] = array[j]
    array[j]=c;
    i++;
    j--
}
console.log(array)
