//Aufgabe 4 canvas
//Name: Saile Christian
//Matrikel: 254877
//Datum: 11.November 2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var CANVAS_5;
(function (CANVAS_5) {
    window.onload = init; // Wenn die Seite komplett geladen ist, führe die init Funktion aus
    let canvas;
    //Arrays for animations
    let snow = [];
    let cloudsX = [];
    let skierS = [];
    let sol = [];
    //variable, um den Hintergrund abzuspeichern
    let imgData;
    //init funktion, die Bäume, berge, Wolken usw. zeichnet
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        CANVAS_5.crc2 = canvas.getContext("2d");
        //sky
        CANVAS_5.crc2.beginPath();
        CANVAS_5.crc2.fillStyle = "#7FFFd4 ";
        CANVAS_5.crc2.rect(0, 0, canvas.width, 300);
        CANVAS_5.crc2.closePath();
        CANVAS_5.crc2.fill();
        CANVAS_5.crc2.stroke();
        //startposition für die Sonne mithilfe einer Schleife und einer zufälligen Position der sonne
        for (let i = 0; i < 1; i++) {
            let lassoles;
            lassoles = new CANVAS_5.Sonne(Math.random() * 660, Math.random() * 50, "orange", "#FFFF00");
            sol[i] = lassoles;
        }
        //Berge
        let berg;
        berg = new CANVAS_5.Mountains(-1, -1);
        berg.drawMountains();
        drawskipiste();
        //ordinary trees in the background durch mehrere Funktionsaufrufe werden die Bäume anders positioniert und erhalten eine andere Farbe
        //ordinary trees are darkgreen or just have the following colours: darkolivegreen and forestgreen 
        //(they have the darkest colours of these trees )
        let t;
        t = new CANVAS_5.Trees(1, 1, "black", "darkgreen");
        t.drawTrees();
        let t1;
        t1 = new CANVAS_5.Trees(43, 22, "black", "darkolivegreen");
        t1.drawTrees();
        let t2;
        t2 = new CANVAS_5.Trees(-133, 52, "black", "forestgreen");
        t2.drawTrees();
        //Funktionsaufruf innerhalb initfunktion, die die zufällige position der Bäume bestimmt
        randomTrees();
        //fester Skifahrer
        let skier;
        skier = new CANVAS_5.OrdinarySkier(500, 200, "#A0522D ", "black");
        skier.drawoneSkier();
        //snowman
        CANVAS_5.crc2.beginPath();
        CANVAS_5.crc2.fillStyle = "white ";
        CANVAS_5.crc2.arc(585, 265, 20, 0, Math.PI * 2, true);
        CANVAS_5.crc2.closePath();
        CANVAS_5.crc2.fill();
        CANVAS_5.crc2.beginPath();
        CANVAS_5.crc2.fillStyle = "white ";
        CANVAS_5.crc2.arc(585, 245, 15, 0, Math.PI * 2, true);
        CANVAS_5.crc2.closePath();
        CANVAS_5.crc2.fill();
        //knöpfe aus kleinen kreisen
        CANVAS_5.crc2.beginPath();
        CANVAS_5.crc2.fillStyle = "black ";
        CANVAS_5.crc2.arc(585, 275, 2.5, 0, Math.PI * 2, true);
        CANVAS_5.crc2.closePath();
        CANVAS_5.crc2.fill();
        CANVAS_5.crc2.beginPath();
        CANVAS_5.crc2.fillStyle = "black ";
        CANVAS_5.crc2.arc(585, 265, 2.5, 0, Math.PI * 2, true);
        CANVAS_5.crc2.closePath();
        CANVAS_5.crc2.fill();
        CANVAS_5.crc2.beginPath();
        CANVAS_5.crc2.fillStyle = "black ";
        CANVAS_5.crc2.arc(585, 255, 2.5, 0, Math.PI * 2, true);
        CANVAS_5.crc2.closePath();
        CANVAS_5.crc2.fill();
        //eyes
        CANVAS_5.crc2.beginPath();
        CANVAS_5.crc2.fillStyle = "black ";
        CANVAS_5.crc2.arc(577.5, 240, 1.5, 0, Math.PI * 2, true);
        CANVAS_5.crc2.closePath();
        CANVAS_5.crc2.fill();
        CANVAS_5.crc2.beginPath();
        CANVAS_5.crc2.fillStyle = "black ";
        CANVAS_5.crc2.arc(592.5, 240, 1.5, 0, Math.PI * 2, true);
        CANVAS_5.crc2.closePath();
        CANVAS_5.crc2.fill();
        //arms
        CANVAS_5.crc2.beginPath();
        CANVAS_5.crc2.strokeStyle = "black ";
        CANVAS_5.crc2.moveTo(540, 265);
        CANVAS_5.crc2.lineTo(570, 256);
        CANVAS_5.crc2.lineWidth = 1;
        CANVAS_5.crc2.closePath();
        CANVAS_5.crc2.stroke();
        CANVAS_5.crc2.beginPath();
        CANVAS_5.crc2.strokeStyle = "black ";
        CANVAS_5.crc2.moveTo(620, 265);
        CANVAS_5.crc2.lineTo(600, 256);
        CANVAS_5.crc2.lineWidth = 1;
        CANVAS_5.crc2.closePath();
        CANVAS_5.crc2.stroke();
        //head
        CANVAS_5.crc2.beginPath();
        CANVAS_5.crc2.fillStyle = "black ";
        CANVAS_5.crc2.fillRect(567, 222, 35, 12);
        CANVAS_5.crc2.closePath();
        CANVAS_5.crc2.fill();
        CANVAS_5.crc2.beginPath();
        CANVAS_5.crc2.fillStyle = "black ";
        CANVAS_5.crc2.fillRect(577, 202, 14, 23);
        CANVAS_5.crc2.closePath();
        CANVAS_5.crc2.fill();
        //mouth
        CANVAS_5.crc2.beginPath();
        CANVAS_5.crc2.strokeStyle = "black";
        CANVAS_5.crc2.fillStyle = "black";
        CANVAS_5.crc2.arc(585, 251, 3, 0, Math.PI * 1, true);
        CANVAS_5.crc2.closePath();
        CANVAS_5.crc2.stroke();
        CANVAS_5.crc2.fill();
        //nose
        CANVAS_5.crc2.beginPath();
        CANVAS_5.crc2.fillStyle = "orange ";
        CANVAS_5.crc2.fillRect(582, 238, 4, 8);
        CANVAS_5.crc2.fill();
        CANVAS_5.crc2.closePath();
        //skilift
        CANVAS_5.crc2.beginPath();
        CANVAS_5.crc2.fillStyle = "black ";
        CANVAS_5.crc2.moveTo(320, 300);
        CANVAS_5.crc2.fillRect(792, 150, 8, 250);
        CANVAS_5.crc2.fill();
        CANVAS_5.crc2.closePath();
        CANVAS_5.crc2.beginPath();
        CANVAS_5.crc2.fillStyle = "black ";
        CANVAS_5.crc2.moveTo(320, 300);
        CANVAS_5.crc2.fillRect(0.4, 340, 8, 250);
        CANVAS_5.crc2.fill();
        CANVAS_5.crc2.closePath();
        CANVAS_5.crc2.beginPath();
        CANVAS_5.crc2.strokeStyle = "black";
        CANVAS_5.crc2.moveTo(0.4, 340);
        CANVAS_5.crc2.lineTo(792, 150);
        CANVAS_5.crc2.lineWidth = 0.85;
        CANVAS_5.crc2.closePath();
        CANVAS_5.crc2.stroke();
        CANVAS_5.crc2.beginPath();
        CANVAS_5.crc2.strokeStyle = "black";
        CANVAS_5.crc2.moveTo(344, 258);
        CANVAS_5.crc2.lineTo(344, 269);
        CANVAS_5.crc2.lineWidth = 0.85;
        CANVAS_5.crc2.closePath();
        CANVAS_5.crc2.stroke();
        //lift
        CANVAS_5.crc2.beginPath();
        CANVAS_5.crc2.fillStyle = "purple";
        CANVAS_5.crc2.strokeStyle = "black";
        CANVAS_5.crc2.lineWidth = 2;
        CANVAS_5.crc2.moveTo(340, 178);
        CANVAS_5.crc2.fillRect(316, 267, 60, 40);
        CANVAS_5.crc2.closePath();
        CANVAS_5.crc2.stroke();
        CANVAS_5.crc2.fill();
        //windows
        CANVAS_5.crc2.beginPath();
        CANVAS_5.crc2.fillStyle = "#7FFFd4";
        CANVAS_5.crc2.strokeStyle = "black";
        CANVAS_5.crc2.lineWidth = 1.85;
        CANVAS_5.crc2.moveTo(340, 178);
        CANVAS_5.crc2.fillRect(336, 277, 9, 12);
        CANVAS_5.crc2.closePath();
        CANVAS_5.crc2.stroke();
        CANVAS_5.crc2.fill();
        CANVAS_5.crc2.beginPath();
        CANVAS_5.crc2.fillStyle = "#7FFFd4";
        CANVAS_5.crc2.strokeStyle = "black";
        CANVAS_5.crc2.lineWidth = 1.85;
        CANVAS_5.crc2.moveTo(340, 178);
        CANVAS_5.crc2.fillRect(346, 277, 9, 12);
        CANVAS_5.crc2.closePath();
        CANVAS_5.crc2.stroke();
        CANVAS_5.crc2.fill();
        let clouds;
        clouds = new CANVAS_5.Clouds(30, 120, "#F5F5F5", "#F5F5F5");
        clouds.drawCloud();
        //startwert für die wolken und anzahl der wolken
        for (let i = 0; i < 1; i++) {
            let clouds;
            clouds = new CANVAS_5.SecondCloud(Math.random() * 200 + 20, Math.random() * 130, "grey", "grey");
            cloudsX[i] = clouds;
        }
        //startwert für skifahrer
        for (let i = 0; i < 5; i++) {
            let s = new CANVAS_5.SkiersInfo(0 + Math.random() * 950 - 20, 0 + 400, "hsl(" + Math.random() * 300 + ", 100%, 60%)", Math.random() * 18 + 6.5, Math.random() * 14 - 3);
            skierS[i] = s;
        }
        //backgroundimage is saved
        imgData = CANVAS_5.crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        //startwert für die schneeflocken und anzahl der gezeichneten schneeflocken
        for (let i = 0; i < 126; i++) {
            let s = new CANVAS_5.Snowflakes(0 + Math.random() * 800, 0 + Math.random() * 600, "black", "whitesmoke");
            snow[i] = s;
        }
        animate();
    }
    function drawskipiste() {
        CANVAS_5.crc2.beginPath();
        CANVAS_5.crc2.lineWidth = 6;
        CANVAS_5.crc2.strokeStyle = "black"; // line color
        CANVAS_5.crc2.fillStyle = "whitesmoke";
        CANVAS_5.crc2.moveTo(30, 630);
        CANVAS_5.crc2.bezierCurveTo(430, 60, 820, 260, 3500, 690);
        CANVAS_5.crc2.closePath();
        CANVAS_5.crc2.stroke();
        CANVAS_5.crc2.fill();
    }
    function animate() {
        CANVAS_5.crc2.putImageData(imgData, 0, 0);
        //sun
        for (let i = 0; i < sol.length; i++) {
            let sun = sol[i];
            sun.drawSun();
            sun.animatedSun();
        }
        //skifahrer
        for (let i = 0; i < skierS.length; i++) {
            let s = skierS[i];
            s.moveSkiers();
            s.drawSkiers();
        }
        //schneeflocken
        for (let i = 0; i < snow.length; i++) {
            let s = snow[i];
            s.drawSnowflakes();
            s.moveSnowflakes();
        }
        //clouds
        for (let i = 0; i < cloudsX.length; i++) {
            let clouds = cloudsX[i];
            clouds.drawCloud1();
            clouds.moveanimatedCloud();
        }
        window.setTimeout(animate, 30);
    }
    //Funktion für die zufällige Positionierung von Bäumen
    function randomTrees() {
        let numberofTrees = 5;
        // draw randomly placed Trees
        for (let n = 0; n < numberofTrees; n++) {
            let x = 1 + (Math.random() * (343 - 100));
            let y = 1 + (Math.random() * (90 + 23));
            //Aufruf der Funktion innerhalb der for-schleife
            drawrandomlyplacedTrees(CANVAS_5.crc2, x, y, "black", "lawngreen");
        }
    }
    function drawrandomlyplacedTrees(crc2, _x, _y, _strokeColor, _fillColor) {
        //Baumstamm
        crc2.beginPath();
        crc2.fillStyle = "brown ";
        crc2.fillRect(_x + 54, _y + 360, 10, 20);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        //leaves of trees
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.lineWidth = 1;
        crc2.moveTo(_x + 60, _y + 270);
        crc2.lineTo(_x + 33, _y + 360);
        crc2.lineTo(_x + 85, _y + 360);
        crc2.lineTo(_x + 61, _y + 270);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        //baumstamm
        crc2.beginPath();
        crc2.fillStyle = "saddlebrown ";
        crc2.fillRect(_x + 256, _y + 359, 10, 30);
        crc2.fill();
        crc2.closePath();
        //leaves of trees
        crc2.beginPath();
        crc2.fillStyle = "limegreen";
        crc2.strokeStyle = _strokeColor;
        crc2.lineWidth = 1;
        crc2.moveTo(_x + 259, _y + 279);
        crc2.lineTo(_x + 233, _y + 360);
        crc2.lineTo(_x + 284, _y + 358);
        crc2.lineTo(_x + 259, _y + 278);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
    }
})(CANVAS_5 || (CANVAS_5 = {}));
//# sourceMappingURL=maincanvas.js.map