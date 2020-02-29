var sacha = {
    name: 'Sacha',
    lastname: 'Lifszyc',
    age:'25',
    engineer:true,
    chef:false,
    singer:false,
    dj:false,
    guitarPlayer:false,
    drone:true
}

function printProfession(person){
    console.log(`${person.name} es: `);
    if(person.guitarPlayer){
        console.log('Guitarrista');
    }
    if(person.dj){
        console.log('Dj');
    }
    if(person.drone){
        console.log('Piloto de Drone');
    }
    if(person.singer){
        console.log('Cantante');
    }
    if(person.chef){
        console.log('Cocinero');
    }
    if(person.engineer){
        console.log('Ingeniero');
    }
}
const MAYORIA_DE_EDAD = 18
// Arow functions
//var esMayorDeEdad = person => person.age >= MAYORIA_DE_EDAD


const esMayorDeEdad = ({age}) => age >= MAYORIA_DE_EDAD
const esMenorDeEdad = ({age}) => age <= MAYORIA_DE_EDAD

function permitirAcceso(person){
    if(esMayorDeEdad(person)){
        console.log('Acceso Permitido');
    }
    if(esMenorDeEdad(person)){
        console.log('Acceso Denegado');
    }
}

function printIsMoreThan(person){
    if(esMayorDeEdad(person)){
        console.log(`${person.name} es mayor de edad, el tiene ${person.age}`);
    }else{
        console.log(`${person.name}  NO es mayor de edad, el tiene ${person.age}`);
    }
}
function permitirAcceso(person){
    if(esMayorDeEdad(person)){
        console.log('Acceso Permitido');
    }
    if(esMenorDeEdad(person)){
        console.log('Acceso Denegado');
    }
}
permitirAcceso(sacha)
esMayorDeEdad(sacha)
printProfession(sacha)
printIsMoreThan(sacha)