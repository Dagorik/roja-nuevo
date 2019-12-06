// Devolver la primera pelicula en la 
// que aparece el personaje numero 20 --> X

const request = require('request');

function getPeopleById(idPersonaje){
    request.get(`https://swapi.co/api/people/${idPersonaje}`, (err, response, body) => {
        if (err) return console.log('Error');
        if (response.statusCode === 200) {
            const people = JSON.parse(body)
            console.log(people.name);
        }
    });
}


function getMovieByUrl(url){
    request.get(people.films[0], (err, response, body) => {
        if (err) return console.log('Error');
        if (response === 200) {
            console.log(JSON.parse(body));
        } else {
            console.log(body);
        }
    });
}


const people = getPeopleById(20);
getMovieByUrl(people.films[0])


function getPeliuclaById(idPersonaje) {
    // Consumir enpoint /people *
    // Consumir enpoint de peliculas
    request.get(`https://swapi.co/api/people/${idPersonaje}`, (err, response, body) => {
        if (err) return console.log('Error');
        if (response.statusCode === 200) {
            const people = JSON.parse(body)
            console.log(people.name);
            request.get(people.films[0], (err, response, body) => {
                if (err) return console.log('Error');
                if (response === 200) {
                    console.log(JSON.parse(body));
                } else {
                    console.log(body);
                }
            });
        }
    });
}

getPeliuclaById(20)