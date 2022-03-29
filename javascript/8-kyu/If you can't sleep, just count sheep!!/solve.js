const countSheep = num => [...Array(num).keys()].map(index => `${index + 1} sheep...`).join("");

console.log(countSheep(0))
console.log(countSheep(1))
console.log(countSheep(2))
console.log(countSheep(3))