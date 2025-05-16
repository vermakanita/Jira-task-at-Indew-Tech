// 54321
// 5432
// 543
// 54
// 5

let n =5
for(let i = 1; i<=n;i++){
    for(let j = n ;j>=i;j--){
        process.stdout.write(j.toString()+" ")
    }
    console.log(" ")

}