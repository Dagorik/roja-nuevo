//Importar el largometraje
const Largometraje = require('./Largometraje');

//Clase hijo
class Pelicula extends Largometraje{
    constructor(duracion,clasificacion,nombre,genero){
        super(duracion,clasificacion,nombre);
        this.genero = genero;
    }
}

module.exports = Pelicula;