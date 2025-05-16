let num = "naman";
let isPalindrome = true;
let strNum = num.toString();
let reversedNum = strNum.split('').reverse().join('');  // Reverse the string representation of the number
if (strNum === reversedNum) {
    isPalindrome = true;
}   
else {
    isPalindrome = false;
}
console.log(`${num} is ${isPalindrome ? 'a palindrome' : 'not a palindrome'} number`);
