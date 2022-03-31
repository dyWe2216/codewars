const countPositivesSumNegatives = input => {
    let num1 = 0, num2 = 0;

    if (input == null || ! input.length > 0) return [];
    input.map(num => num > 0 ? num1++ : num2 += num);

    return [num1, num2];
}

// Batter Then
// const countPositivesSumNegatives = input => {
//     return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }

let testData1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let testData2 = [
    0,   2, 3,  0,   5,   6,
    7,   8, 9, 10, -11, -12,
  -13, -14
]
let testData3 = [
    -94,  95, -21, -29,  35, -78,  72,   4, -96,  -2, -66,  55,
    -97, -85,  25, -28, -47, -27, -33, -20, -59,  -1,  83, -51,
     47,  48,  79,  30,  60, -63, -47, -69,  32,  78,  37, -37,
      1, -36,   1, -33,  30,  95,  52,  67,  64,   3, -13, -82,
    -77,  52,  80,  50, -91,  61,  -2,  37,  -1,  78, -76, -50,
      3, -16,  10,  81,  21,  46,  -5,  42, -56, -63,   2,  60,
      9,  61,  -1,  79,  93,  58, -88,  39,  39, -16,  -1,  52,
    -88,  44, -44,  12, -50,  64, -30,  64,  68,  76,  11, -35,
     87,  62, -31
  ]
console.log(countPositivesSumNegatives(testData1))
console.log(countPositivesSumNegatives(testData2))
console.log(countPositivesSumNegatives(testData3))
console.log(countPositivesSumNegatives(null))
console.log(countPositivesSumNegatives([]))