function mydisplayer(x){
    document.getElementById("demo").innerHTML=x;

}
function mycalculator(num1,num2,mycallback){
    let somme=num1+num2;
    mycallback(somme);
}
mycalculator(1,2,mydisplayer);