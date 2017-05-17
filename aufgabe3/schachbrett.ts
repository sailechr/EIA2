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


        divs.addEventListener("click", selected);
        function selected(): void {
            if (((z + 1) % 1) == 0) {
                this.classList.toggle("div");
                //toggle== umschalten !
                console.log("yes we can");

            }

        }
    }
    document.addEventListener("mousemove", displaySum); // Wird die Maus bewegt, soll das Div mit der Summe folgen
    function displaySum(_event: MouseEvent): void {
        let divlist: NodeListOf < HTMLDivElement > = document.getElementsByTagName("div");

        let box: HTMLDivElement = <HTMLDivElement>document.getElementById("box");
        let sum: number = 0;
        for (let i: number = 0; i < divs.length; i++) {
            let divs: HTMLDivElement = divlist[i];
            if (divs[i]) {
                sum += Math.pow(2, i);
            }
        }

        box.textContent = "Summe: " + sum;

        box.style.left = 10 + _event.clientX + "px";
        box.style.top = 10 + _event.clientY + "px";
    }
});




