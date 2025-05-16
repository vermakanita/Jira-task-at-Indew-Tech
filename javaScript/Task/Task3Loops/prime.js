let n = 9;
let isPrime = true;
for(let i = 2;i<n/2;i++){
    if(n%i==0){
        isPrime=false
        break;
    }
    process.stdout.write(i + " ");
}
console.log(isPrime ? `the $ {n} is prime` : `the $ {n} is not  a prime`);