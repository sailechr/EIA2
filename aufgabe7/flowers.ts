//immer und überall bei separaten Dateien denselben Namespace verwenden

namespace Aufgabe7_Bees {
    export class Flower {
        centerX: number;
        centerY: number;
        radius: number;
        numPetals: number;
        color: string;
        colorIndex: number;
        crc2: CanvasRenderingContext2D;
        colorArray: string[] = [];

        constructor(_centerX: number, _centerY: number) {
            this.draw();
            this.setRandomColor();
            this.setRandomPosition();
            this.radius = 5;
            this.centerX = _centerX;
            this.centerY = _centerY;
            console.log(this.colorArray);






            
        }

        // Funktion "drawFlowers"
        draw(): void {
            crc2.beginPath();

            // draw Petals of flowers
            for (let n: number = 0; n < this.numPetals; n++) {
                let theta1: number = ((Math.PI * 2) / this.numPetals) * (n + 1);
                let theta2: number = ((Math.PI * 2) / this.numPetals) * (n);

                var x1: number = (this.radius * Math.sin(theta1)) + this.centerX;
                var y1: number = (this.radius * Math.cos(theta1)) + this.centerY;
                var x2: number = (this.radius * Math.sin(theta2)) + this.centerX;
                var y2: number = (this.radius * Math.cos(theta2)) + this.centerY;

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
            // define an array of different colors 
            this.colorArray.push("red"); // 0
            this.colorArray.push("orange"); // 1
            this.colorArray.push("blue"); // 2
            this.colorArray.push("darkorchid"); //3
            this.colorArray.push("goldenrod"); //4
            this.colorArray.push("tomato"); // 5

        }
        setRandomPosition(): void {
            this.centerX = (Math.random() * (1280 - 307) + 307);
            this.centerY = (Math.random() * (720 - 410) + 410);
            this.colorIndex = Math.round(Math.random() * (this.colorArray.length - 1));
            this.radius = (Math.random() * 25) + 25;
        }

    }
}