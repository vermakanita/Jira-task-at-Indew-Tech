function a(str,i,j){
    if(i>=j){
        return true;
    }
    if(str[i]===str[j]){
        b(str,i+1,j-1);
    }
    else{
        console.log("not palindrom ");
        
        return false 
    }


}
function b(str){
    a(str,i,j)

}


     let str ="namancc"
 console.log(a(str,0,str.length-1))