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

        drawQuadrat(50, 73, "yellow", 550, 550);
        drawQuadrat(120, 133, "orange", 550, 550);
        drawQuadrat(145, 163, "purple", 550, 550);
        drawQuadrat(165, 183, "green", 550, 550);
        drawQuadrat(195, 213, "darkgreen", 550, 550);
        drawQuadrat(225, 233, "red", 550, 550);

        let button: HTMLButtonElement = document.createElement("button");
        document.body.appendChild(button);
        button.textContent = "Jetzt starten";
        button.addEventListener("click", start);






    }
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
    function drawQuadrat2(_x: number, _y: number, _color: string, _sizeW: number, _sizeH: number): void {

        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);

        let s: CSSStyleDeclaration = div.style;
        s.borderStyle = "dashed";
        s.borderColor = "white";
        s.borderWidth = "1.5px";
        s.position = "absolute";
        s.display = "inline-block";
        s.backgroundColor = _color;
        s.marginLeft = "12px";
        s.marginTop = "12px";
        s.width = _sizeW + "px";
        s.height = _sizeH + "px";
        s.left = _x + "px";
        s.top = _y + "px";








    }
    function start(): void {
        alert("Buenos dias" + ":)" + "\n" + "Sie können so viele Quadrate zeichnen, wie Sie möchten." + "\n" + "So lange Sie eine Zahl zwischen 10 und 100 eingeben");

        var eingabezahl: number = parseInt(prompt("Bitte geben Sie eine Zahl ein"));

        inputtype(eingabezahl);
    }
    function inputtype(_eingabezahl: number): void {
        if (_eingabezahl < 10) {
            alert("Sie haben eine zu kleine Zahl eingegeben." + "\n" + "Bitte geben Sie eine Zahl zwischen 10 und 100 ein.");

        }
        else if (_eingabezahl > 100) {
            alert("Sie haben eine zu große Zahl eingegeben." + "\n" + "Bitte geben Sie eine Zahl zwischen 10 und 100 ein.");

        }

        if (_eingabezahl >= 10 && _eingabezahl <= 100) {
            
            for (let i: number = 0; i < _eingabezahl; i++) {
                let x: number = 14 + (Math.random() * 770);
                let y: number = x + 10 + (Math.random() * 340);
                let color: string = "hsl(" + Math.random() * 200 + ", 180%, 70%)";

                drawQuadrat2(x, y, color, 70, 70);
            }
        }


    }












}