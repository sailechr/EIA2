//Aufgabe: 4 Triberger Wasserfälle Wikipedia"
//Name: Saile Christian
//Matrikel: 254877
//Datum: 21. April 
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
//immer und überall bei separaten Dateien denselben Namespace verwenden
var Aufgabe8_Superklasse;
(function (Aufgabe8_Superklasse) {
    window.onload = init; // Wenn die Seite komplett geladen ist führe die init Funktion aus
    let canvas;
    let nBees = 10;
    let imgData;
    let bees = [];
    Aufgabe8_Superklasse.blümle = [];
    Aufgabe8_Superklasse.colorarray = ["red", "orange", "blue", "darkorchid", "goldenrod", "tomato"];
    console.log(Aufgabe8_Superklasse.colorarray);
    //Zugriff auf init funktion
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe8_Superklasse.crc2 = canvas.getContext("2d");
        //sky
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#7FFFd4 ";
        Aufgabe8_Superklasse.crc2.rect(0, 0, canvas.width, 400);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.stroke();
        //lawn
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#7FFFd4 ";
        Aufgabe8_Superklasse.crc2.rect(0, 0, canvas.width, 400);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.stroke();
        //sun alles andere hier außer funktionen        
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#FFFF00";
        Aufgabe8_Superklasse.crc2.strokeStyle = "orange";
        Aufgabe8_Superklasse.crc2.lineWidth = 6;
        let grad2 = Aufgabe8_Superklasse.crc2.createLinearGradient(80, 330, 93, 80);
        grad2.addColorStop(0, "yellow");
        grad2.addColorStop(1, "orange");
        Aufgabe8_Superklasse.crc2.fillStyle = grad2;
        Aufgabe8_Superklasse.crc2.arc(160, 160, 100, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.stroke();
        drawTree();
        drawMountains(578, 400, "black");
        drawCloud(1000, 120, "#F5F5F5", "#F5F5F5");
        drawCloud(920, 92, "#F5F5F5", "#F5F5F5");
        drawCloud(520, 130, "#F5F5F5 ", "#F5F5F5");
        drawBushes(600, 400, "black", "green");
        drawBushes1(870, 400, "black", "green");
        drawBushes2(1100, 400, "black", "green");
        drawBushes3(360, 400, "black", "green");
        drawDekoBushes(874, 400, "#Da70d6", "#Da70d6");
        drawDekoBushes1(1274, 400, "#Da70d6", "#Da70d6");
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
        console.log(imgData);
        //gemaltes Bild speichern
        imgData = Aufgabe8_Superklasse.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //define number of flowers
        let numFlowers = 70;
        // draw randomly placed flowers
        for (let n = 0; n < numFlowers; n++) {
            let b = new Aufgabe8_Superklasse.Blümle(this.centerX = 20, this.centerY = 20, this.color);
            Aufgabe8_Superklasse.blümle[n] = b;
            Aufgabe8_Superklasse.blümle.push(b);
        }
        console.log(Aufgabe8_Superklasse.blümle);
        for (let i = 0; i < nBees; i++) {
            //Zugriff auf seperate Datei mit Blumen
            let b = new Aufgabe8_Superklasse.Movingbees(this.x, this.y, this.targetx, this.targety);
            b.setRandomPosition1();
            b.setRandomStyle1();
            b.move();
            b.move1();
            bees[i] = b;
        }
        canvas.addEventListener("click", newBees); // beim klicken auf das Canvas entstehen neue Bienen
        canvas.addEventListener("touch", newBees); // beim drüberfahren entstehen ebenfalls neue Bienen
        window.setTimeout(animate, 20);
    }
    //Funktion neuen Bienen zeichnen
    function newBees() {
        //let s: Square = { x: 300, y: 580, size: Math.random() * 1 + 2.5, color: "#8FBC8F" };
        let b = new Aufgabe8_Superklasse.Movingbees(this.x = 390, this.y = 560, this.targetx, this.targety);
        b.setRandomStyle1();
        b.move();
        b.move1();
        bees.push(b);
    }
    //clouds in the sky
    function drawCloud(_x, _y, _strokeColor, _fillColor) {
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.strokeStyle = _strokeColor;
        Aufgabe8_Superklasse.crc2.fillStyle = _fillColor;
        Aufgabe8_Superklasse.crc2.arc(_x + 40, _y + 80, 10, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.stroke();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.arc(_x + 50, _y + 54, 60, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.stroke();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.arc(_x + 20, _y - 30, 60, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.stroke();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.arc(_x + 90, _y - 50, 60, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.stroke();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.arc(_x + 146, _y + 12, 60, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.stroke();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.arc(_x + 264, _y - 394, 60, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.stroke();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.arc(_x + 174, _y - 44, 50, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.stroke();
        Aufgabe8_Superklasse.crc2.fill();
    }
    function drawDeko(_x, _y, _strokeColor, _fillColor) {
        //Dekobaum
        Aufgabe8_Superklasse.crc2.beginPath();
        //Pfad beginnen
        Aufgabe8_Superklasse.crc2.strokeStyle = "#Da70d6";
        //Farbe der Umrandung
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6";
        //Füllfarbe
        Aufgabe8_Superklasse.crc2.arc(_x + 10, _y + 30, 6, 0, Math.PI * 2, true);
        //Kreise
        Aufgabe8_Superklasse.crc2.closePath();
        //Pfad schließen
        Aufgabe8_Superklasse.crc2.stroke();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        //neuen Pfad mit beginpath beginnen
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(_x + 3, _y + 9, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(239, 439, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(109, 469, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(209, 299, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(142, 201, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(112, 239, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(242, 239, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(164, 199, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(225, 199, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(254, 299, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(234, 459, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(164, 349, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(134, 356, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(114, 354, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(94, 389, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(84, 439, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(76, 409, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(56, 389, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(46, 369, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(46, 369, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(76, 369, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(206, 439, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(216, 454, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(123, 454, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(297, 321, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(267, 321, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(277, 361, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(274, 379, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(256, 369, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(236, 387, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(216, 367, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(216, 387, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(266, 427, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(213, 483, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(193, 483, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(168, 473, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(148, 473, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(128, 273, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(128, 273, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(108, 273, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(98, 343, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(128, 323, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(147, 243, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(174, 263, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(179, 233, 8, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
    }
    //Busch number one bezierkurve (kubische Kurve)
    //besteht aus 3.Punkten
    function drawBushes(_x, _y, _strokeColor, _fillColor) {
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.strokeStyle = _strokeColor;
        Aufgabe8_Superklasse.crc2.lineWidth = 6;
        Aufgabe8_Superklasse.crc2.fillStyle = _fillColor;
        Aufgabe8_Superklasse.crc2.moveTo(600, 400);
        Aufgabe8_Superklasse.crc2.bezierCurveTo(_x - 40, _y + 20, _x - 40, _y + 70, _x + 60, _y + 70);
        Aufgabe8_Superklasse.crc2.bezierCurveTo(_x + 80, _y + 100, _x + 150, _y + 100, _x + 170, _y + 70);
        Aufgabe8_Superklasse.crc2.bezierCurveTo(_x + 250, _y + 70, _x + 250, _y + 40, _x + 220, _y + 20);
        Aufgabe8_Superklasse.crc2.bezierCurveTo(_x + 260, _y - 40, _x + 200, _y - 50, _x + 170, _y - 30);
        Aufgabe8_Superklasse.crc2.bezierCurveTo(_x + 150, _y - 75, _x + 80, _y - 60, _x + 80, _y - 30);
        Aufgabe8_Superklasse.crc2.bezierCurveTo(_x + 30, _y - 75, _x - 20, _y - 60, _x, _y);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.stroke();
        Aufgabe8_Superklasse.crc2.fill();
    }
    //Busch number two
    function drawBushes1(_x, _y, _strokeColor, _fillColor) {
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.strokeStyle = _strokeColor;
        Aufgabe8_Superklasse.crc2.lineWidth = 6;
        Aufgabe8_Superklasse.crc2.fillStyle = _fillColor;
        Aufgabe8_Superklasse.crc2.moveTo(870, 400);
        Aufgabe8_Superklasse.crc2.bezierCurveTo(_x - 40, _y + 20, _x - 40, _y + 70, _x + 60, _y + 70);
        Aufgabe8_Superklasse.crc2.bezierCurveTo(_x + 80, _y + 100, _x + 150, _y + 100, _x + 170, _y + 70);
        Aufgabe8_Superklasse.crc2.bezierCurveTo(_x + 250, _y + 70, _x + 250, _y + 40, _x + 220, _y + 20);
        Aufgabe8_Superklasse.crc2.bezierCurveTo(_x + 260, _y - 40, _x + 200, _y - 50, _x + 170, _y - 30);
        Aufgabe8_Superklasse.crc2.bezierCurveTo(_x + 150, _y - 75, _x + 80, _y - 60, _x + 80, _y - 30);
        Aufgabe8_Superklasse.crc2.bezierCurveTo(_x + 30, _y - 75, _x - 20, _y - 60, _x, _y);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.stroke();
        Aufgabe8_Superklasse.crc2.fill();
    }
    //Busch number three
    function drawBushes2(_x, _y, _strokeColor, _fillColor) {
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.strokeStyle = _strokeColor;
        Aufgabe8_Superklasse.crc2.lineWidth = 6;
        Aufgabe8_Superklasse.crc2.fillStyle = _fillColor;
        Aufgabe8_Superklasse.crc2.moveTo(1100, 400);
        Aufgabe8_Superklasse.crc2.bezierCurveTo(_x - 40, _y + 20, _x - 40, _y + 70, _x + 60, _y + 70);
        Aufgabe8_Superklasse.crc2.bezierCurveTo(_x + 80, _y + 100, _x + 150, _y + 100, _x + 170, _y + 70);
        Aufgabe8_Superklasse.crc2.bezierCurveTo(_x + 250, _y + 70, _x + 250, _y + 40, _x + 220, _y + 20);
        Aufgabe8_Superklasse.crc2.bezierCurveTo(_x + 260, _y - 40, _x + 200, _y - 50, _x + 170, _y - 30);
        Aufgabe8_Superklasse.crc2.bezierCurveTo(_x + 150, _y - 75, _x + 80, _y - 60, _x + 80, _y - 30);
        Aufgabe8_Superklasse.crc2.bezierCurveTo(_x + 30, _y - 75, _x - 20, _y - 60, _x, _y);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.stroke();
        Aufgabe8_Superklasse.crc2.fill();
    }
    function drawBushes3(_x, _y, _strokeColor, _fillColor) {
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.strokeStyle = _strokeColor;
        Aufgabe8_Superklasse.crc2.lineWidth = 6;
        Aufgabe8_Superklasse.crc2.fillStyle = _fillColor;
        Aufgabe8_Superklasse.crc2.moveTo(360, 400);
        Aufgabe8_Superklasse.crc2.bezierCurveTo(_x - 40, _y + 20, _x - 40, _y + 70, _x + 60, _y + 70);
        Aufgabe8_Superklasse.crc2.bezierCurveTo(_x + 80, _y + 100, _x + 150, _y + 100, _x + 170, _y + 70);
        Aufgabe8_Superklasse.crc2.bezierCurveTo(_x + 250, _y + 70, _x + 250, _y + 40, _x + 220, _y + 20);
        Aufgabe8_Superklasse.crc2.bezierCurveTo(_x + 260, _y - 40, _x + 200, _y - 50, _x + 170, _y - 30);
        Aufgabe8_Superklasse.crc2.bezierCurveTo(_x + 150, _y - 75, _x + 80, _y - 60, _x + 80, _y - 30);
        Aufgabe8_Superklasse.crc2.bezierCurveTo(_x + 30, _y - 75, _x - 20, _y - 60, _x, _y);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.stroke();
        Aufgabe8_Superklasse.crc2.fill();
    }
    function drawDekoBushes(_x, _y, _strokeColor, _fillColor) {
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.strokeStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(678, 439, 9, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.strokeStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(609, 423, 9, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.strokeStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(615, 393, 9, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.strokeStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(656, 393, 9, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.strokeStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(707, 376, 9, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.strokeStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(796, 436, 9, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.strokeStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(796, 406, 9, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.strokeStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(756, 393, 9, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.strokeStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(756, 456, 9, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.strokeStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(746, 436, 9, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.strokeStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(607, 366, 9, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.strokeStyle = "#Da70d6 ";
        Aufgabe8_Superklasse.crc2.arc(677, 396, 9, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
    }
    function drawDekoBushes1(_x, _y, _strokeColor, _fillColor) {
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#D2691E  ";
        Aufgabe8_Superklasse.crc2.strokeStyle = "#D2691E  ";
        Aufgabe8_Superklasse.crc2.arc(1178, 409, 9, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#D2691E  ";
        Aufgabe8_Superklasse.crc2.strokeStyle = "#D2691E  ";
        Aufgabe8_Superklasse.crc2.arc(1109, 423, 9, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#D2691E  ";
        Aufgabe8_Superklasse.crc2.strokeStyle = "#D2691E  ";
        Aufgabe8_Superklasse.crc2.arc(1215, 373, 9, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#D2691E  ";
        Aufgabe8_Superklasse.crc2.strokeStyle = "#D2691E  ";
        Aufgabe8_Superklasse.crc2.arc(1156, 393, 9, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#D2691E  ";
        Aufgabe8_Superklasse.crc2.strokeStyle = "#D2691E  ";
        Aufgabe8_Superklasse.crc2.arc(1187, 373, 9, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#D2691E  ";
        Aufgabe8_Superklasse.crc2.strokeStyle = "#D2691E  ";
        Aufgabe8_Superklasse.crc2.arc(1136, 436, 9, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#D2691E  ";
        Aufgabe8_Superklasse.crc2.strokeStyle = "#D2691E  ";
        Aufgabe8_Superklasse.crc2.arc(1206, 406, 9, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#D2691E  ";
        Aufgabe8_Superklasse.crc2.strokeStyle = "#D2691E  ";
        Aufgabe8_Superklasse.crc2.arc(1236, 415, 9, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#D2691E  ";
        Aufgabe8_Superklasse.crc2.strokeStyle = "#D2691E  ";
        Aufgabe8_Superklasse.crc2.arc(1256, 393, 9, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#D2691E  ";
        Aufgabe8_Superklasse.crc2.strokeStyle = "#D2691E ";
        Aufgabe8_Superklasse.crc2.arc(1236, 439, 9, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#D2691E  ";
        Aufgabe8_Superklasse.crc2.strokeStyle = "#D2691E  ";
        Aufgabe8_Superklasse.crc2.arc(1186, 436, 9, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
    }
    function drawMountains(_x, _y, _strokeColor) {
        //quadratische Kurve = quadratic Curve(Bogen für Hügel/Berge/auch Bezierkurve)
        //besteht aus 2 Punkten
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.stroke();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.lineWidth = 6;
        Aufgabe8_Superklasse.crc2.strokeStyle = "black";
        //Farbverlauf von schneebedeckten Gipfel zu Fels
        let grad = Aufgabe8_Superklasse.crc2.createLinearGradient(80, 230, 96, 80);
        grad.addColorStop(0, "grey");
        grad.addColorStop(1, "whitesmoke");
        Aufgabe8_Superklasse.crc2.fillStyle = grad;
        Aufgabe8_Superklasse.crc2.moveTo(578, 400);
        Aufgabe8_Superklasse.crc2.quadraticCurveTo(890, -150, 1050, 400);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.stroke();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.stroke();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.lineWidth = 6;
        Aufgabe8_Superklasse.crc2.strokeStyle = "black"; // line color
        Aufgabe8_Superklasse.crc2.fillStyle = grad;
        Aufgabe8_Superklasse.crc2.moveTo(778, 400);
        Aufgabe8_Superklasse.crc2.quadraticCurveTo(1300, -150, 1400, 400);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.stroke();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.stroke();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.lineWidth = 6;
        Aufgabe8_Superklasse.crc2.strokeStyle = "black"; // line color
        Aufgabe8_Superklasse.crc2.moveTo(328, 400);
        Aufgabe8_Superklasse.crc2.quadraticCurveTo(600, -150, 900, 400);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.stroke();
        Aufgabe8_Superklasse.crc2.fill();
    }
    function drawTree() {
        //Baumstamm
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "brown ";
        Aufgabe8_Superklasse.crc2.fillRect(137, 470, 60, 240);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.stroke();
        //tree
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#6B8e23 ";
        Aufgabe8_Superklasse.crc2.arc(185, 268, 97, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#6B8e23 ";
        Aufgabe8_Superklasse.crc2.arc(215, 373, 110, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#6B8e23 ";
        Aufgabe8_Superklasse.crc2.arc(130, 382, 100, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#6B8e23";
        Aufgabe8_Superklasse.crc2.arc(207.99, 420, 74, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#6B8e23";
        Aufgabe8_Superklasse.crc2.arc(145, 420, 74, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "#6B8e23";
        Aufgabe8_Superklasse.crc2.arc(173, 429, 81, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
    }
    function drawBienenstock(_x, _y, _strokeColor, _fillColor) {
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.strokeStyle = "black";
        Aufgabe8_Superklasse.crc2.fillStyle = "orange";
        Aufgabe8_Superklasse.crc2.lineWidth = 6;
        Aufgabe8_Superklasse.crc2.arc(260, 540, 39, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.stroke();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.strokeStyle = "brown";
        Aufgabe8_Superklasse.crc2.lineWidth = 6;
        Aufgabe8_Superklasse.crc2.lineCap = "round";
        Aufgabe8_Superklasse.crc2.lineJoin = "miter";
        Aufgabe8_Superklasse.crc2.miterLimit = 60;
        Aufgabe8_Superklasse.crc2.moveTo(260, 584);
        Aufgabe8_Superklasse.crc2.lineTo(260, 708);
        Aufgabe8_Superklasse.crc2.stroke();
        Aufgabe8_Superklasse.crc2.closePath();
        Aufgabe8_Superklasse.crc2.beginPath();
        Aufgabe8_Superklasse.crc2.fillStyle = "black";
        Aufgabe8_Superklasse.crc2.moveTo(228, 610);
        Aufgabe8_Superklasse.crc2.arc(262, 560, 19, 0, Math.PI * 2, true);
        Aufgabe8_Superklasse.crc2.fill();
        Aufgabe8_Superklasse.crc2.closePath();
    }
    function animate() {
        Aufgabe8_Superklasse.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < bees.length; i++) {
            let b = bees[i];
            //Malen der Bienen an der neuen Position
            b.drawObject();
            b.move1();
        }
        for (let n = 0; n < Aufgabe8_Superklasse.blümle.length; n++) {
        }
        window.setTimeout(animate, 20);
    }
    //Bienen werden gezeichnet
    function signum(_value) {
        return _value >= 0 ? 1 : -1;
    }
    Aufgabe8_Superklasse.signum = signum;
})(Aufgabe8_Superklasse || (Aufgabe8_Superklasse = {}));
//# sourceMappingURL=canvasaufgabe7.js.map