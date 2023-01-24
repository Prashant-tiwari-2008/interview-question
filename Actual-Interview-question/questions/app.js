function P(n = 0) {
    if (n === 1) {
        return Promise.resolve(1);
    }
    return Promise.reject(0);
}
P(1).then((x) => {
        console.log(x);
        return P(0);
    })
    .then(() => {
        console.log('hello');
    })
    .catch((e) => {
        console.log(e);
    })
    .then(() => {
        console.log('world!');
    });
