let x = [5,6,7,8,9,10];
let y = x.filter((num)=>{
    return num%2==0;
})
console.log(y); // [6, 8, 10]