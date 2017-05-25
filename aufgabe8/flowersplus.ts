namespace Aufgabe8_Superklasse {
    export class Flowerplus extends Blümle {

        constructor(_centerX: number, _centerY: number, _color: string) {
            super(_centerX, _centerY, _color);
            this.setRandomColor();
            this.setRandomPosition();
            this.draw();
            this.numPetals = Math.round(Math.random() * (5 - 3) + 3);
            _color = this.color;
            _centerX = this.centerX;
            _centerY = this.centerY;
            //Anzahl der Blätter werden über den Constructor übergeben
        }
       // Funktion "drawFlowers"


        draw(): void {

            crc2.beginPath();

            // draw Petals of flowers
            for (let n: number = 0; n < this.numPetals; n++) {
                let theta1: number = ((Math.PI * 2) / this.numPetals) * (n + 1);
                let theta2: number = ((Math.PI * 2) / this.numPetals) * (n);

                let x1: number = (this.radius * Math.sin(theta1)) + this.centerX;
                let y1: number = (this.radius * Math.cos(theta1)) + this.centerY;
                let x2: number = (this.radius * Math.sin(theta2)) + this.centerX;
                let y2: number = (this.radius * Math.cos(theta2)) + this.centerY;

                crc2.moveTo(this.centerX, this.centerY);
                crc2.bezierCurveTo(x1, y1, x2, y2, this.centerX, this.centerY);
                if (n > 10) { blümle.push(); }
                //10Blumen werden zwischengespeichert

            }

            crc2.closePath();
            crc2.fillStyle = this.color;
            crc2.fill();

            // black point in the middle of the flowers
            crc2.beginPath();
            crc2.arc(this.centerX, this.centerY, this.radius / 5, 0, 2 * Math.PI, false);
            crc2.fillStyle = "black";
            crc2.fill();

        }

       



    }
}