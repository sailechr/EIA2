namespace CANVAS_5 {


    //Klassen zu den Bäumen mit verschiedenen Farben
    export class Trees {
        x: number;
        y: number;
        strokeColor: string;
        fillColor: string;
        constructor(_x: number, _y: number, _strokeColor: string, _fillColor: string) {
            this.drawTrees();
            this.x = _x;
            this.y = _y;
            this.strokeColor = _strokeColor;
            this.fillColor = _fillColor;
        }
        drawTrees(): void {
            //Baumstamm
            crc2.beginPath();
            crc2.fillStyle = "brown ";
            crc2.fillRect(this.x + 235, this.y + 308, 10, 20);
            crc2.fill();
            crc2.closePath();
            //leaves of  trees
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.strokeStyle = this.strokeColor;
            crc2.lineWidth = 1;
            crc2.moveTo(this.x + 166, this.y + 219);
            crc2.lineTo(this.x + 136, this.y + 329);
            crc2.lineTo(this.x + 195, this.y + 329);
            crc2.lineTo(this.x + 166, this.y + 219);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            //Baumstamm

            crc2.beginPath();
            crc2.fillStyle = "brown ";
            crc2.fillRect(this.x + 161, this.y + 329, 10, 20);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            //leaves of trees
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.strokeStyle = this.strokeColor;
            crc2.lineWidth = 1;
            crc2.moveTo(this.x + 246, this.y + 199);
            crc2.lineTo(this.x + 216, this.y + 309);
            crc2.lineTo(this.x + 267, this.y + 309);
            crc2.lineTo(this.x + 247, this.y + 199);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();


            //baumstamm
            crc2.beginPath();
            crc2.fillStyle = "brown ";
            crc2.fillRect(this.x + 306, this.y + 339, 10, 20);
            crc2.fill();
            crc2.closePath();
            //leaves of trees
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.strokeStyle = this.strokeColor;
            crc2.lineWidth = 1;
            crc2.moveTo(this.x + 318.2, this.y + 219);
            crc2.lineTo(this.x + 282, this.y + 339);
            crc2.lineTo(this.x + 334, this.y + 339);
            crc2.lineTo(this.x + 319, this.y + 219);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();


        }
    }
    export class Trees1 {
        x: number;
        y: number;
        strokeColor: string;
        fillColor: string;
        constructor(_x: number, _y: number, _strokeColor: string, _fillColor: string) {
            this.drawTrees();
            this.x = _x;
            this.y = _y;
            this.strokeColor = _strokeColor;
            this.fillColor = _fillColor;
        }
        drawTrees(): void {
            //Baumstamm
            crc2.beginPath();
            crc2.fillStyle = "brown ";
            crc2.fillRect(this.x + 235, this.y + 308, 10, 20);
            crc2.fill();
            crc2.closePath();
            //leaves of  trees
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.strokeStyle = this.strokeColor;
            crc2.lineWidth = 1;
            crc2.moveTo(this.x + 166, this.y + 219);
            crc2.lineTo(this.x + 136, this.y + 329);
            crc2.lineTo(this.x + 195, this.y + 329);
            crc2.lineTo(this.x + 166, this.y + 219);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            //Baumstamm

            crc2.beginPath();
            crc2.fillStyle = "brown ";
            crc2.fillRect(this.x + 161, this.y + 329, 10, 20);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            //leaves of trees
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.strokeStyle = this.strokeColor;
            crc2.lineWidth = 1;
            crc2.moveTo(this.x + 246, this.y + 199);
            crc2.lineTo(this.x + 216, this.y + 309);
            crc2.lineTo(this.x + 267, this.y + 309);
            crc2.lineTo(this.x + 247, this.y + 199);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();


            //baumstamm
            crc2.beginPath();
            crc2.fillStyle = "brown ";
            crc2.fillRect(this.x + 306, this.y + 339, 10, 20);
            crc2.fill();
            crc2.closePath();
            //leaves of trees
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.strokeStyle = this.strokeColor;
            crc2.lineWidth = 1;
            crc2.moveTo(this.x + 318.2, this.y + 219);
            crc2.lineTo(this.x + 282, this.y + 339);
            crc2.lineTo(this.x + 334, this.y + 339);
            crc2.lineTo(this.x + 319, this.y + 219);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();


        }
    }
    export class Trees2 {
        x: number;
        y: number;
        strokeColor: string;
        fillColor: string;
        constructor(_x: number, _y: number, _strokeColor: string, _fillColor: string) {
            this.drawTrees();
            this.x = _x;
            this.y = _y;
            this.strokeColor = _strokeColor;
            this.fillColor = _fillColor;
        }
        drawTrees(): void {
            //Baumstamm
            crc2.beginPath();
            crc2.fillStyle = "brown ";
            crc2.fillRect(this.x + 235, this.y + 308, 10, 20);
            crc2.fill();
            crc2.closePath();
            //leaves of  trees
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.strokeStyle = this.strokeColor;
            crc2.lineWidth = 1;
            crc2.moveTo(this.x + 166, this.y + 219);
            crc2.lineTo(this.x + 136, this.y + 329);
            crc2.lineTo(this.x + 195, this.y + 329);
            crc2.lineTo(this.x + 166, this.y + 219);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            //Baumstamm

            crc2.beginPath();
            crc2.fillStyle = "brown ";
            crc2.fillRect(this.x + 161, this.y + 329, 10, 20);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            //leaves of trees
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.strokeStyle = this.strokeColor;
            crc2.lineWidth = 1;
            crc2.moveTo(this.x + 246, this.y + 199);
            crc2.lineTo(this.x + 216, this.y + 309);
            crc2.lineTo(this.x + 267, this.y + 309);
            crc2.lineTo(this.x + 247, this.y + 199);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();


            //baumstamm
            crc2.beginPath();
            crc2.fillStyle = "brown ";
            crc2.fillRect(this.x + 306, this.y + 339, 10, 20);
            crc2.fill();
            crc2.closePath();
            //leaves of trees
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.strokeStyle = this.strokeColor;
            crc2.lineWidth = 1;
            crc2.moveTo(this.x + 318.2, this.y + 219);
            crc2.lineTo(this.x + 282, this.y + 339);
            crc2.lineTo(this.x + 334, this.y + 339);
            crc2.lineTo(this.x + 319, this.y + 219);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();


        }
    }
    export class Mountains {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        drawMountains(): void {

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
            crc2.moveTo(this.x + 578, this.y + 400);
            crc2.quadraticCurveTo(this.x + 890, this.y - 150, 1050, 400);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.stroke();
            crc2.fill();
            crc2.lineWidth = 6;
            crc2.strokeStyle = "black"; // line color
            crc2.fillStyle = grad;
            crc2.moveTo(this.x + 778, this.y + 400);
            crc2.quadraticCurveTo(this.x + 1300, this.y - 150, 1400, 400);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.stroke();
            crc2.fill();
            crc2.lineWidth = 6;
            crc2.strokeStyle = "black"; // line color
            crc2.moveTo(this.x + 328, this.y + 400);
            crc2.quadraticCurveTo(this.x + 600, this.y - 150, 900, 400);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();


        }


    }
  
  
    export class OrdinarySkier {
        x: number;
        y: number;
        fillColor: string;
        strokeColor: string;
        constructor(_x: number, _y: number, _fillColor: string, _strokeColor: string) {
            this.x = _x;
            this.y = _y;
            this.strokeColor = _strokeColor;
            this.fillColor = _fillColor;

        }
        drawoneSkier(): void {
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.arc(this.x + 200, this.y + 109, 20, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.arc(this.x + 200, this.y + 79, 15, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            //knöpfe aus kleinen kreisen
            crc2.beginPath();
            crc2.fillStyle = "black ";
            crc2.arc(this.x + 200, this.y + 98, 2.5, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "black ";
            crc2.arc(this.x + 200, this.y + 108, 2.5, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "black ";
            crc2.arc(this.x + 200, this.y + 118, 2.5, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            //eyes
            crc2.beginPath();
            crc2.fillStyle = "black ";
            crc2.arc(this.x + 195, this.y + 76, 1.5, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "black ";
            crc2.arc(this.x + 206, this.y + 76, 1.5, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            //arms
            crc2.beginPath();
            crc2.strokeStyle = this.strokeColor;
            crc2.moveTo(this.x + 190, this.y + 89);
            crc2.lineTo(this.x + 150, this.y + 96);
            crc2.lineWidth = 1;
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.strokeStyle = this.strokeColor;
            crc2.moveTo(this.x + 208.98, this.y + 89);
            crc2.lineTo(this.x + 239, this.y + 106);
            crc2.lineWidth = 1;
            crc2.closePath();
            crc2.stroke();
            //head
            crc2.beginPath();
            crc2.fillStyle = "black ";
            crc2.fillRect(this.x + 182, this.y + 56, 35, 12);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "black ";
            crc2.fillRect(this.x + 192, this.y + 42, 14, 23);
            crc2.closePath();
            crc2.fill();
            //scarf
            crc2.beginPath();
            crc2.fillStyle = "red";
            crc2.fillRect(this.x + 187, this.y + 88, 25, 4.2);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "red ";
            crc2.arc(this.x + 193, this.y + 91, 3.5, 0, Math.PI * 2, true);
            crc2.arc(this.x + 193, this.y + 95, 3.5, 0, Math.PI * 2, true);
            crc2.arc(this.x + 193, this.y + 99, 3.5, 0, Math.PI * 2, true);
            crc2.arc(this.x + 197, this.y + 103, 3.5, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            //mouth
            crc2.beginPath();
            crc2.strokeStyle = this.strokeColor;
            crc2.fillStyle = "black";
            crc2.arc(this.x + 200, this.y + 88, 3, 0, Math.PI * 1, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            //nose
            crc2.beginPath();
            crc2.fillStyle = "orange ";
            crc2.arc(this.x + 200, this.y + 80, 3.5, 0, Math.PI * 2, true);
            crc2.fill();
            crc2.closePath();
            //ski
            crc2.beginPath();
            crc2.fillStyle = "red";
            crc2.fillRect(this.x + 156, this.y + 128, 87, 4);

            crc2.closePath();
            crc2.fill();

        }
    }

}