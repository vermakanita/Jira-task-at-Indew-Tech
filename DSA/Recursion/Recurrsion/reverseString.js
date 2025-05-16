function revers(i,str){
    if(i<0){
        return "" ;
    }
    else{
        // console.log(str[i])
        return str[i]+revers(i -1,str);
        
        
    }

}
let str = "indew"
console.log(revers(str.length-1,str))


// let result = revers("Indew".length - 1, "Indew");
// console.log(result); 