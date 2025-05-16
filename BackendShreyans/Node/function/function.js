// function sum(a,b,n){

// }

// console.log(sum.length);



async function get(){
    let data = await fetch(`https://jsonplaceholder.typicode.com`)
    let res = await data.json()
    console.log(res)
}
get();