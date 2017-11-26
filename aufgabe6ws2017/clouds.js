//Aufgabe 6 canvas
//Name: Saile Christian
//Matrikel: 254877
//Datum: 25.November 2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var CANVAS6;
(function (CANVAS6) {
    //clouds in the sky
    class Clouds {
        constructor(_x, _y, _strokeColor, _fillColor) {
            this.x = _x;
            this.y = _y;
            this.strokeColor = _strokeColor;
            this.fillColor = _fillColor;
        }
        drawCloud() {
            CANVAS6.crc2.globalAlpha = 0.99;
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.strokeStyle = this.strokeColor;
            CANVAS6.crc2.fillStyle = this.fillColor;
            CANVAS6.crc2.arc(this.x + 40, this.y + 80, 10, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.stroke();
            CANVAS6.crc2.fill();
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.arc(this.x + 50, this.y + 54, 60, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.stroke();
            CANVAS6.crc2.fill();
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.arc(this.x + 20, this.y - 30, 60, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.stroke();
            CANVAS6.crc2.fill();
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.arc(this.x + 90, this.y - 50, 60, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.stroke();
            CANVAS6.crc2.fill();
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.arc(this.x + 146, this.y + 12, 60, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.stroke();
            CANVAS6.crc2.fill();
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.arc(this.x + 264, this.y - 394, 60, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.stroke();
            CANVAS6.crc2.fill();
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.arc(this.x + 174, this.y - 44, 50, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.stroke();
            CANVAS6.crc2.fill();
        }
    }
    CANVAS6.Clouds = Clouds;
    class SecondCloud extends CANVAS6.AnimatedObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            CANVAS6.crc2.globalAlpha = 1;
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.strokeStyle = "grey";
            CANVAS6.crc2.fillStyle = "grey";
            CANVAS6.crc2.arc(this.x + 40, this.y + 80, 10, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.stroke();
            CANVAS6.crc2.fill();
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.arc(this.x + 50, this.y + 54, 60, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.stroke();
            CANVAS6.crc2.fill();
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.arc(this.x + 20, this.y - 30, 60, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.stroke();
            CANVAS6.crc2.fill();
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.arc(this.x + 90, this.y - 50, 60, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.stroke();
            CANVAS6.crc2.fill();
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.arc(this.x + 146, this.y + 12, 60, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.stroke();
            CANVAS6.crc2.fill();
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.arc(this.x + 264, this.y - 394, 60, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.stroke();
            CANVAS6.crc2.fill();
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.arc(this.x + 174, this.y - 44, 50, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.stroke();
            CANVAS6.crc2.fill();
        }
        move() {
            this.x += Math.random() * (29 - 20); // Bewegungsmuster, das dafür sorgt, dass die wolken sich von links nach rechts durch das bild bewegen
            if (this.y >= 601) {
                this.y = 0;
            }
            if (this.x >= 800) {
                this.x = 0;
            }
        }
    }
    CANVAS6.SecondCloud = SecondCloud;
})(CANVAS6 || (CANVAS6 = {}));
//# sourceMappingURL=clouds.js.map