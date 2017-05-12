namespace Aufgabe7_Bees {
    export class Flowers {  <-- die Klasse soll nur ein Objekt beschreiben, nicht viele. Also: Flower, ohne "s"!
        centerX: number;
        centerY: number;
        radius: number;
        numPetals: number;
        color: string;
        crc2: CanvasRenderingContext2D;

        constructor(color: string) { <-- beachte Styleguide, Parameternamen sollen in diesem Kurs mit Unterstrich beginnen
            <-- hier sollte nun der übergebene String der hierfür vorgesehenen Objekteigenschaft zugewiesen werden
            //            // define an array of different colors
            //
            //            colorArray.push("red"); // 0
            //            colorArray.push("orange"); // 1
            //            colorArray.push("blue"); // 2
            //            colorArray.push("darkorchid"); //3
            //            colorArray.push("goldenrod"); //4
            //            colorArray.push("tomato"); // 5
            //            console.log(colorArray);
            //
        }

        // Funktion "drawFlowers"
        drawFlowers(): void { <-- es werden hier doch nicht mehrere Blumen gezeichnet und dass es um eine Blume geht, wird bereits aus dem Klassennamen deutlich. Daher einfach nur "draw"
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
            crc2.fillStyle = this.color; <-- hier wird ja die Farbeigenschaft verwendet, daher im Konstruktor definieren!
            crc2.fill();

            // black point in the middle of the flowers
            crc2.beginPath();
            crc2.arc(this.centerX, this.centerY, this.radius / 5, 0, 2 * Math.PI, false);
            crc2.fillStyle = "black";
            crc2.fill();

        }
    }
}
