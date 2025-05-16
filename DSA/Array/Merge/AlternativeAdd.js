let arr1 = [1,3,5,7,9,11];
let arr2 =[2,4,6,8,10,12];
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
