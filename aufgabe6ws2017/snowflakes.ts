namespace CANVAS6 {


    export class Snowflakes extends AnimatedObjects {
       




        constructor(_x: number, _y: number) {
            super(_x, _y);
            
            this.color = "whitesmoke";

        }

       

        draw(): void {

            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = this.color;
            crc2.globalAlpha = 0.8;
            crc2.arc(this.x + 40, this.y + 80, 2, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = this.color;
            crc2.globalAlpha = 0.7;
            crc2.arc(this.x + 50, this.y + 50, 3, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = this.color;
            crc2.globalAlpha = 0.7;
            crc2.arc(this.x + 20, this.y + 30, 5, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = this.color;
            crc2.globalAlpha = 0.7;
            crc2.arc(this.x + 120, this.y + 180, 2, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = this.color;
            crc2.globalAlpha = 0.7;
            crc2.arc(this.x + 160, this.y + 150, 4, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
        move(): void {

            this.y += Math.random() * 6;
            this.x += 3 * Math.random();
            // andere Bewegungsmuster zu finden
            //wenn die schneeflocken die volle breite des canvas erreichen, dann sollen sie wieder beim Startwert ins bild fliegen
            //dies gilt analog auch für die höhe, die skifahrer und für die wolke
            if (this.y >= 601) {
                this.y = 10;
            }
            if (this.x >= 801) {
                this.x = 12;
            }
            
        







        }





























    }
}