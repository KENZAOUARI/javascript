function addition(a,b){
    return a+b;
}

console.log(" l'addition 1"+addition(4,5));
const ad = (a,b) => a+b;
console.log("l'addition 2 "+ad(1,2));
const salutation=() => "bonsoir tout le monde";
console.log(salutation());
//fonction parité booléenne
function parité(n){
   return n % 2===0;
}
console.log(parité(5));
const pair =(n) =>  n % 2===0;
console.log(pair(10));
//sans return (pas beaucoup d'instructions ) sinon avec return dans la fonction fléchéé
var multi;
function multiplication(a,b){
    multi =a*b;
    console.log(multi);

}
console.log(multiplication(5,6));

//fléchée
const mult2 =(a,b)=>{
    var t=a*b;
    return t;
}
console.log(mult2(5,6));