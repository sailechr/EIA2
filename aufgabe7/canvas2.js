//Aufgabe: 4 Triberger Wasserfälle Wikipedia"
//Name: Saile Christian
//Matrikel: 254877
//Datum: 21. April 
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Aufgabe7_Bees;
(function (Aufgabe7_Bees) {
    window.onload = init; // Wenn die Seite komplett geladen ist führe die init Funktion aus
    let canvas;
    let nBees = 10;
    let imgData;
    let squares = [];
    Aufgabe7_Bees.colorArray = [];
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe7_Bees.crc2 = canvas.getContext("2d");
        //sky
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#7FFFd4 ";
        Aufgabe7_Bees.crc2.rect(0, 0, canvas.width, 400);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.stroke();
        //lawn
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#7FFFd4 ";
        Aufgabe7_Bees.crc2.rect(0, 0, canvas.width, 400);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.stroke();
        //sun alles andere hier außer funktionen        
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#FFFF00";
        Aufgabe7_Bees.crc2.strokeStyle = "orange";
        Aufgabe7_Bees.crc2.lineWidth = 6;
        let grad2 = Aufgabe7_Bees.crc2.createLinearGradient(80, 330, 93, 80);
        grad2.addColorStop(0, "yellow");
        grad2.addColorStop(1, "orange");
        Aufgabe7_Bees.crc2.fillStyle = grad2;
        Aufgabe7_Bees.crc2.arc(160, 160, 100, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.stroke();
        //Baumstamm
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "brown ";
        Aufgabe7_Bees.crc2.fillRect(137, 470, 60, 240);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.stroke();
        //tree
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#6B8e23 ";
        Aufgabe7_Bees.crc2.arc(185, 268, 97, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#6B8e23 ";
        Aufgabe7_Bees.crc2.arc(215, 373, 110, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#6B8e23 ";
        Aufgabe7_Bees.crc2.arc(130, 382, 100, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#6B8e23";
        Aufgabe7_Bees.crc2.arc(207.99, 420, 74, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#6B8e23";
        Aufgabe7_Bees.crc2.arc(145, 420, 74, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#6B8e23";
        Aufgabe7_Bees.crc2.arc(173, 429, 81, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        //draw mountains
        //quadratische Kurve = quadratic Curve(Bogen für Hügel/Berge/auch Bezierkurve)
        //besteht aus 2 Punkten
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.stroke();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.lineWidth = 6;
        Aufgabe7_Bees.crc2.strokeStyle = "black";
        //Farbverlauf von schneebedeckten Gipfel zu Fels
        let grad = Aufgabe7_Bees.crc2.createLinearGradient(80, 230, 96, 80);
        grad.addColorStop(0, "grey");
        grad.addColorStop(1, "whitesmoke");
        Aufgabe7_Bees.crc2.fillStyle = grad;
        Aufgabe7_Bees.crc2.moveTo(578, 400);
        Aufgabe7_Bees.crc2.quadraticCurveTo(890, -150, 1050, 400);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.stroke();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.stroke();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.lineWidth = 6;
        Aufgabe7_Bees.crc2.strokeStyle = "black"; // line color
        Aufgabe7_Bees.crc2.fillStyle = grad;
        Aufgabe7_Bees.crc2.moveTo(778, 400);
        Aufgabe7_Bees.crc2.quadraticCurveTo(1300, -150, 1400, 400);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.stroke();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.stroke();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.lineWidth = 6;
        Aufgabe7_Bees.crc2.strokeStyle = "black"; // line color
        Aufgabe7_Bees.crc2.moveTo(328, 400);
        Aufgabe7_Bees.crc2.quadraticCurveTo(600, -150, 900, 400);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.stroke();
        Aufgabe7_Bees.crc2.fill();
        drawCloud(1000, 120, "#F5F5F5", "#F5F5F5");
        drawCloud(920, 92, "#F5F5F5", "#F5F5F5");
        drawCloud(520, 130, "#F5F5F5 ", "#F5F5F5");
        drawBushes(600, 400, "black", "green");
        drawBushes1(870, 400, "black", "green");
        drawBushes2(1100, 400, "black", "green");
        drawBushes3(360, 400, "black", "green");
        drawDekoBushes(874, 400, "#Da70d6", "#Da70d6");
        drawDekoBushes1(1274, 400, "#Da70d6", "#Da70d6");
        // define an array of different colors
        Aufgabe7_Bees.colorArray.push("red"); // 0
        Aufgabe7_Bees.colorArray.push("orange"); // 1
        Aufgabe7_Bees.colorArray.push("blue"); // 2
        Aufgabe7_Bees.colorArray.push("darkorchid"); //3
        Aufgabe7_Bees.colorArray.push("goldenrod"); //4
        Aufgabe7_Bees.colorArray.push("tomato"); // 5
        console.log(Aufgabe7_Bees.colorArray);
        // define number of flowers
        var numFlowers = 70;
        // draw randomly placed flowers
        for (let n = 0; n < numFlowers; n++) {
            let centerX = (Math.random() * (1280 - 307) + 307);
            let centerY = (Math.random() * (720 - 410) + 410);
            let radius = (Math.random() * 25) + 25;
            let colorIndex = Math.round(Math.random() * (Aufgabe7_Bees.colorArray.length - 1));
            //Rückgabewert innerhalb init funktion
            let f = new Aufgabe7_Bees.Flowers();
            f.drawFlowers();
        }
        //Funktion drwaDeko (Früchte am Baum) Aufruf der funktion
        drawDeko(173, 429, "#Da70d6", "#Da70d6");
        drawDeko(145, 419, "#Da70d6", "#Da70d6");
        drawDeko(209, 239, "#Da70d6", "#Da70d6");
        drawDeko(175, 315, "#Da70d6", "#Da70d6");
        drawDeko(175, 315, "#Da70d6", "#Da70d6");
        drawDeko(155, 364, "#Da70d6", "#Da70d6");
        drawDeko(125, 369, "#Da70d6", "#Da70d6");
        drawDeko(105, 394, "#Da70d6", "#Da70d6");
        drawDeko(99, 294, "#Da70d6", "#Da70d6");
        drawDeko(185, 375, "#Da70d6", "#Da70d6");
        drawDeko(175, 175, "#Da70d6", "#Da70d6");
        drawDeko(225, 305, "#Da70d6", "#Da70d6");
        drawDeko(164, 275, "#Da70d6", "#Da70d6");
        //Bienenstock
        drawBienenstock(500, 210, "orange", "black");
        //gemaltes Bild speichern
        imgData = Aufgabe7_Bees.crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        for (let i = 0; i < nBees; i++) {
            // default-values
            let s = new Aufgabe7_Bees.Square(200, 200);
            s.setRandomPosition();
            s.setRandomStyle();
            squares[i] = s;
        }
        canvas.addEventListener("click", newBees); // beim klicken auf das Canvas entstehen neue Bienen
        canvas.addEventListener("touch", newBees); // beim drüberfahren entstehen ebenfalls neue Bienen
        window.setTimeout(animate, 20);
    }
    //Funktion neuen Bienen zeichnen
    function newBees() {
        //let s: Square = { x: 300, y: 580, size: Math.random() * 1 + 2.5, color: "#8FBC8F" };
        let s = new Aufgabe7_Bees.Square(300, 580);
        squares.push(s);
    }
    //clouds in the sky
    function drawCloud(_x, _y, _strokeColor, _fillColor) {
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.strokeStyle = _strokeColor;
        Aufgabe7_Bees.crc2.fillStyle = _fillColor;
        Aufgabe7_Bees.crc2.arc(_x + 40, _y + 80, 10, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.stroke();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.arc(_x + 50, _y + 54, 60, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.stroke();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.arc(_x + 20, _y - 30, 60, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.stroke();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.arc(_x + 90, _y - 50, 60, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.stroke();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.arc(_x + 146, _y + 12, 60, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.stroke();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.arc(_x + 264, _y - 394, 60, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.stroke();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.arc(_x + 174, _y - 44, 50, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.stroke();
        Aufgabe7_Bees.crc2.fill();
    }
    ;
    function drawDeko(_x, _y, _strokeColor, _fillColor) {
        //Dekobaum
        Aufgabe7_Bees.crc2.beginPath();
        //Pfad beginnen
        Aufgabe7_Bees.crc2.strokeStyle = "#Da70d6";
        //Farbe der Umrandung
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6";
        //Füllfarbe
        Aufgabe7_Bees.crc2.arc(_x + 10, _y + 30, 6, 0, Math.PI * 2, true);
        //Kreise
        Aufgabe7_Bees.crc2.closePath();
        //Pfad schließen
        Aufgabe7_Bees.crc2.stroke();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        //neuen Pfad mit beginpath beginnen
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(_x + 3, _y + 9, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(239, 439, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(109, 469, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(209, 299, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(142, 201, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(112, 239, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(242, 239, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(164, 199, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(225, 199, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(254, 299, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(234, 459, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(164, 349, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(134, 356, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(114, 354, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(94, 389, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(84, 439, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(76, 409, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(56, 389, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(46, 369, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(46, 369, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(76, 369, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(206, 439, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(216, 454, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(123, 454, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(297, 321, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(267, 321, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(277, 361, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(274, 379, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(256, 369, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(236, 387, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(216, 367, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(216, 387, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(266, 427, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(213, 483, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(193, 483, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(168, 473, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(148, 473, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(128, 273, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(128, 273, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(108, 273, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(98, 343, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(128, 323, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(147, 243, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(174, 263, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(179, 233, 8, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
    }
    //Busch number one bezierkurve (kubische Kurve)
    //besteht aus 3.Punkten
    function drawBushes(_x, _y, _strokeColor, _fillColor) {
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.strokeStyle = _strokeColor;
        Aufgabe7_Bees.crc2.lineWidth = 6;
        Aufgabe7_Bees.crc2.fillStyle = _fillColor;
        Aufgabe7_Bees.crc2.moveTo(600, 400);
        Aufgabe7_Bees.crc2.bezierCurveTo(_x - 40, _y + 20, _x - 40, _y + 70, _x + 60, _y + 70);
        Aufgabe7_Bees.crc2.bezierCurveTo(_x + 80, _y + 100, _x + 150, _y + 100, _x + 170, _y + 70);
        Aufgabe7_Bees.crc2.bezierCurveTo(_x + 250, _y + 70, _x + 250, _y + 40, _x + 220, _y + 20);
        Aufgabe7_Bees.crc2.bezierCurveTo(_x + 260, _y - 40, _x + 200, _y - 50, _x + 170, _y - 30);
        Aufgabe7_Bees.crc2.bezierCurveTo(_x + 150, _y - 75, _x + 80, _y - 60, _x + 80, _y - 30);
        Aufgabe7_Bees.crc2.bezierCurveTo(_x + 30, _y - 75, _x - 20, _y - 60, _x, _y);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.stroke();
        Aufgabe7_Bees.crc2.fill();
    }
    //Busch number two
    function drawBushes1(_x, _y, _strokeColor, _fillColor) {
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.strokeStyle = _strokeColor;
        Aufgabe7_Bees.crc2.lineWidth = 6;
        Aufgabe7_Bees.crc2.fillStyle = _fillColor;
        Aufgabe7_Bees.crc2.moveTo(870, 400);
        Aufgabe7_Bees.crc2.bezierCurveTo(_x - 40, _y + 20, _x - 40, _y + 70, _x + 60, _y + 70);
        Aufgabe7_Bees.crc2.bezierCurveTo(_x + 80, _y + 100, _x + 150, _y + 100, _x + 170, _y + 70);
        Aufgabe7_Bees.crc2.bezierCurveTo(_x + 250, _y + 70, _x + 250, _y + 40, _x + 220, _y + 20);
        Aufgabe7_Bees.crc2.bezierCurveTo(_x + 260, _y - 40, _x + 200, _y - 50, _x + 170, _y - 30);
        Aufgabe7_Bees.crc2.bezierCurveTo(_x + 150, _y - 75, _x + 80, _y - 60, _x + 80, _y - 30);
        Aufgabe7_Bees.crc2.bezierCurveTo(_x + 30, _y - 75, _x - 20, _y - 60, _x, _y);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.stroke();
        Aufgabe7_Bees.crc2.fill();
    }
    //Busch number three
    function drawBushes2(_x, _y, _strokeColor, _fillColor) {
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.strokeStyle = _strokeColor;
        Aufgabe7_Bees.crc2.lineWidth = 6;
        Aufgabe7_Bees.crc2.fillStyle = _fillColor;
        Aufgabe7_Bees.crc2.moveTo(1100, 400);
        Aufgabe7_Bees.crc2.bezierCurveTo(_x - 40, _y + 20, _x - 40, _y + 70, _x + 60, _y + 70);
        Aufgabe7_Bees.crc2.bezierCurveTo(_x + 80, _y + 100, _x + 150, _y + 100, _x + 170, _y + 70);
        Aufgabe7_Bees.crc2.bezierCurveTo(_x + 250, _y + 70, _x + 250, _y + 40, _x + 220, _y + 20);
        Aufgabe7_Bees.crc2.bezierCurveTo(_x + 260, _y - 40, _x + 200, _y - 50, _x + 170, _y - 30);
        Aufgabe7_Bees.crc2.bezierCurveTo(_x + 150, _y - 75, _x + 80, _y - 60, _x + 80, _y - 30);
        Aufgabe7_Bees.crc2.bezierCurveTo(_x + 30, _y - 75, _x - 20, _y - 60, _x, _y);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.stroke();
        Aufgabe7_Bees.crc2.fill();
    }
    function drawBushes3(_x, _y, _strokeColor, _fillColor) {
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.strokeStyle = _strokeColor;
        Aufgabe7_Bees.crc2.lineWidth = 6;
        Aufgabe7_Bees.crc2.fillStyle = _fillColor;
        Aufgabe7_Bees.crc2.moveTo(360, 400);
        Aufgabe7_Bees.crc2.bezierCurveTo(_x - 40, _y + 20, _x - 40, _y + 70, _x + 60, _y + 70);
        Aufgabe7_Bees.crc2.bezierCurveTo(_x + 80, _y + 100, _x + 150, _y + 100, _x + 170, _y + 70);
        Aufgabe7_Bees.crc2.bezierCurveTo(_x + 250, _y + 70, _x + 250, _y + 40, _x + 220, _y + 20);
        Aufgabe7_Bees.crc2.bezierCurveTo(_x + 260, _y - 40, _x + 200, _y - 50, _x + 170, _y - 30);
        Aufgabe7_Bees.crc2.bezierCurveTo(_x + 150, _y - 75, _x + 80, _y - 60, _x + 80, _y - 30);
        Aufgabe7_Bees.crc2.bezierCurveTo(_x + 30, _y - 75, _x - 20, _y - 60, _x, _y);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.stroke();
        Aufgabe7_Bees.crc2.fill();
    }
    function drawDekoBushes(_x, _y, _strokeColor, _fillColor) {
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.strokeStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(678, 439, 9, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.strokeStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(609, 423, 9, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.strokeStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(615, 393, 9, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.strokeStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(656, 393, 9, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.strokeStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(707, 376, 9, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.strokeStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(796, 436, 9, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.strokeStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(796, 406, 9, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.strokeStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(756, 393, 9, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.strokeStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(756, 456, 9, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.strokeStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(746, 436, 9, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.strokeStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(607, 366, 9, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.strokeStyle = "#Da70d6 ";
        Aufgabe7_Bees.crc2.arc(677, 396, 9, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
    }
    function drawDekoBushes1(_x, _y, _strokeColor, _fillColor) {
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#D2691E  ";
        Aufgabe7_Bees.crc2.strokeStyle = "#D2691E  ";
        Aufgabe7_Bees.crc2.arc(1178, 409, 9, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#D2691E  ";
        Aufgabe7_Bees.crc2.strokeStyle = "#D2691E  ";
        Aufgabe7_Bees.crc2.arc(1109, 423, 9, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#D2691E  ";
        Aufgabe7_Bees.crc2.strokeStyle = "#D2691E  ";
        Aufgabe7_Bees.crc2.arc(1215, 373, 9, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#D2691E  ";
        Aufgabe7_Bees.crc2.strokeStyle = "#D2691E  ";
        Aufgabe7_Bees.crc2.arc(1156, 393, 9, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#D2691E  ";
        Aufgabe7_Bees.crc2.strokeStyle = "#D2691E  ";
        Aufgabe7_Bees.crc2.arc(1187, 373, 9, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#D2691E  ";
        Aufgabe7_Bees.crc2.strokeStyle = "#D2691E  ";
        Aufgabe7_Bees.crc2.arc(1136, 436, 9, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#D2691E  ";
        Aufgabe7_Bees.crc2.strokeStyle = "#D2691E  ";
        Aufgabe7_Bees.crc2.arc(1206, 406, 9, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#D2691E  ";
        Aufgabe7_Bees.crc2.strokeStyle = "#D2691E  ";
        Aufgabe7_Bees.crc2.arc(1236, 415, 9, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#D2691E  ";
        Aufgabe7_Bees.crc2.strokeStyle = "#D2691E  ";
        Aufgabe7_Bees.crc2.arc(1256, 393, 9, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#D2691E  ";
        Aufgabe7_Bees.crc2.strokeStyle = "#D2691E ";
        Aufgabe7_Bees.crc2.arc(1236, 439, 9, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "#D2691E  ";
        Aufgabe7_Bees.crc2.strokeStyle = "#D2691E  ";
        Aufgabe7_Bees.crc2.arc(1186, 436, 9, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
    }
    function drawBienenstock(_x, _y, _strokeColor, _fillColor) {
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.strokeStyle = "black";
        Aufgabe7_Bees.crc2.fillStyle = "orange";
        Aufgabe7_Bees.crc2.lineWidth = 6;
        Aufgabe7_Bees.crc2.arc(260, 540, 39, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.stroke();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.strokeStyle = "brown";
        Aufgabe7_Bees.crc2.lineWidth = 6;
        Aufgabe7_Bees.crc2.lineCap = "round";
        Aufgabe7_Bees.crc2.lineJoin = "miter";
        Aufgabe7_Bees.crc2.miterLimit = 60;
        Aufgabe7_Bees.crc2.moveTo(260, 584);
        Aufgabe7_Bees.crc2.lineTo(260, 708);
        Aufgabe7_Bees.crc2.stroke();
        Aufgabe7_Bees.crc2.closePath();
        Aufgabe7_Bees.crc2.beginPath();
        Aufgabe7_Bees.crc2.fillStyle = "black";
        Aufgabe7_Bees.crc2.moveTo(228, 610);
        Aufgabe7_Bees.crc2.arc(262, 560, 19, 0, Math.PI * 2, true);
        Aufgabe7_Bees.crc2.fill();
        Aufgabe7_Bees.crc2.closePath();
    }
    function animate() {
        Aufgabe7_Bees.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < squares.length; i++) {
            let s = squares[i];
            //Malen der Bienen an der neuen Position
            s.drawObject();
            s.move();
        }
        window.setTimeout(animate, 20);
    }
})(Aufgabe7_Bees || (Aufgabe7_Bees = {}));
//# sourceMappingURL=canvas2.js.map