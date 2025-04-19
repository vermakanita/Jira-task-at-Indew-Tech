let a =[1,2,3,4,5,6,7,8,9];

// 1 4 7
// 2 5 8
// 3 6 9
for(let i =0 ;i<3 ;i++){
    for(let j = i ; j<a.length;j+=3){
        process.stdout.write(a[j]+" ");
    }
    console.log(" ");
}

