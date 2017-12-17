//Aufgabe 9 erpresserbrief
//Name: Saile Christian
//Matrikel: 254877
//Datum: 14.Dezember 2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.







namespace Aufgabe9 {
    window.onload = init; // Wenn die Seite komplett geladen ist, führe die init Funktion aus
    let section: HTMLElement;
    let div: HTMLDivElement;



    function init(): void {


        console.log("Hallo ich bin Sushi");

        //tastatur wird gezeichnet
        drawQuadrat((Math.random() * 10), (Math.random() * 4), "orange", 50, 50);

        //Sektion wird kreiert
        section = document.createElement("section");


        document.body.appendChild(section);
        let b: CSSStyleDeclaration;
        //styleeigenschaften
        b = section.style;
        b.borderStyle = "solid";
        b.borderColor = "red";
        b.borderWidth = "2px";
        b.backgroundColor = "#ff8040";

        b.marginLeft = "3px";
        b.marginRight = "3px";
        b.marginTop = "5px";
        b.display = "inline-block";
        b.width = 1350 + "px";
        b.height = 1200 + "px";
        //sektion bekommt einen Listener, der auf eine Mausbewegung reagiert
        section.addEventListener("mousedown", MousedownEvent);
        //Aufruf funktion für tastatur, die auf Tastendruck-events reagiert
        //funktion wird an das dokument gehängt
        //onkeydown =The onkeydown event occurs when the user is pressing a key (on the keyboard).
        //wird ausgeführt, wenn man eine Taste auf der Tastatur drückt
        document.onkeydown = KeyboardEvent;






        for (let i: number = 65; i <= 90; i++) {
            let alphabet: string = String.fromCharCode(i);

            //aus numerischen Parametern wird eine entsprechende Zeichenkette erzeugt a=65 und z =90
            console.log(alphabet);
        }

    }
    function drawQuadrat(_x: number, _y: number, _color: string, _sizeW: number, _sizeH: number): void {
        //tastatur aus div-boxen wird erstellet

        for (let i: number = 0; i < 48; i++) {

            div = document.createElement("div");

            document.body.appendChild(div);

            div.addEventListener("mousedown", MousedownEvent);
            div.addEventListener("mousedown", changeColor);










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


            let alphabet: string = String.fromCharCode(i + 65);

            div.textContent = alphabet;







        }





    }
    //funktion für den Mausklick, die div-boxen mit den passenden buchstaben in der Sektion erstellt
    function MousedownEvent(_event: MouseEvent): void {

        console.log(_event);
        console.log(_event.srcElement);
        //Deklaration einer variablen, die eine DIV-box erstellt
        let div: HTMLDivElement = document.createElement("div");

        //erstellte es Element wird dynamisch an den DOM gehängt
        document.body.appendChild(div);

        let s: CSSStyleDeclaration = div.style;
        s.borderStyle = "solid";
        s.borderColor = "white";
        s.borderWidth = "1px";
        s.backgroundColor = "whitesmoke";
        s.color = "orange";

        s.marginTop = "57px";

        s.position = "absolute";
        s.width = 50 + "px";
        s.height = 50 + "px";
        s.left = _event.screenX.toString();
        s.top = _event.screenY.toString();
        div.addEventListener("mousedown", removeInput);


        var outString: string = div.textContent;

        div.textContent = _event.srcElement.textContent;
        outString += _event.srcElement.textContent;

        section.textContent = outString;








    }
    //verändert aussehen der tastatur
    function changeColor(_event: MouseEvent): void {
        //div-tastatur =zugriff
        div = <HTMLDivElement>_event.srcElement;

        if (div) {
            this.classList.toggle("div");
            //toggle=umschalten
            //wenn auf die div-tastatur geklickt wird, dann ändert sich die Schriftfarbe
        }



    }
    //funktion für die Tastatureingabe
    function KeyboardEvent(_event: KeyboardEvent): void {

        let div: HTMLDivElement = document.createElement("div");


        let s: CSSStyleDeclaration = div.style;
        s.borderStyle = "solid";
        s.borderColor = "white";
        s.borderWidth = "1px";
        s.backgroundColor = "whitesmoke";
        s.color = "orange";
        s.marginLeft = "3px";
        s.position = "absolute";
        s.marginTop = "5px";
        s.display = "inline-block";
        s.position = "absolute";
        s.width = 50 + "px";
        s.height = 50 + "px";
        div.addEventListener("mousedown", removeInput);


        console.log(_event.keyCode);
        console.log(_event);
        //deklaration der variablen outstring vom typ string, die die unicodzahlen in die buchstaben umwandelt
        var outString: string = div.textContent;
        //Wertzuweisung, und zwar der Inhalt der divboxen


        outString += String.fromCharCode(_event.keyCode);
        //der sektion werden div-boxen mit buchstaben hinzugefügt bei jedem klick auf die sektion
        section.textContent = outString;
        document.body.appendChild(div);


    }
    //funktion, die die werte löschen sollte
    function removeInput(_event: KeyboardEvent): void {

        console.log(_event.altKey);
        //funktioniert nicht und ich habe keine ahnung warum :(
        //weiß nicht mehr weiter

        if (_event.keyCode == 18) {
            deleteInput(_event);

        }


    }


    function deleteInput(_event: KeyboardEvent): void {
        let _delete: EventTarget = <HTMLDivElement>_event.target;
        document.addEventListener("keypressed", removeInput);
        _delete = document.body.removeChild(div);

    }


}

