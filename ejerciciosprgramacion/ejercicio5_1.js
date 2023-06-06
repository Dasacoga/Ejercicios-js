const ps=require("prompt-sync")
const prompt=ps()
//parte 1
{
    let a=prompt("ingresa el primer numero ")
        b=prompt("ingresa el Segundo numero ")
        c=prompt("ingresa el Tercer numero ")
    
    let r1=(a*b)/c
    let r2=(b+c)*a
    let r3=(a/b)-(a+c)
    console.log("el resultado 1 es "+r1+" el resultado 2 es "+r2+" el resultado 3 es "+r3)
    }
    
//parte 2

console.log("numero par o impar")

let number=prompt("introduce un valor ");
if (number%2!=0){
    console.log("el numero es impar")
}else{
    console.log("el numero es par")
}
//parte 3
for (var i=3;i<9;i++){
    console.log(i)
}


//parte 4 crear matriz
var matrix = [
    []
  ];

  for (var i = 0; i < 5; i++) {
    for (let j = 0; j < 4; j++) {
  
      matrix[[i, j]] = Math.floor(Math.random() * 1000) + 1;
  
    }
  }
  console.log(matrix)


  //parte 5 tabla de verdad
var a = [
    []
  ];

console.log("  p    d      AND    OR")
for (var i=0;i<4;i++){
    //columna 1
    if (i<2){
        a[[i][0]]=true
    }
    if (i>1){
        a[[i][0]]=false
    }
    //columna 2
    if (i%2==0){
        a[[i][1]]=true
    }
    if (i%2!=0){
        a[[i][1]]=false
    }


    console.log(a[[i][0]]+"  "+a[[i][1]]+"   "+(a[[i][0]]&&a[[i][1]])+"   "+(a[[i][0]]||a[[i][1]]))
}

