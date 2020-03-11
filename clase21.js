function Persona (nombre, apellido, altura){
   this.nombre = nombre
   this.apellido = apellido
   this.edad = 18
   this.altura = altura
}

Persona.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.soyALto = function (){
    this.altura > 1.8 ? console.log(`Soy alto`) : console.log(`No soy alto`)
}
var pastor = new Persona('Christian', 'Pastor',1.92)
var erik = new Persona('Erik', 'Hernandez',1.81)
var alondra = new Persona('Alondra', 'Alvarez',1.7)
pastor.saludar()

