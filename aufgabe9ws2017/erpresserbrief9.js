//Aufgabe 9 erpresserbrief
//Name: Saile Christian
//Matrikel: 254877
//Datum: 14.Dezember 2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Aufgabe9;
(function (Aufgabe9) {
    window.onload = init; // Wenn die Seite komplett geladen ist, führe die init Funktion aus
    let section;
    let div;
    function init() {
        console.log("Hallo ich bin Sushi");
        //tastatur wird gezeichnet
        drawQuadrat((Math.random() * 10), (Math.random() * 4), "orange", 50, 50);
        //Sektion wird kreiert
        section = document.createElement("section");
        document.body.appendChild(section);
        let b;
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
        for (let i = 65; i <= 90; i++) {
            let alphabet = String.fromCharCode(i);
            //aus numerischen Parametern wird eine entsprechende Zeichenkette erzeugt a=65 und z =90
            console.log(alphabet);
        }
    }
    function drawQuadrat(_x, _y, _color, _sizeW, _sizeH) {
        //tastatur aus div-boxen wird erstellet
        for (let i = 0; i < 48; i++) {
            div = document.createElement("div");
            document.body.appendChild(div);
            div.addEventListener("mousedown", MousedownEvent);
            div.addEventListener("mousedown", changeColor);
            let s = div.style;
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
            let alphabet = String.fromCharCode(i + 65);
            div.textContent = alphabet;
        }
    }
    //funktion für den Mausklick, die div-boxen mit den passenden buchstaben in der Sektion erstellt
    function MousedownEvent(_event) {
        console.log(_event);
        console.log(_event.srcElement);
        //Deklaration einer variablen, die eine DIV-box erstellt
        let div = document.createElement("div");
        //erstellte es Element wird dynamisch an den DOM gehängt
        document.body.appendChild(div);
        let s = div.style;
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
        var outString = div.textContent;
        div.textContent = _event.srcElement.textContent;
        outString += _event.srcElement.textContent;
        section.textContent = outString;
    }
    //verändert aussehen der tastatur
    function changeColor(_event) {
        //div-tastatur =zugriff
        div = _event.srcElement;
        if (div) {
            this.classList.toggle("div");
        }
    }
    //funktion für die Tastatureingabe
    function KeyboardEvent(_event) {
        let div = document.createElement("div");
        let s = div.style;
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
        var outString = div.textContent;
        //Wertzuweisung, und zwar der Inhalt der divboxen
        outString += String.fromCharCode(_event.keyCode);
        //der sektion werden div-boxen mit buchstaben hinzugefügt bei jedem klick auf die sektion
        section.textContent = outString;
        document.body.appendChild(div);
    }
    //funktion, die die werte löschen sollte
    function removeInput(_event) {
        console.log(_event.altKey);
        //funktioniert nicht und ich habe keine ahnung warum :(
        //weiß nicht mehr weiter
        if (_event.keyCode == 18) {
            deleteInput(_event);
        }
    }
    function deleteInput(_event) {
        let _delete = _event.target;
        document.addEventListener("keypressed", removeInput);
        _delete = document.body.removeChild(div);
    }
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=erpresserbrief9.js.map