// tempreture converter then categorize the tempreture
// 1. Convert the tempreture from celsius to fahrenheit
// 2. Convert the tempreture from fahrenheit to celsius
// 3. Categorize the tempreture
// 4. Check if the tempreture is hot or cold
// 5. Check if the tempreture is normal or abnormal
let tempreture = 60; // in celsius
let fahrenheit = (tempreture * 9/5) + 32; // convert to fahrenheit
console.log("Tempreture in fahrenheit : " + fahrenheit);
let celsius = (fahrenheit - 32) * 5/9; // convert to celsius
console.log("Tempreture in celsius : " + celsius);
// categorize the tempreture
let category = (tempreture < 0) ? "freezing" : (tempreture < 10) ? "cold" : (tempreture < 20) ? "normal" : (tempreture < 30) ? "warm" : "hot";
console.log("Tempreture category : " + category);