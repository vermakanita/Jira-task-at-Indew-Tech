let array = [1,2,3,6,7,8,9]
let even = 0;
let odd = 0
for(let i = 0;i<array.length;i++){
    if(array[i]%2==0){
        even++;
     }
    else{
        odd++;
    }
};
console.log(`even is ${even}`);
console.log(`odd is ${odd}`);


