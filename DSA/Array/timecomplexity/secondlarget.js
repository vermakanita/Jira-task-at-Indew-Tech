 let arr = [1,3,5,7,6,4];
 
for(let i =0 ;i< arr.length;i++){
    for(let j = i+1 ;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let t = arr[i];
             arr[i] = arr[j];
             arr[j] =t;

        }
    }
}




console.log("Second Largest Number is :: " + arr[arr.length - 2]);
console.log("Second Smallest Number is :: " + arr[1]);
