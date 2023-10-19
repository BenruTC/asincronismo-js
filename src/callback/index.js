/** Callback, función que se pasa como argunmento dentro de otra y se ejecuta dentro */
function suma(num1, num2) {
    return num1 + num2
}

function calc(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calc(2,2,suma))

setTimeout(function () {
    console.log('Hola')
}, 2000)

/** */

function greeting(nombre) {
    console.log(`Hola ${nombre}`)
}

setTimeout(greeting, 2000, 'Rubén')
