//Aufgabe 2
//Name: saile christian
//Matrikel: 254877
//Datum: 9.April 2017
//    
//Hiermit versichere ich, 
//dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
document.addEventListener("DOMContentLoaded", function () {
    let zahlRice = 1;
    let zeile = 0;
    for (let i = 0; i < 64; i++) {
        let div = document.createElement("div");
        if (((i + zeile) % 2) == 0) {
            div.className = "brett black";
        }
        else {
            div.className = "brett white";
        }
        if (((i + 1) % 8) == 0) {
            zeile++;
        }
        if (zahlRice >= 16384) {
            div.textContent = zahlRice.toExponential(4).toString();
            zahlRice = zahlRice * 2;
            document.body.appendChild(div);
        }
        else {
            div.textContent = zahlRice.toString();
            zahlRice = zahlRice * 2;
            document.body.appendChild(div);
        }
    }
    let divlist = document.getElementsByTagName("div");
    for (let z = 0; z < 8; z++) {
        let divs = divlist[z];
        divs.addEventListener("click", function () {
            if (((z + 1) % 1) == 0) {
                this.classList.toggle("div");
                console.log("yes we can");
                all();
            }
        });
        
//zweiter Teil der Aufgabe habe ich nicht hinbekommen! ich bin nur so weit gekommen
// in den Kommentaren ist ein möglicher Ansatz
//        function all() {
//            let classdiv = document.getElementsByClassName("div");
//            let unvisible = document.getElementById("box");
//            let all = 0;
//            let wahr = true;
//            if (classdiv.length == 0) {
//                unvisible.style.display = "none";
//                wahr = true;
//            }
//            else {
//                unvisible.style.disply = "inline-block";
//                wahr = false;
//            }
//            for (let a = 0; a < classdiv.length; a++) {
//                all += Number(classdiv[a].textContent);
//                unvisible.textContent = "Alle markierten Reiskörner in der ersten Zeile ergeben folgende Summe:" + "Dezimal:" + all.toString() + "Hexadezimal:" + all.toString(16);
//            }
//            document.addEventListener("mousemove", function (Aktion) {
//                unvisible.style.left = (Aktion.clientX + 10) + "px";
//                unvisible.style.top = (Aktion.clientY + 10) + "px";
//            });
//        }
//    }
//});
//document.addEventListener('DOMContentLoaded', function () {
//    var notabletosee = document.getElementById("navigationsicon");
//    var itistrue = false;
//    var button = document.getElementById("burgericon");
//    button.addEventListener("click", function () {
//        if (itistrue == true) {
//            notabletosee.style.display = "none";
//            console.log("nicht asnzeigemn");
//            itistrue = false;
//        }
//        else {
//            notabletosee.style.display = "block";
//            console.log("asnzeigemn");
//            itistrue = true;
//        }
//    }); 
//# sourceMappingURL=schachbrett.js.map