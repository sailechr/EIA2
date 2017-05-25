namespace Aufgabe8_Superklasse {
    export class OrdinaryBees {
        x: number;
        y: number;
        size: number;
        color: string;
        rotation: number;


        constructor(_x: number, _y: number) {
            // super(_x, _y, _color, Math.random() * (15 - 5) + 5);
            this.setRandomStyle1();
            this.move1();
            this.x = _x;
            this.y = _y;
            this.rotation = Math.random() * 360;
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
            crc2.globalAlpha = 1;
        }



        move1(): void {
            
            this.x += Math.random() * 2 - 0.3;
            this.y += Math.random() * 2 - 0.6;
            this.y += Math.random() * 19 - 9.5;
            if (this.x >= 1260)
                this.x = 0;

            if (this.y <= 0)
                this.y = 700;

            if (this.x < 0)
                this.x = 1260;

            if (this.y > 700)
                this.y = 0;
            this.rotation++;
            if (this.rotation >= 360) {
                this.rotation = 0;
            }
        }

        setRandomPosition1(): void {
            this.x = Math.random() * 200;
            this.y = Math.random() * 200;
        }

        setRandomStyle1(): void {
            this.size = Math.random() * 2 + 4;
            this.color = "hsl(" + Math.random() * 560 + ", 100%, 80%)";
        }
    }
}   