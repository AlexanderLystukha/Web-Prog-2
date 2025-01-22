function getUserAsync(id, callback) {
    setTimeout( () => {callback(id)}, 2000)
}

const myCallback = (id) => {
    console.log( {userId: id} );
}

getUserAsync(1, myCallback)

getUserAsync(2, myCallback)

const sum = 1 + 1
console.log(sum)