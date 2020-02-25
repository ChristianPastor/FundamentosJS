// comparaciones

var x=4;
var y='4';

console.log(' x==y');
console.log(x==y);
console.log(' x===y');
console.log(x===y);

var sacha = {
    nombre:'sacha'
}
// este es el mismo objeto por lo tanto si los comparamos son iguales
var otraPersona = sacha
// este  objetos es un nuevo objeto con los atributo de sacha pero esta en otro lado de la memoria ram
// si los comparamos serian diferentes
var carlos = {
    ...sacha
}

console.log('Saccha == otrapersona')
console.log(sacha == otraPersona)


console.log('Saccha === otrapersona')
console.log(sacha === otraPersona)