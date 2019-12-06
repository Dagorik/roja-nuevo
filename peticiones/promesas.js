// Definición de la promesa (OJO se retorna)
function miPrimeraPromesa(numero){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            // if (numero === 5){
            //     resolve('Se cumplio la promesa')
            // } else {
            //     reject('NO se cumplio la promesa')
            // }
            numero === 5 
                ? resolve('Se cumplio la promesa')
                : reject('NO se cumplio la promesa')
        },3000)
    });
}

// Ejecución de la función y se recibe la respuesta
// THEN ---> resolve()
// CATCH ---> reject()
// resolve y reject reciben un parametro y lo recibes en el callback de 
//      then(callback(parametroX)) & catch(callback(parametroX))
miPrimeraPromesa(5)
    .then((resolve) => {
        console.log(resolve);
    })
    .catch((reject) => {
        console.log(reject);
    })
