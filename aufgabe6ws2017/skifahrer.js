var CANVAS_6;
(function (CANVAS_6) {
    class SkiersInfo extends CANVAS_6.AnimatedObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        update() {
            this.draw();
            this.moveanimatedObject();
        }
        moveanimatedObject() {
            this.x += -5 + (Math.random() * 14 - 3);
            //s.movetotheRight= leichte Bewegung nach rechts (siehe Interface)
            this.y += Math.random() * 22;
            // Bewegungsmuster, das dafür sorgt, dass die Skifahrer von oben nach unten durch das canvas verlaufen
            if (this.x <= 0) {
                this.x = 364;
            }
            if (this.x >= 801) {
                this.x = 364;
            }
            if (this.y >= 601) {
                this.y = 179;
            }
        }
        draw() {
            //Erklärung sieh animatefunktion
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.fillStyle = "hsl(" + Math.random() * 300 + ", 100%, 60%)";
            CANVAS_6.crc2.arc(this.x + 200, this.y + 109, Math.random() * 18 + 6.5, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.fill();
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.fillStyle = "hsl(" + Math.random() * 300 + ", 100%, 60%)";
            CANVAS_6.crc2.arc(this.x + 200, this.y + 79, Math.random() * 18 + 6.5, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.fill();
            //knöpfe aus kleinen kreisen
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.fillStyle = "black";
            CANVAS_6.crc2.arc(this.x + 200, this.y + 98, 2.5, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.fill();
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.fillStyle = "black";
            CANVAS_6.crc2.arc(this.x + 200, this.y + 108, 2.5, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.fill();
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.fillStyle = "black";
            CANVAS_6.crc2.arc(this.x + 200, this.y + 118, 2.5, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.fill();
            //eyes
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.fillStyle = "black";
            CANVAS_6.crc2.arc(this.x + 195, this.y + 76, 1.5, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.fill();
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.fillStyle = "black";
            CANVAS_6.crc2.arc(this.x + 206, this.y + 76, 1.5, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.fill();
            //arms
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.strokeStyle = "black";
            CANVAS_6.crc2.moveTo(this.x + 190, this.y + 89);
            CANVAS_6.crc2.lineTo(this.x + 150, this.y + 96);
            CANVAS_6.crc2.lineWidth = 1;
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.stroke();
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.strokeStyle = "black";
            CANVAS_6.crc2.moveTo(this.x + 208.98, this.y + 89);
            CANVAS_6.crc2.lineTo(this.x + 239, this.y + 106);
            CANVAS_6.crc2.lineWidth = 1;
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.stroke();
            //head
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.fillStyle = "black ";
            CANVAS_6.crc2.fillRect(this.x + 182, this.y + 56, 35, 12);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.fill();
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.fillStyle = "black ";
            CANVAS_6.crc2.fillRect(this.x + 192, this.y + 42, 14, 23);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.fill();
            //scarf
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.fillStyle = "red";
            CANVAS_6.crc2.fillRect(this.x + 187, this.y + 88, 25, 4.2);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.fill();
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.fillStyle = "red ";
            CANVAS_6.crc2.arc(this.x + 193, this.y + 91, 3.5, 0, Math.PI * 2, true);
            CANVAS_6.crc2.arc(this.x + 193, this.y + 95, 3.5, 0, Math.PI * 2, true);
            CANVAS_6.crc2.arc(this.x + 193, this.y + 99, 3.5, 0, Math.PI * 2, true);
            CANVAS_6.crc2.arc(this.x + 197, this.y + 103, 3.5, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.fill();
            //mouth
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.strokeStyle = "black";
            CANVAS_6.crc2.fillStyle = "black";
            CANVAS_6.crc2.arc(this.x + 200, this.y + 88, 3, 0, Math.PI * 1, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.stroke();
            CANVAS_6.crc2.fill();
            //nose
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.fillStyle = "orange ";
            CANVAS_6.crc2.arc(this.x + 200, this.y + 80, 3.5, 0, Math.PI * 2, true);
            CANVAS_6.crc2.fill();
            CANVAS_6.crc2.closePath();
            //ski
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.fillStyle = "red";
            CANVAS_6.crc2.fillRect(this.x + 156, this.y + 128, Math.random() * 18 + 6.5 + 78, Math.random() * 18 + 6.5 - 23);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.fill();
        }
    }
    CANVAS_6.SkiersInfo = SkiersInfo;
})(CANVAS_6 || (CANVAS_6 = {}));
//# sourceMappingURL=skifahrer.js.map