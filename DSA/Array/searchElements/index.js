let array = [1,2,3,4,5]
let index =-1;

let s = 2;
for(let i = 0; i<array.length;i++){
    if(array[i]===s){
    index = i
    }
}

if(index===-1){
    console.log("element not present");
    
}
else{
    console.log(`${s} is present on index of ${index}`);
    
}





// let array = [1, 2, 3, 4, 5];
// let s = 2; // Element to search for

// let index = array.indexOf(s);

// if (index === -1) {
//     console.log("Element not present");
// } else {
//     console.log(`${s} is present at index ${index}`);
// }
