var pastor = {
    nombre: 'Pastor',
    apellido:'Hernandez',
    edad: 25,
    peso: 75
}

console.log(`Al inicion del año ${pastor.nombre} pesa ${pastor.peso} kg.`)
console.log(` al final del año ${pastor.nombre} pesa ${pastor.peso} kg.`)


const INCREMENTO_PESO =.2
const DIAS_DEL_ANIO = 365
const aumentarDePeso = ({peso}) => peso += INCREMENTO_PESO
const adelgazar = ({peso}) => peso -= INCREMENTO_PESO
for( var i = 1; i <= DIAS_DEL_ANIO; i++){
    var random = Math.random()
    if(random < 0.25){
        aumentarDePeso(pastor)
    }else if(random < .5){
        adelgazar(pastor)
    }
}