const myarray = ["banane","pomme","cerise" , "poire", 4];
console.log(myarray, "mon tableau");
console.log(myarray.length ,"la longeure");
console.log(myarray.toString(), "transformation en taleau au chaine de caracteres");
console.log(myarray.join("/"));

//autre déclaration de tableau

const cars = new Array("bmw" , "toyota" , " renaul");
console.log(cars, "mes voitures" );
//supprimer dernier élément de tableau
let voiture = cars.pop();
console.log(voiture);// affiche l'élément supprimer
console.log(cars);// tableau aprés suppression

let fruit = myarray.push("kiwi");// ajouter un élément un derniere position de tableau
console.log(fruit);
console.log(myarray);
console.log(myarray[1]);
myarray[0] = "papaye";
console.log(myarray);

const boys = ["ahmed", "billel" , "abdellah"];
const girls = ["line", "aya" ,"kenza"];

const mychildren = boys.concat(girls);
console.log(mychildren , "mychildren");




