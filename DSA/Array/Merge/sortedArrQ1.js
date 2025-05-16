let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9,10]

let mergeArr =[];
let i=0;
let j=0;

while (i<=arr1.length && j<=arr2.length){
    if(arr1[i]<arr2[j]){
        mergeArr.push(arr1[i])
        i++;
    }
    else{
        mergeArr.push(arr2[j]);
        j++;
    }
}



mergeArr.length = mergeArr.length-1;


console.log(mergeArr);
