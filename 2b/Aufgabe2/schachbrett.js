//Aufgabe 2
//Name: saile christian
//Matrikel: 254877
//Datum: 2.April 2017
//    
//Hiermit versichere ich, 
//dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
let zahlRice = 1;
let zeile = 0;
for (let i = 0; i < 64; i++) {
    let div = document.createElement("div");
    document.body.appendChild(div);
    div.textContent = zahlRice.toExponential(5);
    zahlRice = zahlRice * 2;
    zahlRice.toString();
    if (i % 8 == 0) {
        zeile++;
    }
    if (zeile % 2 == 1) {
        if (i % 2 == 0) {
            div.style.backgroundColor = "black";
        }
        if (i % 2 == 1) {
            div.style.backgroundColor = "white";
        }
        if (zeile % 2 == 0) {
            if (i % 2 == 0) {
                div.style.backgroundColor = "white";
            }
            if (i % 2 == 1) {
                div.style.backgroundColor = "black";
            }
        }
    }
}
//# sourceMappingURL=schachbrett.js.map