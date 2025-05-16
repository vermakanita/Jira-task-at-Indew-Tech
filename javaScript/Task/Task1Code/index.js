function Code(){
//1
let name = "indew1";
console.log(name);


//2
const num = 10;
console.log("number 2      :" +num);

//3
let isIndew = true;
console.log("boolean 3          :" + isIndew);



//4
console.log(typeof "indew");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof 12);
console.log(typeof 12.5);
console.log(typeof Symbol("indew4          :"));
 


//5. Calculate total monthly expenses
let rent = 1200;
let groceries = 300;
let otherExpenses = 100;
let totalExpenses = rent + groceries + otherExpenses;
console.log("Total monthly expenses: $5          :" + totalExpenses);


//6. Determine voting eligibility
let age = 20 ;
let isEligibleToVote = age>=18 ? true: false;
console.log("Is eligible to vote6          ::     " + isEligibleToVote);

// 7. Calculate discount price of a product
let originalPrice = 100;
let discountPercentage = 20;
let discountAmount = (originalPrice * discountPercentage) / 100;
let discountedPrice = originalPrice - discountAmount;
console.log("Discounted price: $7          :" + discountedPrice);   





// 8. Calculate final grade of a student
let JS = 100;
let NodeJS = 90;
let ExpressJS = 80;
let ReactJS = 85;
let totalMarks = JS + NodeJS + ExpressJS + ReactJS;
let averageMarks = totalMarks / 4;  
console.log("Average marks: " + averageMarks);

let finalGrade = averageMarks >= 90 ? "A+" : averageMarks >= 80 ? "A" : averageMarks >= 70 ? "B" : averageMarks >= 60 ? "C" : averageMarks >= 50 ? "D" : "F";
console.log("Final grade8          :: " + finalGrade);





// 9. Calculate tip amount
let bill = 100;
let tipP = 20;
let tipA = (bill*tipP)/100;
console.log("tipAmount: 9           : "+tipA);





//10. Check if a year is a leap year
let year = 2000;
let isLY= (year %4==0 && year % 100!==0)|| year % 400===0;
console.log("Is leap year: 10          :" + isLY);






// 11 BMI
let w = 50;
let h = 5;
let bmi = w/(h*h);
console.log("BMI is : 11           :",bmi);





// 12. Check senior citizen discount eligibility:
var age1 = 65;
var  isSenior = age1 >=60 ;
console.log("Is eligible for senior citizen 12           :"+isSenior);





//13 type of triangle
let a = 13 , b= 14 , c= 15;
let triangleType = (a===b && b==c)?"Equal" : (a===b || b===c || a===c) ? "Lsosceles":"Scalene";
console.log("Triange Type13            :" , triangleType);



//14 Hourly wage
let salary = 500;
let hours = 190;
let HW = salary/hours
console.log("Hourly wage is14 :          :" , HW);


//15 Calculate simple interest

let p = 100 , rate = 3 , time = 2;
let interest = (p+rate + time);
console.log("simple intereste is15 :           :"+ interest);




//16. Convert height from feet to cm
let f = 5.6;
let cm = f* 30.48;
console.log("height in cm16 :          :" + cm);




//17. Check affordability of a product

let budget = 4500 , price = 4000;
let buyResult = budget>= price;
console.log("buyResult 17:           :", buyResult );



//18 num is posi , negi , zero 
let number = 10 ;
let result = (number >0 )? "positive" : (number <0) ? "Nagative" : "Zero";
console.log("number is 18          : "+ result);




// 19 fuel efficiency ;
let D = 50, F = 25;
let E = D/F;
console.log("Fuel efficiency 19           ::" + E);



//20 Final Bill Amaunt with Discount 
let price1 = 100 , discount = 5 ,  tax = 3;
let DiscountPrice  = price1 - (price1* discount/100);
let finalBill = DiscountPrice + (DiscountPrice* tax /100);
console.log("Finall Bill payment20            :" , finalBill);

}Code();
