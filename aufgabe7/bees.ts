namespace Aufgabe7_Bees {
    export class Square {
        x: number;
        y: number;
        size: number;
        color: string;



        constructor(_x: number, _y: number) {
            this.setRandomStyle();
            this.x = _x;
            this.y = _y;
        }


        drawObject(): void {
            crc2.beginPath();
            crc2.fillStyle = "yellow";
            crc2.moveTo(this.x + 10, this.y);
            crc2.arc(this.x + 10, this.y, this.size, 0, Math.PI * 2, true);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.arc(this.x - 5, this.y + 11, this.size, 0, Math.PI * 2, true);
            crc2.arc(this.x + 5, this.y - 11, this.size, 0, Math.PI * 2, true);
            crc2.moveTo(this.x, this.y - 5);
            crc2.rect(this.x, this.y - 5, 5, 14);
            crc2.globalAlpha = 0.5;
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x + 10, this.y);
            crc2.arc(this.x + 10, this.y, this.size, (Math.PI / 180) * 90, (Math.PI / 180) * 270, true);
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 5);
            crc2.rect(this.x, this.y - 5, 5, 10);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x + 5, this.y - 5);
            crc2.rect(this.x + 5, this.y - 5, 5, 10);
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, this.size, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x + 5, this.y - 5);
            crc2.rect(this.x + 5, this.y - 5, 5, 10);
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, this.size, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x + 16, this.y - 6);
            crc2.arcTo(this.x + 18, this.y - 9, this.x + 20, this.y - 15, this.size);
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x + 16, this.y - 3);
            crc2.arc(this.x + 16, this.y - 3, this.size, 0, (Math.PI) * 2, false);
            crc2.fillStyle = "#ffff00";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x + 17, this.y - 4);
            crc2.arc(this.x + 17, this.y - 4, this.size, 0, (Math.PI) * 2, false);
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x - 8, this.y);
            crc2.lineTo(this.x - 4, this.y - 2);
            crc2.lineTo(this.x - 4, this.y + 2);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(this.x + 10, this.y);
            crc2.quadraticCurveTo(this.x + 10, this.y - 12, this.x + 5, this.y - 12);
            crc2.moveTo(this.x + 5, this.y);
            crc2.quadraticCurveTo(this.x - 5, this.y - 12, this.x + 5, this.y - 12);
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, this.size, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x + 16, this.y - 6);
            crc2.arcTo(this.x + 18, this.y - 9, this.x + 20, this.y - 15, this.size);
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x + 16, this.y - 3);
            crc2.arc(this.x + 16, this.y - 3, this.size, 0, (Math.PI) * 2, false);
            crc2.fillStyle = "#ffff00";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x + 17, this.y - 4);
            crc2.arc(this.x + 17, this.y - 4, this.size, 0, (Math.PI) * 2, false);
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x - 8, this.y);
            crc2.lineTo(this.x - 4, this.y - 2);
            crc2.lineTo(this.x - 4, this.y + 2);
            crc2.closePath();
        }



        move(): void {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
            this.y += Math.random() * 4.7 - 2.5;
            if (this.x >= 1270)
                this.x = 0;

            if (this.y <= 0)
                this.y = 720;

            if (this.x < 0)
                this.x = 1270;

            if (this.y > 720)
                this.y = 0;
        }

        setRandomPosition(): void {
            this.x = Math.random() * 200;
            this.y = Math.random() * 200;
        }

        setRandomStyle(): void {
            this.size = Math.random() * 2 + 4;
            this.color = "hsl(" + Math.random() * 560 + ", 100%, 80%)";
        }
    }
}   