const Pelicula = require('./Pelicula');
const Documental = require('./Documental');
const Partidos = require('./Partidos');
const Cine = require('./Cine');

const seniorAnillos = new Pelicula('200 min', 'B', 'El señor de los anillos','Accion');
const planetaTierra = new Documental('60 min', 'Ambiental', 'Planeta tierra','Medio ambiente');
const finalChampions = new Partidos('120 min','Partido de futbol','Final de champions','Liverpool vs Ajax')

console.log(seniorAnillos);
console.log(planetaTierra);
console.log(finalChampions);

const cinemex = new Cine('60 pesos',10,finalChampions);
console.log(cinemex.reproducir());