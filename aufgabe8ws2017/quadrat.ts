//Aufgabe 8 quadrat
//Name: Saile Christian
//Matrikel: 254877
//Datum: 7.Dezember 2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.







namespace Aufgabe8 {
    window.onload = init; // Wenn die Seite komplett geladen ist, führe die init Funktion aus



    function init(): void {
        //Funktionsaufrufe für andere Quadrate, die man zu Beginn sieht
        drawQuadrat(50, 73, "yellow", 550, 550);
        drawQuadrat(120, 133, "orange", 550, 550);
        drawQuadrat(145, 163, "purple", 550, 550);
        drawQuadrat(165, 183, "green", 550, 550);
        drawQuadrat(195, 213, "darkgreen", 550, 550);
        drawQuadrat(225, 233, "red", 550, 550);
        //button wird erstellt und dem Body hinzugefügt
        let button: HTMLButtonElement = document.createElement("button");
        document.body.appendChild(button);
        //Text für den Button
        button.textContent = "Jetzt starten";
        //click Event
        button.addEventListener("click", start);






    }
    //Parameterfunktion
    function drawQuadrat(_x: number, _y: number, _color: string, _sizeW: number, _sizeH: number): void {

        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);

        let s: CSSStyleDeclaration = div.style;
        s.borderStyle = "solid";
        s.borderColor = "#000000";
        s.borderWidth = "1px";
        s.position = "absolute";
        s.display = "inline-block";
        s.backgroundColor = _color;
        s.marginLeft = "3px";
        s.marginTop = "5px";
        s.width = _sizeW + "px";
        s.height = _sizeH + "px";
        s.left = _x + "px";
        s.top = _y + "px";








    }
    //Parameterfunktion für zufällig platzierte Quadrate
    function drawQuadrat2(_x: number, _y: number, _color: string, _sizeW: number, _sizeH: number): void {
        //div-elemente werden erstellt und dem DOM hinzugefügt
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);

        let s: CSSStyleDeclaration = div.style;
        s.borderStyle = "dashed";
        s.borderColor = "white";
        s.borderWidth = "1.5px";
        s.position = "absolute";
        s.display = "block";
        s.backgroundColor = _color;
        s.marginLeft = "74px";
        s.marginTop = "74px";
        s.width = _sizeW + "px";
        s.height = _sizeH + "px";
        s.left = _x + "px";
        s.top = _y + "px";








    }
    //Funktion, die durch den Click auf den Button ausgelöst wird
    function start(): void {
        alert("Buenos dias" + ":)" + "\n" + "Sie können so viele Quadrate zeichnen, wie Sie möchten." + "\n" + "So lange Sie eine Zahl zwischen 10 und 100 eingeben");
        //prompt wird erzeugt
        //parseint wandelt string in number um
        var eingabezahl: number = parseInt(prompt("Bitte geben Sie eine Zahl ein"));
        //Aufruf inputtype-funktion
        inputtype(eingabezahl);
    }
    function inputtype(_eingabezahl: number): void {
        //wenn kleiner 10, dann
        if (_eingabezahl < 10) {
            alert("Sie haben eine zu kleine Zahl eingegeben." + "\n" + "Bitte geben Sie eine Zahl zwischen 10 und 100 ein.");

        }
        //wenn größer hundert, dann
        else if (_eingabezahl > 100) {
            alert("Sie haben eine zu große Zahl eingegeben." + "\n" + "Bitte geben Sie eine Zahl zwischen 10 und 100 ein.");

        }
        //wenn größer gleich 10 und kleiner gleich 100, dann zeichne Quadrate
        if (_eingabezahl >= 10 && _eingabezahl <= 100) {
            
            for (let i: number = 0; i < _eingabezahl; i++) {
                let x: number = (Math.random() * 1230);
                let y: number =  (Math.random() * 994);
                let color: string = "hsl(" + Math.random() * 250 + ", 180%, 80%)";

                drawQuadrat2(x, y, color, 70, 70);
            }
        }


    }












}