var signo = prompt('¿ Cual es tu sign0 ?');
console.log(signo);

switch(signo){
    case 'aries':
        console.log('Nunca se olvide que debe mantener siempre la serenidad frente a los inconvenientes que uno vive, ya que será su mejor antídoto para combatir la incertidumbre.')
        break
    case 'tauro':
        console.log('En este día, deberá buscar refugio en el plano espiritual y tener presente que los contratiempos de hoy se diluirán mañana. Relájese que todo mejorará.')
        break
    case 'geminis':
    case 'géminis':
        console.log('En este día, deberá buscar refugio en el plano espiritual y tener presente que los contratiempos de hoy se diluirán mañana. Relájese que todo mejorará.')
        break
    case 'cancer':
    case 'cancer':
        console.log('Aproveche el día al máximo, ya que contará con los suficientes impulsos para resolver todos los asuntos que hace tiempo posterga. Tome coraje y comience hoy.')
        break
    case 'leo':
        console.log('Despreocúpese, ya que su capacidad para tomar decisiones se combinará con la sensibilidad e intuición. Gracias a estas, decidirá de manera correcta.')
        break
    case 'virgo':
        console.log('Atravesará algunos momentos donde la intranquilidad podría arrebatarle muchos de los éxitos que le ha costado demasiado trabajo conseguir. Evite que suceda.')
        break
    case 'Libra':
        console.log('Ponga distancia de quienes solo le generan problemas en su vida. Prepárese, ya que podrían surgir muchos conflictos por pequeñeces y afectar su ánimo.')
        break
     case 'escorpion':
        console.log('Muchas veces las decisiones precipitadas pueden llegar a ser causa de un arrepentimiento futuro. En esos casos, trate de reflexionar antes de actuar.')
        break  
     case 'sagitario':
        console.log('Intente comprender que la tolerancia y la persuasión serán los medios más eficaces para lograr muchos de los proyectos tan anhelados. Haga uso de ellas.')
        break  
     case 'capricornio':
        console.log('En caso de que deba avanzar, sepa que la revisión del pasado le echará luz sobre los interrogantes del presente que lo persiguen hace varios días.')
        break
    case 'acuario':
        console.log('Después de tantos inconvenientes, al fin encontrará el equilibrio. Podrá pisar el suelo firme y estará en condiciones de resolver todos los temas importantes.')
        break
    case 'picis':
        console.log('Sepa que deberá desarrollar su fuerza de espíritu y recargar al máximo el aura para los tiempos buenos que se acercan. Prepárese para disfrutar.')
        break
    default:
        console.log('No es un signo Zodiacal Valido..')
        break    
}