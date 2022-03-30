const cannonsReady = gunners => {
    return Object.values(gunners).includes('nay')
        ? 'Shiver me timbers!'
        : 'Fire!'
}

console.log(cannonsReady({'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'}));
console.log(cannonsReady({'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'}));