let array = [91,2,5,7,50,9,];
let max = array[0];
let min = array[0];
for(let i = 0;i<array.length;i++){
    if(max<array[i]){
        max = array[i]

    }
    else if (min>array[i]){
        min = array[i]
    }
}
console.log(`the maximum element is a ${max}`)
console.log(`the minimum element is a ${min}`)