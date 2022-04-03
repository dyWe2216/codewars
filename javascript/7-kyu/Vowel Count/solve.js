const getCount = str => {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter(text => vowel.includes(text)).length
}

console.log(getCount("abracadabra"));