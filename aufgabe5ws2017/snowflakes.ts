namespace CANVAS_5 {


    export class Snowflakes {
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



        drawSnowflakes(): void {

            crc2.beginPath();
            crc2.strokeStyle = this.strokeColor;
            crc2.fillStyle = this.fillColor;
            crc2.globalAlpha = 0.8;
            crc2.arc(this.x + 40, this.y + 80, 2, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.strokeStyle = this.strokeColor;
            crc2.fillStyle = this.fillColor;
            crc2.globalAlpha = 0.7;
            crc2.arc(this.x + 50, this.y + 50, 3, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.strokeStyle = this.strokeColor;
            crc2.fillStyle = this.fillColor;
            crc2.globalAlpha = 0.7;
            crc2.arc(this.x + 20, this.y + 30, 5, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.strokeStyle = this.strokeColor;
            crc2.fillStyle = this.fillColor;
            crc2.globalAlpha = 0.7;
            crc2.arc(this.x + 120, this.y + 180, 2, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.strokeStyle = this.strokeColor;
            crc2.fillStyle = this.fillColor;
            crc2.globalAlpha = 0.7;
            crc2.arc(this.x + 160, this.y + 150, 4, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
        moveSnowflakes(): void {

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