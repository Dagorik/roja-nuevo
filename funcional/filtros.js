const lista = [12,433,324,123,431,1234,123,45,456]
const listaObj = [
    {nombre: 'Lola', age: 20},
    {nombre: 'Lolo', age: 22},
    {nombre: 'Lula', age: 23},
    {nombre: 'Lela', age: 24},
    {nombre: 'Lala', age: 25}]

// const filtro = []
// for(let i = 0; i < listaObj.length; i++){
//     if (listaObj[i].age > 22){
//         filtro.push(listaObj[i])
//     }
// }
// console.log(filtro);

const filtro = listaObj.filter((elemento,index,lista) => {
    return elemento.age > 22
});

console.log(filtro);