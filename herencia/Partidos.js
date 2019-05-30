const Largometraje = require('./Largometraje');

class Partidos extends Largometraje{
    constructor(duracion,clasificacion,nombre,equipos){
        super(duracion,clasificacion,nombre)
        this.equipos = equipos
    }
}

module.exports = Partidos;