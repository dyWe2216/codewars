const shortcut = string => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return string.split('').filter(word => ! vowels.includes(word)).join('')
}

console.log(shortcut('hello'))
console.log(shortcut('HELLO'))
console.log(shortcut('how are you today?'))
console.log(shortcut('complain'))
console.log(shortcut('never'))