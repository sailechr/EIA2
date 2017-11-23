namespace CANVAS_6 {
    export class Sonne extends AnimatedObjects {




        constructor(_x: number, _y: number) {
            super(_x, _y);
           
        }
        update(): void {
            this.draw();
            this.moveanimatedObject();
        }
        draw(): void {
            //sun meine Sonne

            crc2.beginPath();
            crc2.strokeStyle = "orange";
            crc2.fillStyle = "#FFFF00";
            crc2.lineWidth = 6;
            //Farbverlauf sonne gelb zu orange
            let grad2: CanvasGradient = crc2.createLinearGradient(110, 300, 93, 80);

            grad2.addColorStop(0, "yellow");
            grad2.addColorStop(1, "orange");
            crc2.fillStyle = grad2;
            crc2.arc(this.x + 20, this.y, 88, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        moveanimatedObject(): void {

            this.x += Math.random() * (12 - 9);

            if (this.x >= 800) {
                this.x = 0;
            }



        }

    }
}