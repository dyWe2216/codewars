const printerError = s => {
    const filter = s.toLowerCase().match(/[n-z]/g) || [];
    return `${filter.length}/${s.length}`
}

const test1 = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
console.log(printerError(test1));