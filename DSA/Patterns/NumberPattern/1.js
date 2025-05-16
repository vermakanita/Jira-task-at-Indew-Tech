// 1
// 23
// 456
// 78910


let n = 4;
let c = 1;
for(let i = 1;i<=n ;i++){
    for(let j=1; j<=i;j++ ){
        process.stdout.write(c.toString()+" ")
        c++;
    }
    console.log(" ")
}