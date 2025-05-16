
//     * 
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *
let n =5;
for(let i =1;i<=n;i++){
    for(let s = n-1; s>=i; s--){
        process.stdout.write(" ")
    }
    for(let j =1; j<=i ;j++){
        process.stdout.write("*"+ " ");
    }
    console.log(" ");
}for(let i =1;i<=n;i++){
    for(let s = 1; s<=i; s++){
        process.stdout.write(" ")
    }
    for(let j =i; j<=n-1 ;j++){
        process.stdout.write("*"+ " ");
    }
    console.log(" ");
}