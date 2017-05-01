//Aufgabe: 4 Triberger Wasserfälle Wikipedia"
//Name: Saile Christian
//Matrikel: 254877
//Datum: 21. April 
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var CANVAS4;
(function (CANVAS4) {
    window.onload = init; // Wenn die Seite komplett geladen ist führe die init Funktion aus
    let canvas;
    let crc2;
    let x = [];
    let y = [];
    let nBees = 10;
    let imgData;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        //sky
        crc2.beginPath();
        crc2.fillStyle = "#7FFFd4 ";
        crc2.rect(0, 0, canvas.width, 400);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        //lawn
        crc2.beginPath();
        crc2.fillStyle = "#7FFFd4 ";
        crc2.rect(0, 0, canvas.width, 400);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        //sun alles andere hier außer funktionen        
        crc2.beginPath();
        crc2.fillStyle = "#FFFF00";
        crc2.strokeStyle = "orange";
        crc2.lineWidth = 6;
        let grad2 = crc2.createLinearGradient(80, 330, 93, 80);
        grad2.addColorStop(0, "yellow");
        grad2.addColorStop(1, "orange");
        crc2.fillStyle = grad2;
        crc2.arc(160, 160, 100, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        //Baumstamm
        crc2.beginPath();
        crc2.fillStyle = "brown ";
        crc2.fillRect(137, 470, 60, 240);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        //tree
        crc2.beginPath();
        crc2.fillStyle = "#6B8e23 ";
        crc2.arc(185, 268, 97, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#6B8e23 ";
        crc2.arc(215, 373, 110, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#6B8e23 ";
        crc2.arc(130, 382, 100, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#6B8e23";
        crc2.arc(207.99, 420, 74, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#6B8e23";
        crc2.arc(145, 420, 74, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#6B8e23";
        crc2.arc(173, 429, 81, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        //draw mountains
        //quadratische Kurve = quadratic Curve(Bogen für Hügel/Berge/auch Bezierkurve)
        //besteht aus 2 Punkten
        crc2.beginPath();
        crc2.stroke();
        crc2.fill();
        crc2.lineWidth = 6;
        crc2.strokeStyle = "black";
        //Farbverlauf von schneebedeckten Gipfel zu Fels
        let grad = crc2.createLinearGradient(80, 230, 96, 80);
        grad.addColorStop(0, "grey");
        grad.addColorStop(1, "whitesmoke");
        crc2.fillStyle = grad;
        crc2.moveTo(578, 400);
        crc2.quadraticCurveTo(890, -150, 1050, 400);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.stroke();
        crc2.fill();
        crc2.lineWidth = 6;
        crc2.strokeStyle = "black"; // line color
        crc2.fillStyle = grad;
        crc2.moveTo(778, 400);
        crc2.quadraticCurveTo(1300, -150, 1400, 400);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.stroke();
        crc2.fill();
        crc2.lineWidth = 6;
        crc2.strokeStyle = "black"; // line color
        crc2.moveTo(328, 400);
        crc2.quadraticCurveTo(600, -150, 900, 400);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
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
        let colorArray = [];
        colorArray.push("red"); // 0
        colorArray.push("orange"); // 1
        colorArray.push("blue"); // 2
        colorArray.push("darkorchid"); //3
        colorArray.push("goldenrod"); //4
        colorArray.push("tomato"); // 5
        // define number of flowers
        var numFlowers = 70;
        // draw randomly placed flowers
        for (let n = 0; n < numFlowers; n++) {
            let centerX = (Math.random() * (1280 - 307) + 307);
            let centerY = (Math.random() * (720 - 410) + 410);
            let radius = (Math.random() * 25) + 25;
            let colorIndex = Math.round(Math.random() * (colorArray.length - 1));
            //Rückgabewert innerhalb init funktion
            drawFlowers(crc2, centerX, centerY, radius, 5, colorArray[colorIndex]);
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
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        for (let i = 0; i < nBees; i++) {
            x[i] = 300;
            y[i] = 580;
        }
        window.setTimeout(animate, 20);
        canvas.addEventListener("click", newBees); // beim klicken auf das Canvas entstehen neue Bienen
        canvas.addEventListener("touch", newBees); // beim drüberfahren entstehen ebenfalls neue Bienen
    }
    //Funktion neuen Bienen zeichnen
    function newBees() {
        x.push(300);
        y.push(580);
    }
    //clouds in the sky
    function drawCloud(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.fillStyle = _fillColor;
        crc2.arc(_x + 40, _y + 80, 10, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 50, _y + 54, 60, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 20, _y - 30, 60, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 90, _y - 50, 60, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 146, _y + 12, 60, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 264, _y - 394, 60, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 174, _y - 44, 50, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    ;
    // Funktion "drawFlowers"
    function drawFlowers(context, centerX, centerY, radius, numPetals, color) {
        context.beginPath();
        // draw Petals of flowers
        for (let n = 0; n < numPetals; n++) {
            let theta1 = ((Math.PI * 2) / numPetals) * (n + 1);
            let theta2 = ((Math.PI * 2) / numPetals) * (n);
            var x1 = (radius * Math.sin(theta1)) + centerX;
            var y1 = (radius * Math.cos(theta1)) + centerY;
            var x2 = (radius * Math.sin(theta2)) + centerX;
            var y2 = (radius * Math.cos(theta2)) + centerY;
            context.moveTo(centerX, centerY);
            context.bezierCurveTo(x1, y1, x2, y2, centerX, centerY);
        }
        context.closePath();
        context.fillStyle = color;
        context.fill();
        // black point in the middle of the flowers
        context.beginPath();
        context.arc(centerX, centerY, radius / 5, 0, 2 * Math.PI, false);
        context.fillStyle = "black";
        context.fill();
    }
    function drawDeko(_x, _y, _strokeColor, _fillColor) {
        //Dekobaum
        crc2.beginPath();
        //Pfad beginnen
        crc2.strokeStyle = "#Da70d6";
        //Farbe der Umrandung
        crc2.fillStyle = "#Da70d6";
        //Füllfarbe
        crc2.arc(_x + 10, _y + 30, 6, 0, Math.PI * 2, true);
        //Kreise
        crc2.closePath();
        //Pfad schließen
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        //neuen Pfad mit beginpath beginnen
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(_x + 3, _y + 9, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(239, 439, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(109, 469, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(209, 299, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(142, 201, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(112, 239, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(242, 239, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(164, 199, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(225, 199, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(254, 299, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(234, 459, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(164, 349, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(134, 356, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(114, 354, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(94, 389, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(84, 439, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(76, 409, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(56, 389, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(46, 369, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(46, 369, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(76, 369, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(206, 439, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(216, 454, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(123, 454, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(297, 321, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(267, 321, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(277, 361, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(274, 379, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(256, 369, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(236, 387, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(216, 367, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(216, 387, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(266, 427, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(213, 483, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(193, 483, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(168, 473, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(148, 473, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(128, 273, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(128, 273, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(108, 273, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(98, 343, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(128, 323, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(147, 243, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(174, 263, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.arc(179, 233, 8, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
    }
    //Busch number one bezierkurve (kubische Kurve)
    //besteht aus 3.Punkten
    function drawBushes(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.lineWidth = 6;
        crc2.fillStyle = _fillColor;
        crc2.moveTo(600, 400);
        crc2.bezierCurveTo(_x - 40, _y + 20, _x - 40, _y + 70, _x + 60, _y + 70);
        crc2.bezierCurveTo(_x + 80, _y + 100, _x + 150, _y + 100, _x + 170, _y + 70);
        crc2.bezierCurveTo(_x + 250, _y + 70, _x + 250, _y + 40, _x + 220, _y + 20);
        crc2.bezierCurveTo(_x + 260, _y - 40, _x + 200, _y - 50, _x + 170, _y - 30);
        crc2.bezierCurveTo(_x + 150, _y - 75, _x + 80, _y - 60, _x + 80, _y - 30);
        crc2.bezierCurveTo(_x + 30, _y - 75, _x - 20, _y - 60, _x, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    //Busch number two
    function drawBushes1(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.lineWidth = 6;
        crc2.fillStyle = _fillColor;
        crc2.moveTo(870, 400);
        crc2.bezierCurveTo(_x - 40, _y + 20, _x - 40, _y + 70, _x + 60, _y + 70);
        crc2.bezierCurveTo(_x + 80, _y + 100, _x + 150, _y + 100, _x + 170, _y + 70);
        crc2.bezierCurveTo(_x + 250, _y + 70, _x + 250, _y + 40, _x + 220, _y + 20);
        crc2.bezierCurveTo(_x + 260, _y - 40, _x + 200, _y - 50, _x + 170, _y - 30);
        crc2.bezierCurveTo(_x + 150, _y - 75, _x + 80, _y - 60, _x + 80, _y - 30);
        crc2.bezierCurveTo(_x + 30, _y - 75, _x - 20, _y - 60, _x, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    //Busch number three
    function drawBushes2(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.lineWidth = 6;
        crc2.fillStyle = _fillColor;
        crc2.moveTo(1100, 400);
        crc2.bezierCurveTo(_x - 40, _y + 20, _x - 40, _y + 70, _x + 60, _y + 70);
        crc2.bezierCurveTo(_x + 80, _y + 100, _x + 150, _y + 100, _x + 170, _y + 70);
        crc2.bezierCurveTo(_x + 250, _y + 70, _x + 250, _y + 40, _x + 220, _y + 20);
        crc2.bezierCurveTo(_x + 260, _y - 40, _x + 200, _y - 50, _x + 170, _y - 30);
        crc2.bezierCurveTo(_x + 150, _y - 75, _x + 80, _y - 60, _x + 80, _y - 30);
        crc2.bezierCurveTo(_x + 30, _y - 75, _x - 20, _y - 60, _x, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    function drawBushes3(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.lineWidth = 6;
        crc2.fillStyle = _fillColor;
        crc2.moveTo(360, 400);
        crc2.bezierCurveTo(_x - 40, _y + 20, _x - 40, _y + 70, _x + 60, _y + 70);
        crc2.bezierCurveTo(_x + 80, _y + 100, _x + 150, _y + 100, _x + 170, _y + 70);
        crc2.bezierCurveTo(_x + 250, _y + 70, _x + 250, _y + 40, _x + 220, _y + 20);
        crc2.bezierCurveTo(_x + 260, _y - 40, _x + 200, _y - 50, _x + 170, _y - 30);
        crc2.bezierCurveTo(_x + 150, _y - 75, _x + 80, _y - 60, _x + 80, _y - 30);
        crc2.bezierCurveTo(_x + 30, _y - 75, _x - 20, _y - 60, _x, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    function drawDekoBushes(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.strokeStyle = "#Da70d6 ";
        crc2.arc(678, 439, 9, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.strokeStyle = "#Da70d6 ";
        crc2.arc(609, 423, 9, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.strokeStyle = "#Da70d6 ";
        crc2.arc(615, 393, 9, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.strokeStyle = "#Da70d6 ";
        crc2.arc(656, 393, 9, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.strokeStyle = "#Da70d6 ";
        crc2.arc(707, 376, 9, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.strokeStyle = "#Da70d6 ";
        crc2.arc(796, 436, 9, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.strokeStyle = "#Da70d6 ";
        crc2.arc(796, 406, 9, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.strokeStyle = "#Da70d6 ";
        crc2.arc(756, 393, 9, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.strokeStyle = "#Da70d6 ";
        crc2.arc(756, 456, 9, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.strokeStyle = "#Da70d6 ";
        crc2.arc(746, 436, 9, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.strokeStyle = "#Da70d6 ";
        crc2.arc(607, 366, 9, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#Da70d6 ";
        crc2.strokeStyle = "#Da70d6 ";
        crc2.arc(677, 396, 9, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
    }
    function drawDekoBushes1(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = "#D2691E  ";
        crc2.strokeStyle = "#D2691E  ";
        crc2.arc(1178, 409, 9, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#D2691E  ";
        crc2.strokeStyle = "#D2691E  ";
        crc2.arc(1109, 423, 9, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#D2691E  ";
        crc2.strokeStyle = "#D2691E  ";
        crc2.arc(1215, 373, 9, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#D2691E  ";
        crc2.strokeStyle = "#D2691E  ";
        crc2.arc(1156, 393, 9, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#D2691E  ";
        crc2.strokeStyle = "#D2691E  ";
        crc2.arc(1187, 373, 9, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#D2691E  ";
        crc2.strokeStyle = "#D2691E  ";
        crc2.arc(1136, 436, 9, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#D2691E  ";
        crc2.strokeStyle = "#D2691E  ";
        crc2.arc(1206, 406, 9, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#D2691E  ";
        crc2.strokeStyle = "#D2691E  ";
        crc2.arc(1236, 415, 9, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#D2691E  ";
        crc2.strokeStyle = "#D2691E  ";
        crc2.arc(1256, 393, 9, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#D2691E  ";
        crc2.strokeStyle = "#D2691E ";
        crc2.arc(1236, 439, 9, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#D2691E  ";
        crc2.strokeStyle = "#D2691E  ";
        crc2.arc(1186, 436, 9, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
    }
    function drawBienenstock(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.fillStyle = "orange";
        crc2.lineWidth = 6;
        crc2.arc(260, 540, 39, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.strokeStyle = "brown";
        crc2.lineWidth = 6;
        crc2.lineCap = "round";
        crc2.lineJoin = "miter";
        crc2.miterLimit = 60;
        crc2.moveTo(260, 584);
        crc2.lineTo(260, 708);
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.moveTo(228, 610);
        crc2.arc(262, 560, 19, 0, Math.PI * 2, true);
        crc2.fill();
        crc2.closePath();
    }
    function animate() {
        crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < x.length; i++) {
            x[i] += Math.random() * 3 - 2.7;
            y[i] += Math.random() * 4.7 - 2.5;
            if (x[i] >= 1270)
                x[i] = 0;
            if (y[i] <= 0)
                y[i] = 720;
            if (x[i] < 0)
                x[i] = 1270;
            if (y[i] > 720)
                y[i] = 0;
            //Malen der Bienen an der neuen Position
            drawObject(x[i], y[i]);
        }
        window.setTimeout(animate, 20);
    }
    //Bienen werden gezeichnet
    function drawObject(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "yellow";
        crc2.moveTo(_x + 10, _y);
        crc2.arc(_x + 10, _y, 13, 0, Math.PI * 2, true);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.fillStyle = "white";
        crc2.arc(_x - 5, _y + 11, 12, 0, Math.PI * 2, true);
        crc2.arc(_x + 5, _y - 11, 12, 0, Math.PI * 2, true);
        crc2.moveTo(_x, _y - 5);
        crc2.rect(_x, _y - 5, 5, 14);
        crc2.globalAlpha = 0.5;
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x + 10, _y);
        crc2.arc(_x + 10, _y, 14, (Math.PI / 180) * 90, (Math.PI / 180) * 270, true);
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x, _y - 5);
        crc2.rect(_x, _y - 5, 5, 10);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x + 5, _y - 5);
        crc2.rect(_x + 5, _y - 5, 5, 10);
        crc2.fillStyle = "#000000";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 5, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x + 5, _y - 5);
        crc2.rect(_x + 5, _y - 5, 5, 10);
        crc2.fillStyle = "#000000";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 5, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x + 16, _y - 6);
        crc2.arcTo(_x + 18, _y - 9, _x + 20, _y - 15, 10);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x + 16, _y - 3);
        crc2.arc(_x + 16, _y - 3, 4, 0, (Math.PI) * 2, false);
        crc2.fillStyle = "#ffff00";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x + 17, _y - 4);
        crc2.arc(_x + 17, _y - 4, 1, 0, (Math.PI) * 2, false);
        crc2.fillStyle = "#000000";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x - 8, _y);
        crc2.lineTo(_x - 4, _y - 2);
        crc2.lineTo(_x - 4, _y + 2);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x + 10, _y);
        crc2.quadraticCurveTo(_x + 10, _y - 12, _x + 5, _y - 12);
        crc2.moveTo(_x + 5, _y);
        crc2.quadraticCurveTo(_x - 5, _y - 12, _x + 5, _y - 12);
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 5, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x + 16, _y - 6);
        crc2.arcTo(_x + 18, _y - 9, _x + 20, _y - 15, 10);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x + 16, _y - 3);
        crc2.arc(_x + 16, _y - 3, 4, 0, (Math.PI) * 2, false);
        crc2.fillStyle = "#ffff00";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x + 17, _y - 4);
        crc2.arc(_x + 17, _y - 4, 1, 0, (Math.PI) * 2, false);
        crc2.fillStyle = "#000000";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x - 8, _y);
        crc2.lineTo(_x - 4, _y - 2);
        crc2.lineTo(_x - 4, _y + 2);
        crc2.closePath();
    }
})(CANVAS4 || (CANVAS4 = {}));
//# sourceMappingURL=canvas.js.map