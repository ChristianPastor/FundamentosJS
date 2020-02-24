var Sacha = {
    nombre: 'Sacha',
    apellido: 'Carmetooon',
    edad: 28
}

var dario = {
    nombre: 'Dario',
    apellido: 'Loooppeter',
    edad: 27
}
// solamente acceder al nombre de la siguiete manera
//function printNameUpperCase({nombre}){
// printNameUpperCase({nombre:'Pepito'})


function printNameUpperCase(persona){
    // var nombre = persona.nombre;
    var { nombre } = persona;
    console.log(nombre.toUpperCase())
}

function printNameFull(persona){
   console.log(`Hola me llamo ${persona.nombre} y tengo ${persona.edad}.`);
}
function remplaceTobirthday (persona){
    // se sumara uno al volor de la edad actual y se remplazzara
    persona.edad +=1;
}

function newObjPerson(persona){
    return {
        ...persona,
        edad: persona.edad +1
    }
}

printNameUpperCase(Sacha)
printNameUpperCase(dario)

printNameFull(Sacha)
printNameFull(dario)