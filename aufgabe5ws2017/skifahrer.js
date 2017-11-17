var CANVAS_5;
(function (CANVAS_5) {
    class SkiersInfo {
        constructor(_x, _y, _color, _size, _moveright) {
            this.positionX = _x;
            this.positionY = _y;
            this.bodyColor = _color;
            this.size = _size;
            this.movetotheRight = _moveright;
        }
        //        setPositionanColor(): void {
        //            this.positionX = Math.random() * 950 - 20;
        //            this.positionY = canvas.height;
        //            this.bodyColor = "hsl(" + Math.random() * 300 + ", 100%, 60%)";
        //            this.size = Math.random() * 18 + 6.5;
        //            this.movetotheRight = Math.random() * 14 - 3;
        //
        //       }
        moveSkiers() {
            this.positionX += Math.random() * 5 + this.movetotheRight;
            //s.movetotheRight= leichte Bewegung nach rechts (siehe Interface)
            this.positionY += Math.random() * 24;
            // Bewegungsmuster, das dafür sorgt, dass die Skifahrer von oben nach unten durch das canvas verlaufen
            if (this.positionX >= 602) {
                this.positionX = 244;
            }
            if (this.positionY >= 601) {
                this.positionY = 179;
            }
        }
        drawSkiers() {
            //Erklärung sieh animatefunktion
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = this.bodyColor;
            CANVAS_5.crc2.arc(this.positionX + 200, this.positionY + 109, this.size, 0, Math.PI * 2, true);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = this.bodyColor;
            CANVAS_5.crc2.arc(this.positionX + 200, this.positionY + 79, this.size, 0, Math.PI * 2, true);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            //knöpfe aus kleinen kreisen
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "black";
            CANVAS_5.crc2.arc(this.positionX + 200, this.positionY + 98, 2.5, 0, Math.PI * 2, true);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "black";
            CANVAS_5.crc2.arc(this.positionX + 200, this.positionY + 108, 2.5, 0, Math.PI * 2, true);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "black";
            CANVAS_5.crc2.arc(this.positionX + 200, this.positionY + 118, 2.5, 0, Math.PI * 2, true);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            //eyes
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "black";
            CANVAS_5.crc2.arc(this.positionX + 195, this.positionY + 76, 1.5, 0, Math.PI * 2, true);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "black";
            CANVAS_5.crc2.arc(this.positionX + 206, this.positionY + 76, 1.5, 0, Math.PI * 2, true);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            //arms
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.strokeStyle = "black";
            CANVAS_5.crc2.moveTo(this.positionX + 190, this.positionY + 89);
            CANVAS_5.crc2.lineTo(this.positionX + 150, this.positionY + 96);
            CANVAS_5.crc2.lineWidth = 1;
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.stroke();
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.strokeStyle = "black";
            CANVAS_5.crc2.moveTo(this.positionX + 208.98, this.positionY + 89);
            CANVAS_5.crc2.lineTo(this.positionX + 239, this.positionY + 106);
            CANVAS_5.crc2.lineWidth = 1;
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.stroke();
            //head
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "black ";
            CANVAS_5.crc2.fillRect(this.positionX + 182, this.positionY + 56, 35, 12);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "black ";
            CANVAS_5.crc2.fillRect(this.positionX + 192, this.positionY + 42, 14, 23);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            //scarf
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "red";
            CANVAS_5.crc2.fillRect(this.positionX + 187, this.positionY + 88, 25, 4.2);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "red ";
            CANVAS_5.crc2.arc(this.positionX + 193, this.positionY + 91, 3.5, 0, Math.PI * 2, true);
            CANVAS_5.crc2.arc(this.positionX + 193, this.positionY + 95, 3.5, 0, Math.PI * 2, true);
            CANVAS_5.crc2.arc(this.positionX + 193, this.positionY + 99, 3.5, 0, Math.PI * 2, true);
            CANVAS_5.crc2.arc(this.positionX + 197, this.positionY + 103, 3.5, 0, Math.PI * 2, true);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            //mouth
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.strokeStyle = "black";
            CANVAS_5.crc2.fillStyle = "black";
            CANVAS_5.crc2.arc(this.positionX + 200, this.positionY + 88, 3, 0, Math.PI * 1, true);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.stroke();
            CANVAS_5.crc2.fill();
            //nose
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "orange ";
            CANVAS_5.crc2.arc(this.positionX + 200, this.positionY + 80, 3.5, 0, Math.PI * 2, true);
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.closePath();
            //ski
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "red";
            CANVAS_5.crc2.fillRect(this.positionX + 156, this.positionY + 128, this.size + 78, this.size - 23);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
        }
    }
    CANVAS_5.SkiersInfo = SkiersInfo;
})(CANVAS_5 || (CANVAS_5 = {}));
//# sourceMappingURL=skifahrer.js.map