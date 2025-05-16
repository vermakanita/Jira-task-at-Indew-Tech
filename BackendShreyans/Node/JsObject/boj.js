let obj ={
    key :"value",
    name:"kanita"
}
console.log(obj.name);
// console.log(obj[name]);

Object.freeze(obj)     // obj ki value change nhi hogi 
obj.name ="verma"
console.log(obj.name);
