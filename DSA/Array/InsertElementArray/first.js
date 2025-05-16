// // add Element in first index without using method
// let array = [11,12,13,14,15];
// let add = 20;
// array.length = array.length+1;
// for(let i = array.length-1 ; i>=0; i--) {    //  i=5
//     array[i] = array[i-1]        
//                                  // i-1 = 4
// } array[0] = add;
// console.log(array);




let arr = [1,2,3,4];
let add =10;
 arr.length = arr.length+1;
for(let i =arr.length-2; i>=0;i--){
    arr[i+1] = arr[i]


}
arr[0] = add;
console.log(arr);



 