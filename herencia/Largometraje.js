//Clase padre
class Largometraje{
    constructor(duracion,clasificacion,nombre){
        this.duracion = duracion;
        this.clasificacion = clasificacion;
        this.nombre = nombre;
    }

    getNombre(){
        return this.nombre;
    }

}

//Preparar la clase padre para que pueda ser exportado
module.exports = Largometraje;