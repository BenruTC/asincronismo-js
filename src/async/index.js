const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Async!!'), 2000)
        : reject(new Error('Error!'))
    })
}

const otraFn = async () => {
    const algo = await fnAsync();
    console.log(algo);
    console.log('Hola!');
}

console.log('Antes');
otraFn();
console.log('Despues');