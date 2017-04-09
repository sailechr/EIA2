//Aufgabe 2
//Name: saile christian
//Matrikel: 254877
//Datum: 9.April 2017
//    
//Hiermit versichere ich, 
//dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
document.addEventListener("DOMContentLoaded", function(): void {

    let zahlRice: number = 1;
    let zeile: number = 0;

    for (let i: number = 0; i < 64; i++) {
        let div: HTMLElement = document.createElement("div");

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
    let divlist: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
    for (let z: number = 0; z < 8; z++) {
        let divs: HTMLDivElement = divlist[z];


        divs.addEventListener("click", function(): void {
            if (((z + 1) % 1) == 0) {
                this.classList.toggle("div");
                console.log("yes we can");
               
            }
        });
    }
    
        
});


