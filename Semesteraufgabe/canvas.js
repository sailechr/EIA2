//Aufgabe abschluss
//Name: Saile Christian
//Matrikel: 254877
//Datum: 22.Feburar 2018 
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
//canvas hauptdatei
var CANVAS;
(function (CANVAS) {
    window.onload = init; // Wenn die Seite komplett geladen ist, führe die init Funktion aus
    let canvas;
    //Variablen um Umrandung zu zeichnen
    let breite = 1000;
    let hoehe = 650;
    let blockGroesse = 10;
    let breiteInBloecken = breite / blockGroesse;
    let hoeheInBloecken = hoehe / blockGroesse;
    //Array for animations vom Typ AnimatedObjects (superklasse)
    let movingObjects = [];
    //variable, um den Hintergrund abzuspeichern
    let imgData;
    //init funktion, die Bäume, berge, Wolken usw. zeichnet
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        CANVAS.crc2 = canvas.getContext("2d");
        //Aufruf canvas clicked
        canvas.addEventListener("click", canvasClicked);
        infos();
        //background
        CANVAS.crc2.beginPath();
        CANVAS.crc2.fillStyle = "#7FFFd4 ";
        CANVAS.crc2.rect(0, 0, canvas.width, 800);
        CANVAS.crc2.closePath();
        CANVAS.crc2.fill();
        CANVAS.crc2.stroke();
        //Aufruf von funktion die graue Umrandung zeichnet
        drawBorder();
        //startposition for icecream
        for (let i = 0; i < 16; i++) {
            let cream;
            cream = new CANVAS.Icecream(Math.random() * 660, Math.random() * 50, "saddlebrown");
            movingObjects.push(cream);
        }
        //startwert für die früchte orangen und trauben
        for (let i = 0; i < 6; i++) {
            let f;
            f = new CANVAS.Fruits(Math.random() * 800 + 20, Math.random() * 130, "brown");
            movingObjects.push(f);
        }
        //startwert für Kaugummis in verschiedenen Farben und größen mit math.random
        for (let i = 0; i < 10; i++) {
            let b;
            b = new CANVAS.Bubblegum(Math.random() * 600, 1);
            movingObjects.push(b);
        }
        //startwert für die schockolade
        for (let i = 0; i < 8; i++) {
            let c = new CANVAS.Chocolate(2 + Math.random() * 560, 1 + Math.random() * 1.56);
            movingObjects.push(c);
        }
        //backgroundimage is saved
        imgData = CANVAS.crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        //Aufruf animateFunktion
        animate();
    }
    function infos() {
        alert("Welcome to" + "\n" + "Catch the Food" + ":)");
        alert("You have to catch the entire food before it hits the ground.");
        alert("You should catch the food as fast as you can" + ":)");
        alert("If you click on the food, you will catch it" + "\n" + "Enjoy yourself!");
    }
    //zeichne Umrandung innerhalb vom canvas
    function drawBorder() {
        CANVAS.crc2.fillStyle = "Grey";
        CANVAS.crc2.fillRect(0, 0, breite, blockGroesse);
        CANVAS.crc2.fillRect(0, hoehe - blockGroesse, breite, blockGroesse);
        CANVAS.crc2.fillRect(0, 0, blockGroesse, hoehe);
        CANVAS.crc2.fillRect(breite - blockGroesse, 0, blockGroesse, hoehe);
    }
    function animate() {
        //crc2.clearRect(0, 0, 1000, 650);
        CANVAS.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < movingObjects.length; i++) {
            let s = movingObjects[i];
            s.draw();
            s.gameOver();
        }
        window.setTimeout(animate, 30);
    }
    //man bekommet die richtige Position des Klicks auf dem Canvas
    function canvasClicked(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        // Implementiert nach: http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
        let rect = canvas.getBoundingClientRect();
        let x = _event.clientX - rect.left;
        let y = _event.clientY - rect.top;
        for (let i = 0; i < movingObjects.length; i++) {
            if (movingObjects[i].hit(x, y)) {
                movingObjects.splice(i, 1);
                //elemente werden beim klicken auf den canvas aus dem array entfernt mit splice
                break;
            }
        }
        //wenn nichts mehr im array ist, dann kommt die Meldung , dass man das Spiel gewonnen hat
        if (movingObjects.length == 0) {
            alert("You just won the game! Congratulations :)");
            alert("Seite neu laden, um weiter zu spielen!");
        }
    }
})(CANVAS || (CANVAS = {}));
//# sourceMappingURL=canvas.js.map