const lista = [12,433,324,123,431,1234,123,45,456]
const listaObj = [
    {nombre: 'Lola', age: 20},
    {nombre: 'Lolo', age: 22},
    {nombre: 'Lula', age: 23},
    {nombre: 'Lela', age: 24},
    {nombre: 'Lala', age: 25}]
// const acumulador = []
// for (let i = 0; i < listaObj.length; i++){
//     console.log(listaObj[i]);
//     acumulador.push(listaObj[i].nombre)
// }
// console.log(acumulador);

const listaNombre = listaObj.map((element,index,lista) => {
    console.log(element.nombre);
    return element.nombre
});

console.log(listaNombre);