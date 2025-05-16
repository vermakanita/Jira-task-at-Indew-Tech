let array = [1,2,3,4,5,6,7,800,9,10]
let max = array[0];
 
for(let i of array){
    if(max<array[i]){
        max = array[i]
    }
}
console.log(max)