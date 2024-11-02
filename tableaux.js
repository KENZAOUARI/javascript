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

//La méthode splice est utilisée pour ajouter des éléments au tableau
const fruits = ['banane', 'pomme', 'cerise', 'poir'];
fruits.splice(2, 0, 'citron', 'kiwi');//2 est l'indice à partir duquel nous voulons modifier le tableau.
console.log(fruits, 'fruits');

//La méthode slice crée une nouvelle copie du tableau à partir d'une plage d'indices
//3 est l'indice de départ (inclus) où la copie commence, correspondant à l'élément 'poir'.
//4 est l'indice de fin (exclus), donc l'élément à cet indice n'est pas inclus dans le résultat.

const fr = fruits.slice(3, 4); 
console.log(fr);

const fruits2 = ['banane', 'orange', 'citron', 'pomme', 'mangue'];
const slicefruit2 = fruits2.slice(2);
console.log(slicefruit2); 

const fruits3 = ['banane', 'orange', 'citron', 'pomme', 'mangue'];
const slicefruit3 = fruits3.slice(1, 3); 
console.log(slicefruit3);

// exercice
const nombres = [1, 2, 3, 4, 5, 6, 7];
