//Aufgabe 6 canvas
//Name: Saile Christian
//Matrikel: 254877
//Datum: 25.November 2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.


namespace CANVAS6 {

    //clouds in the sky
    export class Clouds {
        x: number;
        y: number;
        strokeColor: string;
        fillColor: string;

        constructor(_x: number, _y: number, _strokeColor: string, _fillColor: string) {
            this.x = _x;
            this.y = _y;
            this.strokeColor = _strokeColor;
            this.fillColor = _fillColor;

        }
        drawCloud(): void {
            crc2.globalAlpha = 0.99;
            crc2.beginPath();
            crc2.strokeStyle = this.strokeColor;
            crc2.fillStyle = this.fillColor;
            crc2.arc(this.x + 40, this.y + 80, 10, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 50, this.y + 54, 60, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 20, this.y - 30, 60, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 90, this.y - 50, 60, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 146, this.y + 12, 60, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 264, this.y - 394, 60, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 174, this.y - 44, 50, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

        }
    }


    export class SecondCloud extends AnimatedObjects {



        constructor(_x: number, _y: number) {

            super(_x, _y);





        }


        draw(): void {
            crc2.globalAlpha = 1;
            crc2.beginPath();
            crc2.strokeStyle = "grey";
            crc2.fillStyle = "grey";
            crc2.arc(this.x + 40, this.y + 80, 10, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 50, this.y + 54, 60, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 20, this.y - 30, 60, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 90, this.y - 50, 60, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 146, this.y + 12, 60, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 264, this.y - 394, 60, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 174, this.y - 44, 50, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

        }
        move(): void {
            this.x += Math.random() * (29 - 20); // Bewegungsmuster, das dafür sorgt, dass die wolken sich von links nach rechts durch das bild bewegen
            if (this.y >= 601) {
                this.y = 0;
            }
            if (this.x >= 800) {
                this.x = 0;
            }



        }
    }
}