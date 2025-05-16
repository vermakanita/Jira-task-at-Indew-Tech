 
function asc(v, n) {

    if (v <= n) {

        console.log(`${v}`);

        dsc(v + 1, n)


    }
    else {
        return;
    }
}
function dsc(v, n) {
    if (v <= 1) {
        return 1;
    }
    else {
        asc(v, n)


        console.log(v - 1);

    }


}

asc(1, 3)










