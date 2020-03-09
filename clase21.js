function Persona (nombre, apellido){
   this.nombre = nombre
   this.apellido = apellido
}

Persona.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
var pastor = new Persona('Christian', 'Pastor')
pastor.saludar()

