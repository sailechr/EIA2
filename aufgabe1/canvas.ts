//Aufgabe 1 canvas
//Name: Saile Christian
//Matrikel: 254877
//Datum: 10.Oktober 2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.






namespace CANVAS4 {
    window.onload = init; // Wenn die Seite komplett geladen ist, führe die init Funktion aus

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;

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


        //Baumstamm
        crc2.beginPath();
        crc2.fillStyle = "brown ";
        crc2.fillRect(238, 310, 10, 20);
        crc2.fill();
        crc2.closePath();
        //leaves of  trees
        crc2.beginPath();
        crc2.fillStyle = "darkgreen";
        crc2.strokeStyle = "black";
        crc2.lineWidth = 1;
        crc2.moveTo(167, 220);
        crc2.lineTo(137, 330);
        crc2.lineTo(196, 330);
        crc2.lineTo(167, 220);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        //Baumstamm

        crc2.beginPath();
        crc2.fillStyle = "brown ";
        crc2.fillRect(162, 330, 10, 20);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        //leaves of trees
        crc2.beginPath();
        crc2.fillStyle = "darkgreen";
        crc2.strokeStyle = "black";
        crc2.lineWidth = 1;
        crc2.moveTo(247, 200);
        crc2.lineTo(217, 310);
        crc2.lineTo(268, 310);
        crc2.lineTo(248, 200);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        //Baumstamm
        crc2.beginPath();
        crc2.fillStyle = "brown ";
        crc2.fillRect(55, 360, 10, 20);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        //leaves of trees
        crc2.beginPath();
        crc2.fillStyle = "lawngreen";
        crc2.strokeStyle = "black";
        crc2.lineWidth = 1;
        crc2.moveTo(60, 270);
        crc2.lineTo(33, 360);
        crc2.lineTo(85, 360);
        crc2.lineTo(61, 270);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();

        //baumstamm
        crc2.beginPath();
        crc2.fillStyle = "brown ";
        crc2.fillRect(257, 360, 10, 20);
        crc2.fill();
        crc2.closePath();
        //leaves of trees
        crc2.beginPath();
        crc2.fillStyle = "lawngreen";
        crc2.strokeStyle = "black";
        crc2.lineWidth = 1;
        crc2.moveTo(260, 280);
        crc2.lineTo(233, 360);
        crc2.lineTo(285, 360);
        crc2.lineTo(261, 280);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();


        //baumstamm
        crc2.beginPath();
        crc2.fillStyle = "brown ";
        crc2.fillRect(307, 340, 10, 20);
        crc2.fill();
        crc2.closePath();
        //leaves of trees
        crc2.beginPath();
        crc2.fillStyle = "darkgreen";
        crc2.strokeStyle = "black";
        crc2.lineWidth = 1;
        crc2.moveTo(319.2, 220);
        crc2.lineTo(283, 340);
        crc2.lineTo(335, 340);
        crc2.lineTo(320, 220);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();

        //baumstamm
        crc2.beginPath();
        crc2.fillStyle = "brown ";
        crc2.fillRect(107, 330, 10, 20);
        crc2.fill();
        crc2.closePath();
        //leaves of trees
        crc2.beginPath();
        crc2.fillStyle = "lawngreen";
        crc2.strokeStyle = "black";
        crc2.lineWidth = 1;
        crc2.moveTo(107, 230);
        crc2.lineTo(87, 330);
        crc2.lineTo(134, 330);
        crc2.lineTo(107, 230);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();













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


    };
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






}





