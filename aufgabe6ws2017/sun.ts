namespace CANVAS6 {
    export class Sun extends AnimatedObjects {
        fillColor: string;
        strokeColor: string;



        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.fillColor = "#FFFF00";
            this.strokeColor = "orange";

        }

        draw(): void {
            //sun meine Sonne

            crc2.beginPath();
            crc2.strokeStyle = this.strokeColor;
            crc2.fillStyle = this.fillColor;
            crc2.lineWidth = 6;
           //Farbverlauf sonne gelb zu orange
            let grad2: CanvasGradient = crc2.createLinearGradient(110, 300, 93, 80);

            grad2.addColorStop(0, "yellow");
            grad2.addColorStop(1, "orange");
            crc2.fillStyle = grad2;
            crc2.arc(this.x + 20, this.y + 10, 88, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        move(): void {

            this.x += Math.random() * (12 - 9);

            if (this.x >= 800) {
                this.x = 0;
            }



        }

    }
}