const solution = roman => {
    const rn = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    return sum = roman.split('').reduce((acc, cur, idx, arr) => {

        if (idx === 0) return rn[cur];
        else {
            return rn[cur] > rn[arr[idx - 1]]
                ? acc - rn[arr[idx - 1]] + (rn[cur] - rn[arr[idx - 1]])
                : rn[cur] + acc
        }
    }, 0);
}

// Batter Then
// function solution(roman){
//     const conversion = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
//     return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + conversion[roman], 0);
//  }

console.log(solution('XXI')) //21
console.log(solution('I')); //1
console.log(solution('IV')); //4
console.log(solution('MMVIII')); //2008
console.log(solution('MDCLXVI')); //1666
