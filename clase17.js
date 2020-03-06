var pastor = {
    nombre: 'Pastor',
    apellido: 'Hernandez',
    altura: '1.68'
}
var diego = {
    nombre: 'Diego',
    apellido: 'Alvarez',
    altura: '1.88'
}
var Carlos = {
    nombre: 'Carlos',
    apellido: 'Samuel',
    altura: '1.78'
}
var Angel = {
    nombre: 'Angel',
    apellido: 'Arroyo',
    altura: '1.89'
}

var personas = [pastor, diego, Carlos, Angel]
/*
for(var i =0; i< personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura}`);
}*/

//filtrar

//const esAlta = ({altura}) => altura > 1.8
const esAlta = persona => persona.altura > 1.8
const esBaja = ({altura}) => altura < 1.8
var personaAltas = personas.filter(esAlta)
var personaBajas = personas.filter(esBaja)
//Tambien se puede hacer de esta forma 

/*var personaAltas = personas.filter(function(persona){
    return persona.altura > 1.8
})*/

console.log(personaAltas)
console.log(personaBajas)