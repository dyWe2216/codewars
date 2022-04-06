const well = x => {
    let arr = x.filter(str => str === 'good');

    return arr.length > 0 ? (arr.length <= 2 ? 'Publish!' : 'I smell a series!' ) : 'Fail!';
}

console.log(well(['bad', 'bad', 'bad']))
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))