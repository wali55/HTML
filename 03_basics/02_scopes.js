if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(c);
// console.log(a);
// console.log(b);

const arr = [45, 4, 9, 16, 25];
const newArr = arr.filter((value, index, array) => value > 10);
console.log(newArr);