//Clase padre o super clase
class Animal{
    constructor(nombre,patas){
        this.patas = patas
        this.nombre = nombre
        this.cerebro = true
    }
    getName(){
        return this.nombre
    }
}

//Clase hijas
class Perro extends Animal{
    constructor(nombre,raza){
        super(nombre,4);
        this.raza = raza
    }

    ladrar(){
        return 'Waaau'
    }
}

//Clase hija
class Gato extends Animal{
    constructor(peso,nombre){
        super(nombre,4);
        this.peso = peso
        this.vidas = 7
    }

    maullar(){
        return 'Miaaau'
    }

}


const snoopy = new Perro('Snoopy','Beagle');
const garfiled = new Gato('10kg','Garfield');

console.log(snoopy.getName());
console.log(garfiled.getName());