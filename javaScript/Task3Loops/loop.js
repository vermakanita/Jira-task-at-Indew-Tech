 

//   let num = 5 ;
//   let f = 1 ;
//   for(let i = 5; i>=1;i--){
//       f = f*i 
//     //   console.log(`${i} * ${i} = ${f}`)
      
//   }
//   console.log(f)




// //print all element in array using for of 
// function retrive(){
// let num = [1,2,3,4,5];
// for(let i of num){
//     console.log(i)
// }

// }retrive()



// function vowel(){
//     let str = "indew"
    
//     let result = str.toLowerCase().split('')
//     console.log(result)
//     for(let i of result){
//         if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u')
//         console.log(i)
//     }
// } vowel()



// check prime 
// let num = 15;
// let isPrime = true;
// for(let i = 2 ; i<num;i++){
//     if(num%i==0){
//         isPrime = false
//     }
// }
// if(isPrime==true){
//     console.log(`${num} is a prime `)
// }
// else{
//     console.log(`${num} is not a prime `)
// }







//largest num in array 

// let array = [1,5,49,3,6]
// let max = array[0]
// for(let i of array){
 
//     if(max<i){
//         max = i;
        
//     }
// }
// console.log(max)





//occurence 

// let array =[1,2,3,5,7,7,7,8]
// let count /= 0
// let num = 7
// for(let i of array){
//     if(i==num){
//         count++
//     }
// }




//find the occurence of a number in an array
// function findOccurence(array, num) {
//     let count = 0;
//     for (let i of array) {
//         if (i === num) {
//             count++;
//         }
//     }
//     return count;
// }
// let array = [1, 2, 3, 5, 7, 7, 7, 8];
// let num = 7;
// let occurence = findOccurence(array, num);   
// console.log(`The number ${num} occurs ${occurence} times in the array.`);



//occurence both
let str = [1,2,3,4,1,2]
let obj ={}
for(let i=0;i<str.length;i++){
    let ele = str[i]
    if(!obj[ele]){
        obj[ele] = 1
    }
    else{
        obj[ele]=obj[ele]+1
    }
}
console.log(obj)

 


















