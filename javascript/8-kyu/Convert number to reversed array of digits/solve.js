const digitize = n => String(n).split('').map(Number).reverse()

console.log(digitize(35231));
console.log(digitize(0));