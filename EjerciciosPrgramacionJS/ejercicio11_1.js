const numeros=[]
for (var i=0;i<100;i++){
    numeros[i]=i+1
}
console.log(numeros)


const numeros_pares=[]
var k=2
for (var i=0;i<50;i++){
    numeros_pares[i]=k
    k=k+2
}
console.log(numeros_pares)


var a,b
const num=[10,11,22]

var numama=[]
if (num[0]>num[1]){
    if(num[1]>num[2]){
        numama=[num[2],num[1],num[0]]

    }else if(num[1]<num[2]){
        if (num[0]>num[2]){
           numama=[num[1],num[2],num[0]]
        }else if(num[0]<num[2]){
        numama=[num[1],num[0],num[2]]
        }   
    }
}else if(num[0]<num[1]){
    if(num[2]>num[1]){
        numama=[num[0],num[1],num[2]]
    }else if(num[2]<num[1]){
        if (num[0]>num[2]){
            numama=[num[2],num[0],num[1]]
        }else if(num[0]<num[2]){
            numama=[num[0],num[2],num[1]]
        }   
    }
}

console.log(numama)

//ordena de menor a mayor facil
const nume=[1,3,6,7,4,33,7,5,3,6,7,7,4,4,6,7,89,3,3,6,66,79,552]
const c=num.sort(function(a,b){return a-b})
console.log(c)