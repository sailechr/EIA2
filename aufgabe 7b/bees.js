var Aufgabe7_Bees;
(function (Aufgabe7_Bees) {
    class Square {
        constructor(_x, _y) {
            this.setRandomStyle1();
            this.x = _x;
            this.y = _y;
        }
        drawObject() {
            Aufgabe7_Bees.crc2.beginPath();
            Aufgabe7_Bees.crc2.fillStyle = "yellow";
            Aufgabe7_Bees.crc2.moveTo(this.x + 10, this.y);
            Aufgabe7_Bees.crc2.arc(this.x + 10, this.y, this.size, 0, Math.PI * 2, true);
            Aufgabe7_Bees.crc2.fill();
            Aufgabe7_Bees.crc2.closePath();
            Aufgabe7_Bees.crc2.beginPath();
            Aufgabe7_Bees.crc2.fillStyle = this.color;
            Aufgabe7_Bees.crc2.arc(this.x - 5, this.y + 11, this.size, 0, Math.PI * 2, true);
            Aufgabe7_Bees.crc2.arc(this.x + 5, this.y - 11, this.size, 0, Math.PI * 2, true);
            Aufgabe7_Bees.crc2.moveTo(this.x, this.y - 5);
            Aufgabe7_Bees.crc2.rect(this.x, this.y - 5, 5, 14);
            Aufgabe7_Bees.crc2.globalAlpha = 0.5;
            Aufgabe7_Bees.crc2.fill();
            Aufgabe7_Bees.crc2.closePath();
            Aufgabe7_Bees.crc2.beginPath();
            Aufgabe7_Bees.crc2.moveTo(this.x + 10, this.y);
            Aufgabe7_Bees.crc2.arc(this.x + 10, this.y, this.size, (Math.PI / 180) * 90, (Math.PI / 180) * 270, true);
            Aufgabe7_Bees.crc2.fillStyle = "yellow";
            Aufgabe7_Bees.crc2.fill();
            Aufgabe7_Bees.crc2.closePath();
            Aufgabe7_Bees.crc2.beginPath();
            Aufgabe7_Bees.crc2.moveTo(this.x, this.y - 5);
            Aufgabe7_Bees.crc2.rect(this.x, this.y - 5, 5, 10);
            Aufgabe7_Bees.crc2.fill();
            Aufgabe7_Bees.crc2.closePath();
            Aufgabe7_Bees.crc2.beginPath();
            Aufgabe7_Bees.crc2.moveTo(this.x + 5, this.y - 5);
            Aufgabe7_Bees.crc2.rect(this.x + 5, this.y - 5, 5, 10);
            Aufgabe7_Bees.crc2.fillStyle = "#000000";
            Aufgabe7_Bees.crc2.fill();
            Aufgabe7_Bees.crc2.closePath();
            Aufgabe7_Bees.crc2.beginPath();
            Aufgabe7_Bees.crc2.moveTo(this.x, this.y);
            Aufgabe7_Bees.crc2.arc(this.x, this.y, this.size, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
            Aufgabe7_Bees.crc2.fill();
            Aufgabe7_Bees.crc2.closePath();
            Aufgabe7_Bees.crc2.beginPath();
            Aufgabe7_Bees.crc2.moveTo(this.x + 5, this.y - 5);
            Aufgabe7_Bees.crc2.rect(this.x + 5, this.y - 5, 5, 10);
            Aufgabe7_Bees.crc2.fillStyle = "#000000";
            Aufgabe7_Bees.crc2.fill();
            Aufgabe7_Bees.crc2.closePath();
            Aufgabe7_Bees.crc2.beginPath();
            Aufgabe7_Bees.crc2.moveTo(this.x, this.y);
            Aufgabe7_Bees.crc2.arc(this.x, this.y, this.size, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
            Aufgabe7_Bees.crc2.fill();
            Aufgabe7_Bees.crc2.closePath();
            Aufgabe7_Bees.crc2.beginPath();
            Aufgabe7_Bees.crc2.moveTo(this.x + 16, this.y - 6);
            Aufgabe7_Bees.crc2.arcTo(this.x + 18, this.y - 9, this.x + 20, this.y - 15, this.size);
            Aufgabe7_Bees.crc2.strokeStyle = "#000000";
            Aufgabe7_Bees.crc2.stroke();
            Aufgabe7_Bees.crc2.closePath();
            Aufgabe7_Bees.crc2.beginPath();
            Aufgabe7_Bees.crc2.moveTo(this.x + 16, this.y - 3);
            Aufgabe7_Bees.crc2.arc(this.x + 16, this.y - 3, this.size, 0, (Math.PI) * 2, false);
            Aufgabe7_Bees.crc2.fillStyle = "#ffff00";
            Aufgabe7_Bees.crc2.fill();
            Aufgabe7_Bees.crc2.closePath();
            Aufgabe7_Bees.crc2.beginPath();
            Aufgabe7_Bees.crc2.moveTo(this.x + 17, this.y - 4);
            Aufgabe7_Bees.crc2.arc(this.x + 17, this.y - 4, this.size, 0, (Math.PI) * 2, false);
            Aufgabe7_Bees.crc2.fillStyle = "#000000";
            Aufgabe7_Bees.crc2.fill();
            Aufgabe7_Bees.crc2.closePath();
            Aufgabe7_Bees.crc2.beginPath();
            Aufgabe7_Bees.crc2.moveTo(this.x - 8, this.y);
            Aufgabe7_Bees.crc2.lineTo(this.x - 4, this.y - 2);
            Aufgabe7_Bees.crc2.lineTo(this.x - 4, this.y + 2);
            Aufgabe7_Bees.crc2.closePath();
            Aufgabe7_Bees.crc2.fill();
            Aufgabe7_Bees.crc2.beginPath();
            Aufgabe7_Bees.crc2.moveTo(this.x + 10, this.y);
            Aufgabe7_Bees.crc2.quadraticCurveTo(this.x + 10, this.y - 12, this.x + 5, this.y - 12);
            Aufgabe7_Bees.crc2.moveTo(this.x + 5, this.y);
            Aufgabe7_Bees.crc2.quadraticCurveTo(this.x - 5, this.y - 12, this.x + 5, this.y - 12);
            Aufgabe7_Bees.crc2.closePath();
            Aufgabe7_Bees.crc2.beginPath();
            Aufgabe7_Bees.crc2.moveTo(this.x, this.y);
            Aufgabe7_Bees.crc2.arc(this.x, this.y, this.size, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
            Aufgabe7_Bees.crc2.fill();
            Aufgabe7_Bees.crc2.closePath();
            Aufgabe7_Bees.crc2.beginPath();
            Aufgabe7_Bees.crc2.moveTo(this.x + 16, this.y - 6);
            Aufgabe7_Bees.crc2.arcTo(this.x + 18, this.y - 9, this.x + 20, this.y - 15, this.size);
            Aufgabe7_Bees.crc2.strokeStyle = "#000000";
            Aufgabe7_Bees.crc2.stroke();
            Aufgabe7_Bees.crc2.closePath();
            Aufgabe7_Bees.crc2.beginPath();
            Aufgabe7_Bees.crc2.moveTo(this.x + 16, this.y - 3);
            Aufgabe7_Bees.crc2.arc(this.x + 16, this.y - 3, this.size, 0, (Math.PI) * 2, false);
            Aufgabe7_Bees.crc2.fillStyle = "#ffff00";
            Aufgabe7_Bees.crc2.fill();
            Aufgabe7_Bees.crc2.closePath();
            Aufgabe7_Bees.crc2.beginPath();
            Aufgabe7_Bees.crc2.moveTo(this.x + 17, this.y - 4);
            Aufgabe7_Bees.crc2.arc(this.x + 17, this.y - 4, this.size, 0, (Math.PI) * 2, false);
            Aufgabe7_Bees.crc2.fillStyle = "#000000";
            Aufgabe7_Bees.crc2.fill();
            Aufgabe7_Bees.crc2.closePath();
            Aufgabe7_Bees.crc2.beginPath();
            Aufgabe7_Bees.crc2.moveTo(this.x - 8, this.y);
            Aufgabe7_Bees.crc2.lineTo(this.x - 4, this.y - 2);
            Aufgabe7_Bees.crc2.lineTo(this.x - 4, this.y + 2);
            Aufgabe7_Bees.crc2.closePath();
        }
        move() {
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
        setRandomPosition1() {
            this.x = Math.random() * 200;
            this.y = Math.random() * 200;
        }
        setRandomStyle1() {
            this.size = Math.random() * 2 + 4;
            this.color = "hsl(" + Math.random() * 560 + ", 100%, 80%)";
        }
    }
    Aufgabe7_Bees.Square = Square;
})(Aufgabe7_Bees || (Aufgabe7_Bees = {}));
//# sourceMappingURL=bees.js.map