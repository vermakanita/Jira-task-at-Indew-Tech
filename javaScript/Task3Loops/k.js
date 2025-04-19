// // for (let i = 1; i <= 5; i++) {
// //     for (let j = 1; j <= i; j++) {
// //         process.stdout.write("*");
// //     }
     
// for (let i = 1; i <= 5; i++) {
//       if(i==1 || i==5){
         
//             process.stdout.write("*");
//       }
//       else{
//             process.stdout.write(" ");
//       }
        
//         // console.log(" ");
// }


for (let i = 1; i <= 5; i++) { // Outer loop for rows
    for (let j = 1; j <= 5; j++) {
        if(i==1 || j==1 || i==5 || j==5) // Inner loop for columns
        process.stdout.write("*"); 
        else{
            // process.stdout.write(" ")// Print an asterisk for each column
    }
    process.stdout.write("/n"); // Move to the next line after each row
}
}for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
    }
 console.log("");
}