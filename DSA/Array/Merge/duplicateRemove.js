 
let a1 = [1, 12, 31, 4, 4, 4, 5];
let a2 = [11, 12, 31, 41, 15, 15, 15];
let m = [];

// Insert unique elements from a1
for (let i = 0; i < a1.length; i++) {
    let found = false; // Flag to check if element already exists in m
    for (let j = 0; j < m.length; j++) {
        if (m[j] === a1[i]) {
            found = true;
            break; // Exit if element is found
        }
    }
    if (!found) {
        m[m.length] = a1[i];
    }
}

// Insert unique elements from a2
for (let i = 0; i < a2.length; i++) {
    let found = false; // Flag to check if element already exists in m
    for (let j = 0; j < m.length; j++) {
        if (m[j] === a2[i]) {
            found = true;
            break; // Exit if element is found
        }
    }
    if (!found) {
        m[m.length] = a2[i];
    }
}

console.log(m);









 