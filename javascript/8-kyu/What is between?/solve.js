const between = (a, b) => {
    const arr = [];

    for (let i = a; i <= b; i ++) {
        arr.push(i);
    }

    return arr;
}

// Batter Then
// const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);
// const between = (a, b) => [...Array(b - a + 1)].map((_, idx) => idx + a);

console.log(between(1, 4));
console.log(between(-2, 2));