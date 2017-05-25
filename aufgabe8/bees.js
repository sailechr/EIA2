var Aufgabe8_Superklasse;
(function (Aufgabe8_Superklasse) {
    class OrdinaryBees {
        constructor(_x, _y) {
            // super(_x, _y, _color, Math.random() * (15 - 5) + 5);
            this.setRandomStyle1();
            this.move1();
            this.x = _x;
            this.y = _y;
            this.rotation = Math.random() * 360;
        }
        drawObject() {
            Aufgabe8_Superklasse.crc2.beginPath();
            Aufgabe8_Superklasse.crc2.fillStyle = "yellow";
            Aufgabe8_Superklasse.crc2.moveTo(this.x + 10, this.y);
            Aufgabe8_Superklasse.crc2.arc(this.x + 10, this.y, this.size, 0, Math.PI * 2, true);
            Aufgabe8_Superklasse.crc2.fill();
            Aufgabe8_Superklasse.crc2.closePath();
            Aufgabe8_Superklasse.crc2.beginPath();
            Aufgabe8_Superklasse.crc2.fillStyle = this.color;
            Aufgabe8_Superklasse.crc2.arc(this.x - 5, this.y + 11, this.size, 0, Math.PI * 2, true);
            Aufgabe8_Superklasse.crc2.arc(this.x + 5, this.y - 11, this.size, 0, Math.PI * 2, true);
            Aufgabe8_Superklasse.crc2.moveTo(this.x, this.y - 5);
            Aufgabe8_Superklasse.crc2.rect(this.x, this.y - 5, 5, 14);
            Aufgabe8_Superklasse.crc2.globalAlpha = 0.5;
            Aufgabe8_Superklasse.crc2.fill();
            Aufgabe8_Superklasse.crc2.closePath();
            Aufgabe8_Superklasse.crc2.beginPath();
            Aufgabe8_Superklasse.crc2.moveTo(this.x + 10, this.y);
            Aufgabe8_Superklasse.crc2.arc(this.x + 10, this.y, this.size, (Math.PI / 180) * 90, (Math.PI / 180) * 270, true);
            Aufgabe8_Superklasse.crc2.fillStyle = "yellow";
            Aufgabe8_Superklasse.crc2.fill();
            Aufgabe8_Superklasse.crc2.closePath();
            Aufgabe8_Superklasse.crc2.beginPath();
            Aufgabe8_Superklasse.crc2.moveTo(this.x, this.y - 5);
            Aufgabe8_Superklasse.crc2.rect(this.x, this.y - 5, 5, 10);
            Aufgabe8_Superklasse.crc2.fill();
            Aufgabe8_Superklasse.crc2.closePath();
            Aufgabe8_Superklasse.crc2.beginPath();
            Aufgabe8_Superklasse.crc2.moveTo(this.x + 5, this.y - 5);
            Aufgabe8_Superklasse.crc2.rect(this.x + 5, this.y - 5, 5, 10);
            Aufgabe8_Superklasse.crc2.fillStyle = "#000000";
            Aufgabe8_Superklasse.crc2.fill();
            Aufgabe8_Superklasse.crc2.closePath();
            Aufgabe8_Superklasse.crc2.beginPath();
            Aufgabe8_Superklasse.crc2.moveTo(this.x, this.y);
            Aufgabe8_Superklasse.crc2.arc(this.x, this.y, this.size, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
            Aufgabe8_Superklasse.crc2.fill();
            Aufgabe8_Superklasse.crc2.closePath();
            Aufgabe8_Superklasse.crc2.beginPath();
            Aufgabe8_Superklasse.crc2.moveTo(this.x + 5, this.y - 5);
            Aufgabe8_Superklasse.crc2.rect(this.x + 5, this.y - 5, 5, 10);
            Aufgabe8_Superklasse.crc2.fillStyle = "#000000";
            Aufgabe8_Superklasse.crc2.fill();
            Aufgabe8_Superklasse.crc2.closePath();
            Aufgabe8_Superklasse.crc2.beginPath();
            Aufgabe8_Superklasse.crc2.moveTo(this.x, this.y);
            Aufgabe8_Superklasse.crc2.arc(this.x, this.y, this.size, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
            Aufgabe8_Superklasse.crc2.fill();
            Aufgabe8_Superklasse.crc2.closePath();
            Aufgabe8_Superklasse.crc2.beginPath();
            Aufgabe8_Superklasse.crc2.moveTo(this.x + 16, this.y - 6);
            Aufgabe8_Superklasse.crc2.arcTo(this.x + 18, this.y - 9, this.x + 20, this.y - 15, this.size);
            Aufgabe8_Superklasse.crc2.strokeStyle = "#000000";
            Aufgabe8_Superklasse.crc2.stroke();
            Aufgabe8_Superklasse.crc2.closePath();
            Aufgabe8_Superklasse.crc2.beginPath();
            Aufgabe8_Superklasse.crc2.moveTo(this.x + 16, this.y - 3);
            Aufgabe8_Superklasse.crc2.arc(this.x + 16, this.y - 3, this.size, 0, (Math.PI) * 2, false);
            Aufgabe8_Superklasse.crc2.fillStyle = "#ffff00";
            Aufgabe8_Superklasse.crc2.fill();
            Aufgabe8_Superklasse.crc2.closePath();
            Aufgabe8_Superklasse.crc2.beginPath();
            Aufgabe8_Superklasse.crc2.moveTo(this.x + 17, this.y - 4);
            Aufgabe8_Superklasse.crc2.arc(this.x + 17, this.y - 4, this.size, 0, (Math.PI) * 2, false);
            Aufgabe8_Superklasse.crc2.fillStyle = "#000000";
            Aufgabe8_Superklasse.crc2.fill();
            Aufgabe8_Superklasse.crc2.closePath();
            Aufgabe8_Superklasse.crc2.beginPath();
            Aufgabe8_Superklasse.crc2.moveTo(this.x - 8, this.y);
            Aufgabe8_Superklasse.crc2.lineTo(this.x - 4, this.y - 2);
            Aufgabe8_Superklasse.crc2.lineTo(this.x - 4, this.y + 2);
            Aufgabe8_Superklasse.crc2.closePath();
            Aufgabe8_Superklasse.crc2.fill();
            Aufgabe8_Superklasse.crc2.beginPath();
            Aufgabe8_Superklasse.crc2.moveTo(this.x + 10, this.y);
            Aufgabe8_Superklasse.crc2.quadraticCurveTo(this.x + 10, this.y - 12, this.x + 5, this.y - 12);
            Aufgabe8_Superklasse.crc2.moveTo(this.x + 5, this.y);
            Aufgabe8_Superklasse.crc2.quadraticCurveTo(this.x - 5, this.y - 12, this.x + 5, this.y - 12);
            Aufgabe8_Superklasse.crc2.closePath();
            Aufgabe8_Superklasse.crc2.beginPath();
            Aufgabe8_Superklasse.crc2.moveTo(this.x, this.y);
            Aufgabe8_Superklasse.crc2.arc(this.x, this.y, this.size, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
            Aufgabe8_Superklasse.crc2.fill();
            Aufgabe8_Superklasse.crc2.closePath();
            Aufgabe8_Superklasse.crc2.beginPath();
            Aufgabe8_Superklasse.crc2.moveTo(this.x + 16, this.y - 6);
            Aufgabe8_Superklasse.crc2.arcTo(this.x + 18, this.y - 9, this.x + 20, this.y - 15, this.size);
            Aufgabe8_Superklasse.crc2.strokeStyle = "#000000";
            Aufgabe8_Superklasse.crc2.stroke();
            Aufgabe8_Superklasse.crc2.closePath();
            Aufgabe8_Superklasse.crc2.beginPath();
            Aufgabe8_Superklasse.crc2.moveTo(this.x + 16, this.y - 3);
            Aufgabe8_Superklasse.crc2.arc(this.x + 16, this.y - 3, this.size, 0, (Math.PI) * 2, false);
            Aufgabe8_Superklasse.crc2.fillStyle = "#ffff00";
            Aufgabe8_Superklasse.crc2.fill();
            Aufgabe8_Superklasse.crc2.closePath();
            Aufgabe8_Superklasse.crc2.beginPath();
            Aufgabe8_Superklasse.crc2.moveTo(this.x + 17, this.y - 4);
            Aufgabe8_Superklasse.crc2.arc(this.x + 17, this.y - 4, this.size, 0, (Math.PI) * 2, false);
            Aufgabe8_Superklasse.crc2.fillStyle = "#000000";
            Aufgabe8_Superklasse.crc2.fill();
            Aufgabe8_Superklasse.crc2.closePath();
            Aufgabe8_Superklasse.crc2.beginPath();
            Aufgabe8_Superklasse.crc2.moveTo(this.x - 8, this.y);
            Aufgabe8_Superklasse.crc2.lineTo(this.x - 4, this.y - 2);
            Aufgabe8_Superklasse.crc2.lineTo(this.x - 4, this.y + 2);
            Aufgabe8_Superklasse.crc2.closePath();
            Aufgabe8_Superklasse.crc2.globalAlpha = 1;
        }
        move1() {
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
        setRandomPosition1() {
            this.x = Math.random() * 200;
            this.y = Math.random() * 200;
        }
        setRandomStyle1() {
            this.size = Math.random() * 2 + 4;
            this.color = "hsl(" + Math.random() * 560 + ", 100%, 80%)";
        }
    }
    Aufgabe8_Superklasse.OrdinaryBees = OrdinaryBees;
})(Aufgabe8_Superklasse || (Aufgabe8_Superklasse = {}));
//# sourceMappingURL=bees.js.map