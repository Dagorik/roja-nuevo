//Consumir enpoints POST (CREAR COSAS)
const request = require('request');

const newAuthor = {
    name: "Desde nodejs super roja",
	last_name:"Desde postman 2",
	nacionalidad:"MX",
	biography:"lkasjdlkasjdljasdj",
	gender:"M",
	age:33
}

function createAuthor(objAuthor){
    return new Promise((resolve,reject) => {
        const URL = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/'
        request.post({url:URL,form:objAuthor},(err,response,body) => {
            if(response.statusCode === 201){
                resolve(JSON.parse(body))
            }else{
                reject('No se creo el objeto');
            }
        });
    })
}

function getAuthorById(idAuthor){
    return new Promise((resolve,reject) => {
        const URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${idAuthor}`
        request.get(URL,(err,response,body) => {
            if(response.statusCode === 200){
                resolve(JSON.parse(body))
            }else{
                reject('No se encontro el author');
            }
        })
    });
}

createAuthor(newAuthor)
    .then((result) => {
        console.log(result.id);
        return getAuthorById(result.id)
    })
    .then((result2) => {
        console.log('Resultado 2');
        console.log(result2);
    })
    .catch((err) => {
        console.log('Catch');
        console.log(err);
    });

createAuthor(newAuthor)
    .then(result => getAuthorById(result.id))
    .then(result2 => console.log(result2))
    .catch(err => console.log(err));