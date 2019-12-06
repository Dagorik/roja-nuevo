const request = require('request');

function getPeopleById(idPersonaje){
    return new Promise((resolve, reject) => {
            request.get(`https://swapi.co/api/people/${idPersonaje}`, (err, response, body) => {
            if (response.statusCode === 200) {
                const people = JSON.parse(body)
                resolve(people);
            } else {
                reject('Error buscando el personaje')
            }
        });
    });
}


function getMovieByUrl(url) {
    return new Promise((resolve, reject) => {
        request.get(url, (err, response, body) => {
            if (response.statusCode === 200) {
                resolve(JSON.parse(body))
            } else {
                reject('Error en la peticion de peliculas')
            }
        });
    });
}

getPeopleById(29)
    .then((respuesta) => {
        console.log(respuesta.name);
        return getMovieByUrl(respuesta.films[0])
    })
    .then((result) => {
        console.log(result.title);
    })
    .catch((err) => {
        console.log(err);
    })


getPeopleById(20)
    .then((respuesta) => getMovieByUrl(respuesta.films[0]))
    .then((result) => console.log(result.title))
    .catch((err) => console.log(err))
