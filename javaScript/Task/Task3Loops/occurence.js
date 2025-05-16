let input = "hello"
let obj ={};
for(let i =0;i<input.length;i++){
    let ele = input[i]
    if(!obj[ele]){
        obj[ele]=1 ;
    }
    else{
        obj[ele] = obj[ele]+1
    }
}
console.log(obj)