//Aufgabe 4 canvas
//Name: Saile Christian
//Matrikel: 254877
//Datum: 11.November 2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.






namespace CANVAS_6 {
    window.onload = init; // Wenn die Seite komplett geladen ist, führe die init Funktion aus

    let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;

    //Arrays for animations

    let movingObjects: AnimatedObjects[] = [];





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

        console.log("hier ist jirka :D");

        //startposition für die Sonne mithilfe einer Schleife und einer zufälligen Position der sonne
        //        for (let i: number = 0; i < 1; i++) {
        //            let lassoles: Sonne;
        //            lassoles = new Sonne(Math.random() * 660, Math.random() * 50);
        //            movingObjects.push(lassoles);
        //
        //
        //        }
        //Berge
        let berg: Mountains;
        berg = new Mountains(-1, -1);
        berg.drawMountains();

        drawskipiste();




        //ordinary trees in the background durch mehrere Funktionsaufrufe werden die Bäume anders positioniert und erhalten eine andere Farbe
        //ordinary trees are darkgreen or just have the following colours: darkolivegreen and forestgreen 
        //(they have the darkest colours of these trees )
        let t: Trees;

        t = new Trees(1, 1, "black", "darkgreen");
        t.drawTrees();
        let t1: Trees1;
        t1 = new Trees(43, 22, "black", "darkolivegreen");
        t1.drawTrees();
        let t2: Trees2;
        t2 = new Trees(-133, 52, "black", "forestgreen");
        t2.drawTrees();

        //Funktionsaufruf innerhalb initfunktion, die die zufällige position der Bäume bestimmt
        randomTrees();











        //fester Skifahrer
        let skier: OrdinarySkier;
        skier = new OrdinarySkier(500, 200, "#A0522D ", "black");
        skier.drawoneSkier();

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

        let clouds: Clouds;
        clouds = new Clouds(30, 120, "#F5F5F5", "#F5F5F5");
        clouds.drawCloud();




        //startwert für die wolken und anzahl der wolken
        //        for (let i: number = 0; i < 1; i++) {
        //            let clouds: SecondCloud;
        //            clouds = new SecondCloud(Math.random() * 200 + 20, Math.random() * 130);
        //            movingObjects.push(clouds);
        //
        //
        //        }

        //startwert für skifahrer

        //        for (let i: number = 0; i < 5; i++) {
        //
        //
        //
        //            let s: SkiersInfo = new SkiersInfo(Math.random() * 370, 0 + 400);
        //            movingObjects.push(s);
        //
        //
        //        }


        //backgroundimage is saved

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        //startwert für die schneeflocken und anzahl der gezeichneten schneeflocken
        for (let i: number = 0; i < 126; i++) {
            let s: Snowflakes = new AnimatedObjects(0 + Math.random() * 800, 0 + Math.random() * 600);
            movingObjects.push(s);



        }



        animate();

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



    function animate(): void {

        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < movingObjects.length; i++) {
            let s: AnimatedObjects = movingObjects[i];
            s.update();



        }
        window.setTimeout(animate, 30);

    }


    //Funktion für die zufällige Positionierung von Bäumen
    function randomTrees(): void {
        let numberofTrees: number = 5;

        // draw randomly placed Trees
        for (let n: number = 0; n < numberofTrees; n++) {
            let x: number = 1 + (Math.random() * (203 - 100));
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