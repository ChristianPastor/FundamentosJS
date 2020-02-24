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
}