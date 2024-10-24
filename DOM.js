const titre = document.getElementsByClassName("title");
console.log(titre,"recuperation de tous les elements contenants la classe title");
const h= document.getElementsByTagName("h2");
console.log(h,"recuperation des elements selon le nom de la balise");
const id = document.getElementById("démo");
document.getElementById("démo").style.color="blue";
console.log(id,"recuperation des elements selon leur id");
document.getElementById("démo").innerText="texte modifié avec innerText";
function salutation(){
    if(id.innerHTML==="Libre pour tout le monde"){
        id.innerHTML="Bonjour tout le monde";


    }else{
        id.innerHTML="Libre pour tout le monde";
    }
}
id.onclick=salutation;
const booklist= document.querySelector("#Liste-livres li:nth-child(2) .name");
console.log("notre element est ",booklist);
const mySelector=document.querySelectorAll("#Liste-livres .name");
console.log("mes elements sont",mySelector);
//document.getElementById("démo").innerHTML="<h2>texte modifié avec innerHTML</h2>";
