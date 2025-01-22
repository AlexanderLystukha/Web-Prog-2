function getUserSync(id) {
    const timeToStop = Date.now() + 2000;
    while (Date.now() < timeToStop){

    }

    //setTimeout(2000)
    return { userId: id }
}

console.log(getUserSync(1));
console.log(getUserSync(2));