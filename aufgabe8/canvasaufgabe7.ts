//Aufgabe: 4 Triberger Wasserfälle Wikipedia"
//Name: Saile Christian
//Matrikel: 254877
//Datum: 21. April 
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.





//immer und überall bei separaten Dateien denselben Namespace verwenden
namespace Aufgabe8_Superklasse {
    window.onload = init; // Wenn die Seite komplett geladen ist führe die init Funktion aus

    let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    let nBees: number = 10;
    let imgData: ImageData;
    let bees: OrdinaryBees[] = [];
    export let blümle: Blümle[] = [];

    export let colorarray: string[] = ["red", "orange", "blue", "darkorchid", "goldenrod", "tomato"];
    console.log(colorarray);



    //Zugriff auf init funktion
    function init(): void {

        canvas = <HTMLCanvasElement>document.getElementsByTagName("canvas")[0];
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
        let grad2: CanvasGradient = crc2.createLinearGradient(80, 330, 93, 80);

        grad2.addColorStop(0, "yellow");
        grad2.addColorStop(1, "orange");
        crc2.fillStyle = grad2;
        crc2.arc(160, 160, 100, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();









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
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        //define number of flowers
        let numFlowers: number = 70;

        // draw randomly placed flowers
        for (let n: number = 0; n < numFlowers; n++) {
            let b: Blümle = new Blümle(this.centerX = 20, this.centerY = 20, this.color);
            blümle[n] = b;
            blümle.push(b);
//            let f: Flowerplus = new Flowerplus(this.centerX, this.centerY, this.color);
//            f.draw();


        }
        console.log(blümle);
        for (let i: number = 0; i < nBees; i++) {
            //Zugriff auf seperate Datei mit Blumen
            let b: Movingbees = new Movingbees(this.x, this.y, this.targetx, this.targety);
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
    function newBees(): void {
        //let s: Square = { x: 300, y: 580, size: Math.random() * 1 + 2.5, color: "#8FBC8F" };
        let b: Movingbees = new Movingbees(this.x = 390, this.y = 560, this.targetx, this.targety);
        b.setRandomStyle1();
        b.move();
        b.move1();
        bees.push(b);

    }
    //clouds in the sky
    function drawCloud(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
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




    function drawDeko(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
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
    function drawBushes(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
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
    function drawBushes1(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
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
    function drawBushes2(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
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

    function drawBushes3(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
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

    function drawDekoBushes(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
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
    function drawDekoBushes1(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
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
    function drawMountains(_x: number, _y: number, _strokeColor: string): void {//draw mountains
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

    function drawTree(): void {
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
    }
    function drawBienenstock(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
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
    function animate(): void {
        crc2.putImageData(imgData, 0, 0);
        for (let i: number = 0; i < bees.length; i++) {
            let b: OrdinaryBees = bees[i];
            //Malen der Bienen an der neuen Position
            b.drawObject();
            b.move1();

            //Malen der Bienen an der neuen Position
        }

        for (let n: number = 0; n < blümle.length; n++) {
            //let f: Flowerplus = blümle[n];
            //f.draw();
        }

        window.setTimeout(animate, 20);
    }
    //Bienen werden gezeichnet
    export function signum(_value: number): number {
        return _value >= 0 ? 1 : -1;
    }
}







