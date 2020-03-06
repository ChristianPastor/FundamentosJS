var contador = 0
const llueve = () => Math.random() < 0.25

do{
    contador ++
}while(!llueve())

const print  = () => contador <= 1 ?  'vez' : 'veces'
console.log(`Fui a ver si llovia ${contador} ${print()}`)