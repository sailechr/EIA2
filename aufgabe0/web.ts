//Beginn
//Aufgabe: 0
//Name: Saile Christian
//Matrikel: 254877
//Datum: 18.M�rz 2017 
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.


document.addEventListener("DOMContentLoaded", function(): void {
    var name: string;
    name = prompt("Bitte geben Sie ihren Namen ein :)");
    if (name) {
        alert("Hallo" + name + ":)");
    }
    document.getElementById("eingabename").innerHTML = name;
});