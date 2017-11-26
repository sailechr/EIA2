var CANVAS6;
(function (CANVAS6) {
    //Aufgabe 6 canvas
    //Name: Saile Christian
    //Matrikel: 254877
    //Datum: 25.November 2017
    //Hiermit versichere ich, dass ich diesen
    //Code selbst geschrieben habe. Er wurde
    //nicht kopiert und auch nicht diktiert.
    class SkiersInfo extends CANVAS6.AnimatedObjects {
        constructor(_x, _y) {
            super(_x, _y);
            this.color = "hsl(" + Math.random() * 300 + ", 100%, 50%)";
            this.size = Math.random() * 18 + 6.5;
            this.movetotheLeft = Math.random() * 7 - 10;
        }
        draw() {
            //Erklärung sieh animatefunktion
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.fillStyle = this.color;
            CANVAS6.crc2.arc(this.x + 200, this.y + 109, this.size, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.fill();
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.fillStyle = this.color;
            CANVAS6.crc2.arc(this.x + 200, this.y + 79, this.size, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.fill();
            //knöpfe aus kleinen kreisen
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.fillStyle = "black";
            CANVAS6.crc2.arc(this.x + 200, this.y + 98, 2.5, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.fill();
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.fillStyle = "black";
            CANVAS6.crc2.arc(this.x + 200, this.y + 108, 2.5, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.fill();
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.fillStyle = "black";
            CANVAS6.crc2.arc(this.x + 200, this.y + 118, 2.5, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.fill();
            //eyes
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.fillStyle = "black";
            CANVAS6.crc2.arc(this.x + 195, this.y + 76, 1.5, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.fill();
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.fillStyle = "black";
            CANVAS6.crc2.arc(this.x + 206, this.y + 76, 1.5, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.fill();
            //arms
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.strokeStyle = "black";
            CANVAS6.crc2.moveTo(this.x + 190, this.y + 89);
            CANVAS6.crc2.lineTo(this.x + 150, this.y + 96);
            CANVAS6.crc2.lineWidth = 1;
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.stroke();
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.strokeStyle = "black";
            CANVAS6.crc2.moveTo(this.x + 208.98, this.y + 89);
            CANVAS6.crc2.lineTo(this.x + 239, this.y + 106);
            CANVAS6.crc2.lineWidth = 1;
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.stroke();
            //head
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.fillStyle = "black ";
            CANVAS6.crc2.fillRect(this.x + 182, this.y + 56, 35, 12);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.fill();
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.fillStyle = "black ";
            CANVAS6.crc2.fillRect(this.x + 192, this.y + 42, 14, 23);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.fill();
            //scarf
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.fillStyle = "red";
            CANVAS6.crc2.fillRect(this.x + 187, this.y + 88, 25, 4.2);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.fill();
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.fillStyle = "red ";
            CANVAS6.crc2.arc(this.x + 193, this.y + 91, 3.5, 0, Math.PI * 2, true);
            CANVAS6.crc2.arc(this.x + 193, this.y + 95, 3.5, 0, Math.PI * 2, true);
            CANVAS6.crc2.arc(this.x + 193, this.y + 99, 3.5, 0, Math.PI * 2, true);
            CANVAS6.crc2.arc(this.x + 197, this.y + 103, 3.5, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.fill();
            //mouth
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.strokeStyle = "black";
            CANVAS6.crc2.fillStyle = "black";
            CANVAS6.crc2.arc(this.x + 200, this.y + 88, 3, 0, Math.PI * 1, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.stroke();
            CANVAS6.crc2.fill();
            //nose
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.fillStyle = "orange ";
            CANVAS6.crc2.arc(this.x + 200, this.y + 80, 3.5, 0, Math.PI * 2, true);
            CANVAS6.crc2.fill();
            CANVAS6.crc2.closePath();
            //ski
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.fillStyle = "red";
            CANVAS6.crc2.fillRect(this.x + 156, this.y + 128, this.size + 78, this.size - 23);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.fill();
        }
        move() {
            this.x += -4 + this.movetotheLeft;
            //s.movetotheRight= leichte Bewegung nach rechts (siehe Interface)
            this.y += Math.random() * 8;
            // Bewegungsmuster, das dafür sorgt, dass die Skifahrer von oben nach unten durch das canvas verlaufen
            if (this.x <= 20) {
                this.x = 714;
            }
            if (this.x >= 801) {
                this.x = 314;
            }
            if (this.y >= 601) {
                this.y = 229;
            }
        }
    }
    CANVAS6.SkiersInfo = SkiersInfo;
})(CANVAS6 || (CANVAS6 = {}));
//# sourceMappingURL=skifahrer.js.map