var pastor = {
    nombre: 'Pastor',
    apellido: 'Hernandez',
    altura: '1.68',
    cantidadDeLibros: 91
}
var diego = {
    nombre: 'Diego',
    apellido: 'Alvarez',
    altura: '1.88',
    cantidadDeLibros: 182
}
var Carlos = {
    nombre: 'Carlos',
    apellido: 'Samuel',
    altura: '1.78',
    cantidadDeLibros: 132
}
var Angel = {
    nombre: 'Angel',
    apellido: 'Arroyo',
    altura: '1.89',
    cantidadDeLibros: 90
}

var personas = [pastor, diego, Carlos, Angel]

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer,0)

console.log(`EN total todos tiene ${totalDeLibros} libros`);
