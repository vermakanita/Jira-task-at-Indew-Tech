 
let arr = [0, 1, 0, 2, 0, 1, 0, 2, 1, 1, 0];



for(let i =0 ;i< arr.length;i++){
    for(let j = i+1 ;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let t = arr[i];
             arr[i] = arr[j];
             arr[j] =t;

        }
    }
}
console.log(arr);
