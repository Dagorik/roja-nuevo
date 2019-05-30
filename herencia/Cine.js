class Cine{
    constructor(precios,sala,largometraje){
        this.precios = precios;
        this.sala = sala;
        this.largometraje = largometraje;
    }

    reproducir(){
        return this.largometraje.getNombre() + ' se está reproduciendo'
    }
}

module.exports = Cine;