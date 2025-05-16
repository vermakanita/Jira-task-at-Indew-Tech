// 1
// 234
// 56789

let n = 3;
let c=1;
for(let i =1; i<=5;i++){
  if(i%2!==0){
    for(let j =1;j<=i;j++){
        process.stdout.write(c.toString()+" ")
        c++
    }
    console.log(" ")
}
    
}