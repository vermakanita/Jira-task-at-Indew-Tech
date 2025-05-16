let n = 5 ;
let f= 1;
for(let i =n;i>1;i--){
    // console.log(i)
    f*=i
    // process.stdout.write(" is the factorial of " + n + "\n")
    process.stdout.write(i + " ");
}
// process.stdout.(f + " ");
process.stdout.write(" is the factorial of " + n + "\n")
// console.log(f + " is the factorial of " + n)
// console.log(`${f} is the factorial of ${n}`)