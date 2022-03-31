const hello = name => {
    name = name ? name.split('').map((word, idx) => idx == 0 ? word.toUpperCase() : word.toLowerCase()).join('') : 'World'
    return `Hello, ${name}!`;
}

console.log(hello('alice'));
console.log(hello('johN'));
console.log(hello(''))
console.log(hello())