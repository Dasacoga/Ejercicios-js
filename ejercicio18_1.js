//parte 1
let compara=(a,b)=>a==b?0:1
console.log(compara(5,0))
//parte 2

const ps=require("prompt-sync")
const prompt=ps()

let segamin=(seg)=>seg/60;
seg=parseInt(prompt("Segundos: "))
console.log("los "+seg+" segundos son equivalentes a: "+segamin(seg)+" minutos")

let minahor=(min)=>min/60;
min=parseInt(prompt("Minutos: "))
console.log("Los "+min+" minutos son equivalentes a: "+minahor(min)+" horas")

let horadia=(hor)=>hor/24;
hor=parseInt(prompt("Horas: "))
console.log("Las horas "+hor+" son equivalentes a "+horadia(hor)+" dias")

