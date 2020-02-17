/** Devlaracion de Variables */
var nombre = 'Christian', apellido='Hernandez'
var edad = 25
/** Impression de Variables */
console.log('Hola ' + nombre + ' ' + apellido)
console.log('Tengo ' + edad + ' años')
/** Varibale Tipo String */
var name = 'Christian'
var lastname ='Pastor H'

/** Convertir a Mayusculas */
var nameUpperCase = name.toUpperCase()
console.log(nameUpperCase)
/** Convertir a Minusculas */
var lastnameLowerCase = lastname.toLowerCase()
console.log(lastnameLowerCase)
/** Obtener el valor que ocupa una posicion dentro del un String */
var firtsLetterbyName= name.charAt(0)
console.log(firtsLetterbyName)
/** Obtener cantidad de letras de un String */
var lengthName = name.length
console.log(lengthName)
/** Concatenar con Interpolacion */
var nameFull = `${name} ${lastname}`.toUpperCase()
console.log(nameFull)
/** Obtener los caracteres de un posicion inicial y final */
var str = name.substr(1,2);
console.log(str.toUpperCase());
var finalChar = name.charAt(lengthName-1);
console.log('la utima letra es ' + finalChar)