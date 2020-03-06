var pastor = {
    nombre: 'Pastor',
    apellido:'Hernandez',
    edad: 25,
    peso: 75
}

//console.log(`Al inicion del año ${pastor.nombre} pesa ${pastor.peso} kg.`)


const INCREMENTO_PESO =.2
const DIAS_DEL_ANIO = 365

const aumentarDePeso = ({peso}) => peso += INCREMENTO_PESO
//const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = ({peso}) => peso -= INCREMENTO_PESO
//const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4 

var dias = 0

const META = pastor.peso -3

while(pastor.peso > META){
     debugger
    if(comeMucho()){
        //aumentarDePeso
        aumentarDePeso(pastor)
    }
    if(realizaDeporte()){
        //Adelgazar
        adelgazar(pastor)
    }
    dias += 1

}

console.log(`Pasaron ${dias} dias hasta que ${pastor.nombre} adelgazon 3kg.`)
