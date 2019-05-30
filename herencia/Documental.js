const Largometraje = require('./Largometraje');

class Documental extends Largometraje{
    constructor(duracion,clasificacion,nombre,tema){
        super(duracion,clasificacion,nombre);
        this.tema = tema
    }
    
}
module.exports = Documental;