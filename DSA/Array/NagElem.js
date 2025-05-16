let array = [1,2,3,4,-8,8]
let nag = 0;
for(let i = 0; i<array.length ;i++){
    if(array[i]<0){
        nag = array[i];
        break;
    }
}
if(nag ==0){
    console.log("no nagative value");
    
}
else{
    console.log(`the first nagative element is ${nag}`);
    
}