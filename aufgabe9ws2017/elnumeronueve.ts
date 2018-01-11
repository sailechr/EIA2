//Aufgabe 9 erpresserbrief
//Name: Saile Christian
//Matrikel: 254877
//Datum: 14.Dezember 2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
namespace Aufgabe9 {
    window.onload = init;
    // Wenn die Seite komplett geladen ist, führe die init Funktion aus
    let section: HTMLElement;
    let b: CSSStyleDeclaration;
    //buchstabenarray
    let alphabet: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let div: HTMLDivElement;
    //Leerstring
    let outString: string = "";
    function init(): void {
        section = document.createElement("section");


        document.body.appendChild(section);

        //styleeigenschaften
        b = section.style;
        b.borderStyle = "solid";
        b.borderColor = "red";
        b.borderWidth = "2px";
        b.backgroundColor = "#ff8040";
        //        b.opacity = "0.1";

        b.marginLeft = "3px";
        b.marginRight = "3px";
        b.marginTop = "5px";
        b.display = "inline-block";
        b.width = 1350 + "px";
        b.height = 400 + "px";
        section.addEventListener("mousedown", MousedownEvent);
        document.onkeydown = KeyboardEvent;
        for (let i: number = 65; i <= 90; i++) {
            let alphabet: string = String.fromCharCode(i);
            console.log(alphabet);
        }

        drawTastatur((Math.random() * 10), (Math.random() * 4), "orange", 50, 50);


    }
    function drawTastatur(_x: number, _y: number, _color: string, _sizeW: number, _sizeH: number): void {
        for (let i: number = 0; i < alphabet.length; i++) {


            let div: HTMLDivElement;


            div = document.createElement("div");

            document.body.appendChild(div);






            let s: CSSStyleDeclaration = div.style;
            s.borderStyle = "solid";
            s.borderColor = "white";
            s.borderWidth = "1px";

            s.display = "inline-block";
            s.backgroundColor = _color;
            s.marginLeft = "3px";
            s.marginTop = "5px";

            s.width = _sizeW + "px";
            s.height = _sizeH + "px";
            s.left = _x + "px";
            s.top = _y + "px";
            div.textContent = alphabet[i];
            div.id = alphabet[i].toLowerCase();
            div.addEventListener("mousedown", changeColor);

        }

    }
    function MousedownEvent(_event: MouseEvent): void {
        if (outString == "")
            return;

        div = document.createElement("div");

        document.body.appendChild(div);






        let s: CSSStyleDeclaration = div.style;
        s.borderStyle = "solid";
        s.borderColor = "white";
        s.borderWidth = "1px";
        s.position = "absolute";
        s.display = "inline-block";
        s.backgroundColor = "hsl(" + Math.random() * 550 + ", 180%, 90%)";
        s.marginLeft = "3px";
        s.marginTop = "5px";

        s.width = 50 + "px";
        s.height = 50 + "px";
        s.left = _event.clientX.toString() + "px";
        s.top = _event.clientY.toString() + "px";
        div.textContent = outString;
        div.addEventListener("mousedown", deleteBoxes);


        let clickedDiv: HTMLDivElement = <HTMLDivElement>document.getElementById(outString.toUpperCase());
        if (clickedDiv) {
            //toggle= umschalten
            this.classList.toggle("div");
        }
        outString = "";






    }
    function changeColor(_event: MouseEvent): void {
        if (outString == "") {
            let div: HTMLDivElement = <HTMLDivElement>_event.target;
            if (div) {
                this.classList.toggle("div");
                outString = div.id.toUpperCase();
                //uppercas wandelt Buchstaben in Großbuchstaben um und lowercase in Kleinbuchstaben
            }




        }


    }
    function KeyboardEvent(_event: KeyboardEvent): void {
        let div: HTMLDivElement = <HTMLDivElement>document.getElementById(_event.key);

        if (_event.keyCode) {



            //ascicode wird mit charcode in dazugehörige Buchstaben verwandelt
            outString = String.fromCharCode(_event.keyCode);
            //beim auswählen den style ändern
            div.style.fontWeight = "bolder";
            div.style.color = "white";

            console.log(_event.keyCode);
            console.log(_event);





        }

        outString = div.id.toUpperCase();










    }
    function deleteBoxes(_event: KeyboardEvent): void {
        let b: boolean = false;
        //wenn alttaste gedrückt ist, 
        //dann ist die bedienung wahr und die divElemente in der section werden gelöscht
        //event.target =Ziel des Events, also auf was man klickt
        if (_event.altKey != b) {
            let div: HTMLDivElement = <HTMLDivElement>_event.target;
            document.body.removeChild(div);
        }






    }
}