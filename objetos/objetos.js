//Molde
class Perro{
    constructor(color,patas,age,raza){
        //Atributo = Valor
        this.color = color,
        this.patas = patas,
        this.edad = age,
        this.raza = raza
    }

    ladrar(){
        return 'Waaau'
    }

    agregarAtributoNombre(nombre){
        this.nombre = nombre;
    }

    getNombre(){
        return this.nombre;
    }
}

const ayudanteSanta = new Perro('Cafe',4,'5 años','Galgo')
const snoopy = new Perro('Blanco y negro',4,'3 años','Beagle')

ayudanteSanta.agregarAtributoNombre('Ayudante de santa')
console.log(ayudanteSanta.getNombre());

snoopy.agregarAtributoNombre('Snoopy')
console.log(snoopy.getNombre());

