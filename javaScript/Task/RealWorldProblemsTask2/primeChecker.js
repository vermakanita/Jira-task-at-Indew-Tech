let num = 5;
let isPrime = true;
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(`${num} is ${isPrime ? 'a prime' : 'not a prime'} number`);