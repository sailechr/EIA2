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
        div.addEventListener("click", function () {
            let display;
            if (zeile == 0) {
                div.style.backgroundColor = "yellowgreen";
                div.style.display = "block";
                display = true;
                console.log("yes");
            }
            else {
                div.style.display = "none";
                console.log("ne");
                display = false;
            }
        });
    }
});
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