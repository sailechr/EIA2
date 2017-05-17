//immer und überall bei separaten Dateien denselben Namespace verwenden

namespace Aufgabe7_Bees {
    export class Flower {
        centerX: number;
        centerY: number;
        radius: number;
        numPetals: number;
        color: string;

        constructor(_centerX: number, _centerY: number) {
            this.setRandomColor();
            this.setRandomPosition();
            this.numPetals = Math.round(Math.random() * (5 - 3) + 3);
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
        setRandomColor(): void {
            this.color = colors[Math.round(Math.random() * (colors.length - 1))];
        }
        setRandomPosition(): void {
            this.centerX = (Math.random() * (1280 - 307) + 307);
            this.centerY = (Math.random() * (720 - 410) + 410);
            this.radius = (Math.random() * 25) + 25;
        }

    }
}