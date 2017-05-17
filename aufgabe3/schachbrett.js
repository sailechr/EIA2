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
        divs.addEventListener("click", selected);
        function selected() {
            if (((z + 1) % 1) == 0) {
                this.classList.toggle("div");
                //toggle== umschalten !
                console.log("yes we can");
            }
        }
    }
});
//# sourceMappingURL=schachbrett.js.map