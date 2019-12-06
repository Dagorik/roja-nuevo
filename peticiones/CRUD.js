const request = require('request');
const URL = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/'


function createAuthor(nombre, apellidos, nac, bio, gender, age) {
    return new Promise((resolve, reject) => {
        const jsonSend = {
            name: nombre,
            last_name: apellidos,
            nacionalidad: nac,
            biography: bio,
            gender,
            age,
        };
        request.post(URL, {form: jsonSend }, (err, res, body) => {
            console.log(res.statusCode);
            if (res.statusCode === 201){
                resolve(JSON.parse(body))
            } else {
                reject('Error en crear')
            }
        });
    });

}

function updateNameAuthorById(idAuthor, name) {
    return new Promise((resolve, reject) => {
        const json = {name}
        request.patch(`${URL}${idAuthor}/`,{form: json},
            (err,res, body) => {
                if (res.statusCode === 200){
                    resolve(JSON.parse(body))
                } else {
                    reject('Error en actualizar')
                }
        })
    });
}

function getAuthorById(idAuthor){
    return new Promise((resolve, reject) => {
        request.get(`${URL}${idAuthor}/`, (err, res, body) => {
            if (res.statusCode === 200){
                resolve(JSON.parse(body))
            } else {
                reject('Error en obtener')
            }
        });
    });

}

function getAllAuthors(){
    request.get(URL, (err, res, body) => {
        console.log(res.statusCode);
        console.log(JSON.parse(body));
    })
}

function deleteAuthorById(idAuthor){


    return new Promise((resolve, reject) => {
        request.delete(`${URL}${idAuthor}/`, (err, res, body) => {
            if (res.statusCode === 204){
                resolve('Se borro :O')
            } else {
                reject('Error en borrar')
            }
        })
    });
}

// createAuthor('Cinta roja 36', 'Otro batch', 'MX', 'lorem', 'M', 30);
// updateNameAuthorById('3581', 'Nombre roja');
// getAuthorById('3581');
// getAllAuthors()
// deleteAuthorById('3638');


// Crear usuario (POST) --> 201
// Modificar Usuario por id (PATCH) --> 200
// Obtener Usuario por id (GET) --> 200
// Borrar Usuario por id (DELTE) --> 204
// Obtener Usuario port id (GET) --> 404

createAuthor('Cinta roja 36', 'Otro batch', 'MX', 'lorem', 'M', 30)
.then((result) => {
    console.log('Creado', result);
    return updateNameAuthorById(result.id, 'Juanito')
}).then((otroResult) => {
    console.log('Modificado', otroResult);
    return getAuthorById(otroResult.id)
}).then((resultMas) => {
    console.log('Obtenido', resultMas);
    return deleteAuthorById(resultMas.id)
}).then((resultadox) => {
    console.log(resultadox);
})
.catch((err) => {
    console.log(err);
});