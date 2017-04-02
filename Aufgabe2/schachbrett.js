//Aufgabe 2
//Name: saile christian
//Matrikel: 254877
//Datum: 2.April 2017
//    
//Hiermit versichere ich, 
//dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
document.addEventListener('DOMContentLoaded', function () {
    let zahlRice = 1;
    let zeile = 1;
    for (let i = 0; i < 64; i++) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.textContent = zahlRice.toExponential(5);
        zahlRice = zahlRice * 2;
        zahlRice.toString();
        if (i % 8 == 0) {
            div.className += "abbruch";
            zeile++;
        }
        if (zeile % 2 == 1) {
            if (i % 2 == 1) {
                div.className += "black";
            }
            else {
                div.className += "white";
            }
            if (zeile % 2 == 0) {
                if (i % 2 == 0) {
                    div.className += "white";
                }
                else {
                    div.className += "black";
                }
            }
        }
    }
});
//# sourceMappingURL=schachbrett.js.map