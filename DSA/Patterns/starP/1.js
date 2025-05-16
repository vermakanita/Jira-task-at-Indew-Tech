// * * * * *
//  * * * *
//   * * *
//    * *
//     *


// let n=5;
// for(let i = 1 ;i<=5 ;i++ ){
     
//     for(let s = 1; s<i; s++){
//         process.stdout.write(" ")
//     }
//     for(let j = i;j<=5;j++){
//         process.stdout.write("*"+" ")
//             }
//     console.log(" ")
// }



let n=7;
for(let i = 1 ;i<=n ;i++ ){
     
    for(let s = 1; s<i; s++){
        process.stdout.write(" ")
    }
    for(let j = i;j<=n;j++){
        process.stdout.write("*"+" ")
            }
    console.log(" ")
}

for(let i = 1 ;i<n ;i++ ){
     
    for(let s = n-1; s>i; s--){
        process.stdout.write(" ")
    }
    for(let j = 0;j<=i;j++){
        process.stdout.write("*"+" ")
            }
    console.log(" ")
}