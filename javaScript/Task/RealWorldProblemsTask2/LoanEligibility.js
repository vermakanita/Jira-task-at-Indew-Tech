let salary = 5000;
let creaditScore = 700;
let loanAmount = 20000;
let loanTenure = 5; // in years
let interestRate = 5; // in percentage
let monthlySalary = salary / 12; // Monthly salary
let monthlyEMI = (loanAmount * interestRate / 100) / loanTenure; // Monthly EMI
let totalEMI = monthlyEMI * loanTenure; // Total EMI    
let totalAmountPayable = loanAmount + totalEMI; // Total amount payable
let totalInterestPayable = totalAmountPayable - loanAmount; // Total interest payable
let loanEligibility = (creaditScore >= 700 && monthlySalary >= monthlyEMI) ? "Eligible" : "Not Eligible"; // Loan eligibility check
console.log("Loan Amount: " + loanAmount);
console.log("Loan Tenure: " + loanTenure + " years");
console.log("Interest Rate: " + interestRate + "%");
console.log("Monthly Salary: " + monthlySalary);
console.log("Monthly EMI: " + monthlyEMI);
console.log("Total EMI: " + totalEMI);
console.log("Total Amount Payable: " + totalAmountPayable);
console.log("Total Interest Payable: " + totalInterestPayable);
console.log("Loan Eligibility: " + loanEligibility);
 