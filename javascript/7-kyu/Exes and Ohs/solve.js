const XO = str => {
    const arr = str.match(/x|X|o|O|^0-9\w/g);
    if (! arr) return true;

    return ! Boolean(arr.reduce((acc, cur) => { console.log(cur); return cur.toLowerCase() === 'x' ? ++acc : --acc }, 0))
}

console.log(XO('xo'))
console.log(XO('xxOo'))
console.log(XO('xxxm'))
console.log(XO('Oo'))
console.log(XO('ooom'))
console.log(XO('xo0'))