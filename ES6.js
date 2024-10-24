// var est de scope finction(portée fonction): variable visible par toute la fonction, reconnu à l'interieur de tte la fonction
function exempleVar(){
    var x=5;
    if(true){
        var x=10;
        console.log("la valeur de x est  "+x);
    }
    console.log("la valeur de x en dehors de la condition "+x);
}
exempleVar();
//let est de scope block(où l'accolade est ouverte et ferméé) reconnu qu'à l'interieur des blocks et pas en dehors,utilisée lorsque les valeurs peuvent etre r"assignée
function letexemple(){ //premier block
    let y=5;
    if(true){ //deuxieme block
        let y=10;
        console.log("la valeur de y est  "+y);
    }
    console.log("la valeur de y en dehors de la condition "+y);
}
letexemple();
//const est de scope block (la constante ne peut pas etre réassignée on peut pas lui donner une autre valeur )
function exempleconst(){
    const z=5;
    console.log("la valeur de z est "+z);

}
exempleconst();

