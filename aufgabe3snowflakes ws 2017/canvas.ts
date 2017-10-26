//Aufgabe 2 canvas
//Name: Saile Christian
//Matrikel: 254877
//Datum: 26.Oktober 2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.






namespace CANVAS4 {
    window.onload = init; // Wenn die Seite komplett geladen ist, führe die init Funktion aus

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;
    //Arrays for animations
    let arrayX: number[] = [];
    let arrayY: number[] = [];
    //variable, um den Hintergrund abzuspeichern
    let imgData: ImageData;

    //init funktion, die Bäume, berge, Wolken usw. zeichnet
    function init(): void {


        canvas = <HTMLCanvasElement>document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");


        //sky
        crc2.beginPath();
        crc2.fillStyle = "#7FFFd4 ";

        crc2.rect(0, 0, canvas.width, 300);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();


        //sun meine Sonne
        //alles andere hier außer funktionen        
        crc2.beginPath();
        crc2.fillStyle = "#FFFF00";
        crc2.strokeStyle = "orange";
        crc2.lineWidth = 6;
        //Farbverlauf sonne gelb zu orange
        let grad2: CanvasGradient = crc2.createLinearGradient(110, 300, 93, 80);

        grad2.addColorStop(0, "yellow");
        grad2.addColorStop(1, "orange");
        crc2.fillStyle = grad2;
        crc2.arc(660, 50, 100, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        drawMountains();
        drawskipiste();





        //ordinary trees are darkgreen or just have the following colours darkolivegreen and forestgreen 
        //(they are darkest colours of these trees )
        drawTrees(1, 1, "black", "darkgreen");
        drawTrees(43, 22, "black", "darkolivegreen");
        drawTrees(-133, 52, "black", "forestgreen");
        //Funktionsaufruf innerhalb initfunktion, die die zufällige position der Bäume bestimmt
        randomTrees();











        drawCloud(30, 120, "#F5F5F5", "#F5F5F5");
        drawCloud(420, 80, "#F5F5F5 ", "#F5F5F5");




        //snowman
        crc2.beginPath();
        crc2.fillStyle = "white ";
        crc2.arc(585, 265, 20, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "white ";
        crc2.arc(585, 245, 15, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        //knöpfe aus kleinen kreisen
        crc2.beginPath();
        crc2.fillStyle = "black ";
        crc2.arc(585, 275, 2.5, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "black ";
        crc2.arc(585, 265, 2.5, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "black ";
        crc2.arc(585, 255, 2.5, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        //eyes
        crc2.beginPath();
        crc2.fillStyle = "black ";
        crc2.arc(577.5, 240, 1.5, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "black ";
        crc2.arc(592.5, 240, 1.5, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        //arms
        crc2.beginPath();
        crc2.strokeStyle = "black ";
        crc2.moveTo(540, 265);
        crc2.lineTo(570, 256);
        crc2.lineWidth = 1;
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.strokeStyle = "black ";
        crc2.moveTo(620, 265);
        crc2.lineTo(600, 256);
        crc2.lineWidth = 1;
        crc2.closePath();
        crc2.stroke();
        //head
        crc2.beginPath();
        crc2.fillStyle = "black ";
        crc2.fillRect(567, 222, 35, 12);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "black ";
        crc2.fillRect(577, 202, 14, 23);
        crc2.closePath();
        crc2.fill();
        //mouth
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.fillStyle = "black";
        crc2.arc(585, 251, 3, 0, Math.PI * 1, true);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        //nose
        crc2.beginPath();
        crc2.fillStyle = "orange ";
        crc2.fillRect(582, 238, 4, 8);
        crc2.fill();
        crc2.closePath();
        //skilift
        crc2.beginPath();
        crc2.fillStyle = "black ";
        crc2.moveTo(320, 300);
        crc2.fillRect(792, 150, 8, 250);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.fillStyle = "black ";
        crc2.moveTo(320, 300);
        crc2.fillRect(0.4, 340, 8, 250);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.moveTo(0.4, 340);
        crc2.lineTo(792, 150);
        crc2.lineWidth = 0.85;
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.moveTo(344, 258);
        crc2.lineTo(344, 269);
        crc2.lineWidth = 0.85;
        crc2.closePath();
        crc2.stroke();
        //lift
        crc2.beginPath();
        crc2.fillStyle = "purple";
        crc2.strokeStyle = "black";
        crc2.lineWidth = 2;
        crc2.moveTo(340, 178);
        crc2.fillRect(316, 267, 60, 40);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        //windows
        crc2.beginPath();
        crc2.fillStyle = "#7FFFd4";
        crc2.strokeStyle = "black";
        crc2.lineWidth = 1.85;
        crc2.moveTo(340, 178);
        crc2.fillRect(336, 277, 9, 12);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#7FFFd4";
        crc2.strokeStyle = "black";
        crc2.lineWidth = 1.85;
        crc2.moveTo(340, 178);
        crc2.fillRect(346, 277, 9, 12);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        //Aufruf für zufällig positionierte Schneeflocken
        //drawrandomSnowflakes();
        window.setTimeout(animate, 200);
        //backgroundimage is saved
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        for (let i: number = 0; i < 250; i++) {
            arrayX[i] = 1;
            arrayY[i] = 10;


        }

    }
    function drawMountains(): void {

        //draw mountains
        //quadratische Kurve = quadratic Curve(Bogen für Hügel/Berge/auch Bezierkurve)
        //besteht aus 2 Punkten

        crc2.beginPath();
        crc2.stroke();
        crc2.fill();
        crc2.lineWidth = 6;
        crc2.strokeStyle = "black";
        //Farbverlauf von schneebedeckten Gipfel zu Fels
        let grad: CanvasGradient = crc2.createLinearGradient(80, 230, 96, 80);
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


    }

    //clouds in the sky
    function drawCloud(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.globalAlpha = 0.97;
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
    function drawskipiste(): void {
        crc2.beginPath();
        crc2.lineWidth = 6;
        crc2.strokeStyle = "black"; // line color
        crc2.fillStyle = "whitesmoke";
        crc2.moveTo(30, 630);
        crc2.bezierCurveTo(430, 60, 820, 260, 3500, 690);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();



    }
    //ordinary trees in the background durch mehrere Funktionsaufrufe werden die Bäume anders positioniert und erhalten eine andere Farbe
    function drawTrees(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        //Baumstamm
        crc2.beginPath();
        crc2.fillStyle = "brown ";
        crc2.fillRect(_x + 235, _y + 308, 10, 20);
        crc2.fill();
        crc2.closePath();
        //leaves of  trees
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.lineWidth = 1;
        crc2.moveTo(_x + 166, _y + 219);
        crc2.lineTo(_x + 136, _y + 329);
        crc2.lineTo(_x + 195, _y + 329);
        crc2.lineTo(_x + 166, _y + 219);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        //Baumstamm

        crc2.beginPath();
        crc2.fillStyle = "brown ";
        crc2.fillRect(_x + 161, _y + 329, 10, 20);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        //leaves of trees
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.lineWidth = 1;
        crc2.moveTo(_x + 246, _y + 199);
        crc2.lineTo(_x + 216, _y + 309);
        crc2.lineTo(_x + 267, _y + 309);
        crc2.lineTo(_x + 247, _y + 199);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();


        //baumstamm
        crc2.beginPath();
        crc2.fillStyle = "brown ";
        crc2.fillRect(_x + 306, _y + 339, 10, 20);
        crc2.fill();
        crc2.closePath();
        //leaves of trees
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.lineWidth = 1;
        crc2.moveTo(_x + 318.2, _y + 219);
        crc2.lineTo(_x + 282, _y + 339);
        crc2.lineTo(_x + 334, _y + 339);
        crc2.lineTo(_x + 319, _y + 219);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();


    }

    function animate(): void {
        
        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < arrayX.length; i++) {
            arrayX[i] += 17 + Math.random() * 217 - 111; // hier experimentieren um
            arrayY[i] += 33 + Math.random() * 145 - 73; // andere Bewegungsmuster zu finden
            if (arrayY[i] >= 601) {
                arrayY[i] = 0;
            }
            if (arrayX[i] >= 800) {
                arrayX[i] = 2;
            }


            drawSnowflakes(arrayX[i], arrayY[i], "black", "whitesmoke");
        }


        window.setTimeout(animate, 200);



    }
    //arrayX[i] += 12 + Math.random() * 19 - 3; // hier experimentieren um
    //            arrayY[i] += 10 + Math.random() * 29 - 3; // andere Bewegungsmuster zu finden
    //bewegungsmuster für wolken


    function drawSnowflakes(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {

        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.fillStyle = _fillColor;
        crc2.globalAlpha = 0.7;
        crc2.arc(_x + 40, _y + 80, 2, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.fillStyle = _fillColor;
        crc2.globalAlpha = 0.7;
        crc2.arc(_x + 50, _y + 50, 3, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.fillStyle = _fillColor;
        crc2.globalAlpha = 0.7;
        crc2.arc(_x + 20, _y + 30, 5, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.fillStyle = _fillColor;
        crc2.globalAlpha = 0.7;
        crc2.arc(_x + 120, _y + 180, 2, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.fillStyle = _fillColor;
        crc2.globalAlpha = 0.7;
        crc2.arc(_x + 160, _y + 150, 4, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }

    //Funktion für die zufällige Positionierung von Bäumen
    function randomTrees(): void {
        let numberofTrees: number = 5;

        // draw randomly placed Trees
        for (let n: number = 0; n < numberofTrees; n++) {
            let x: number = 1 + (Math.random() * (343 - 100));
            let y: number = 1 + (Math.random() * (90 + 23));



            //Aufruf der Funktion innerhalb der for-schleife
            drawrandomlyplacedTrees(crc2, x, y, "black", "lawngreen");

        }
    }


    function drawrandomlyplacedTrees(crc2: CanvasRenderingContext2D, _x: number, _y: number, _strokeColor: string, _fillColor: string): void {
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







}





