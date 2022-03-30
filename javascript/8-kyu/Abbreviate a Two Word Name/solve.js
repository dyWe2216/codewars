const abbrevName = name => name.split(' ').map(str => str.toUpperCase().slice(0, 1)).join('.');

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("P Favuzzi"));