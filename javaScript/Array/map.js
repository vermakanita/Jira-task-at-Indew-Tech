let array = [1, 2, 3, 4];
let newArray= array.map((num)=>{
    return num+num;
})
console.log(newArray); // [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]