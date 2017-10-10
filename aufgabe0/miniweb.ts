//Aufgabe: 0
//Name: Saile Christian
//Matrikel: 254877
//Datum: 10.Oktober 2017 
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.


document.addEventListener("DOMContentLoaded", function(): void {
    let name: string;
    name = prompt("Please enter your Name" + "\n" + " :)");
    if (name) {
        alert("Hello" + name + "\n" + ":))");
    }
    document.getElementById("eingabename").innerHTML = name;
});