     let str = "indew"
    let result = str.toLowerCase()
    let count = 0;
    console.log(result)
    for(let i of result){
        if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u'){
        console.log(i)
        count++ 
     }
    }
    console.log(count)