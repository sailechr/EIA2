//Aufgabe abschluss
//Name: Saile Christian
//Matrikel: 254877
//Datum: 22.Feburar 2018 
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var CANVAS;
(function (CANVAS) {
    class Fruits extends CANVAS.AnimatedObjects {
        constructor(_x, _y, _color) {
            super(_x, _y);
            this.strokeColor = "black";
            this.color = _color;
            this.width = 600;
            this.height = 620;
        }
        draw() {
            CANVAS.crc2.beginPath();
            CANVAS.crc2.fillRect(this.x + 174, this.y - 16, 5, 6);
            CANVAS.crc2.fillStyle = this.color;
            CANVAS.crc2.strokeStyle = this.strokeColor;
            CANVAS.crc2.lineWidth = 1;
            CANVAS.crc2.closePath();
            CANVAS.crc2.fill();
            CANVAS.crc2.stroke();
            CANVAS.crc2.beginPath();
            CANVAS.crc2.strokeStyle = this.strokeColor;
            CANVAS.crc2.lineWidth = 1;
            CANVAS.crc2.fillStyle = "OrangeRed";
            CANVAS.crc2.arc(this.x + 180, this.y + 2, 15, 0, Math.PI * 2, true);
            CANVAS.crc2.closePath();
            CANVAS.crc2.fill();
            CANVAS.crc2.stroke();
            CANVAS.crc2.beginPath();
            CANVAS.crc2.fillRect(this.x + 116, this.y - 6.5, 5, 6);
            CANVAS.crc2.fillStyle = "green";
            CANVAS.crc2.closePath();
            CANVAS.crc2.fill();
            CANVAS.crc2.stroke();
            CANVAS.crc2.beginPath();
            CANVAS.crc2.strokeStyle = this.strokeColor;
            CANVAS.crc2.lineWidth = 1;
            CANVAS.crc2.fillStyle = "orange";
            CANVAS.crc2.arc(this.x + 120, this.y + 12, 15, 0, Math.PI * 2, true);
            CANVAS.crc2.closePath();
            CANVAS.crc2.fill();
            CANVAS.crc2.stroke();
            CANVAS.crc2.beginPath();
            CANVAS.crc2.fillRect(this.x + 29, this.y - 16, 5, 13);
            CANVAS.crc2.fillStyle = this.color;
            CANVAS.crc2.closePath();
            CANVAS.crc2.fill();
            CANVAS.crc2.stroke();
            CANVAS.crc2.beginPath();
            CANVAS.crc2.strokeStyle = this.strokeColor;
            CANVAS.crc2.lineWidth = 1;
            CANVAS.crc2.fillStyle = "green";
            CANVAS.crc2.arc(this.x + 14, this.y + 8, 11, 0, Math.PI * 2, true);
            CANVAS.crc2.closePath();
            CANVAS.crc2.fill();
            CANVAS.crc2.stroke();
            CANVAS.crc2.beginPath();
            CANVAS.crc2.strokeStyle = this.strokeColor;
            CANVAS.crc2.fillStyle = "green";
            CANVAS.crc2.lineWidth = 1;
            CANVAS.crc2.arc(this.x + 34, this.y + 8, 11, 0, Math.PI * 2, true);
            CANVAS.crc2.closePath();
            CANVAS.crc2.fill();
            CANVAS.crc2.stroke();
            CANVAS.crc2.beginPath();
            CANVAS.crc2.strokeStyle = this.strokeColor;
            CANVAS.crc2.fillStyle = "green";
            CANVAS.crc2.lineWidth = 1;
            CANVAS.crc2.arc(this.x + 54, this.y + 8, 11, 0, Math.PI * 2, true);
            CANVAS.crc2.closePath();
            CANVAS.crc2.fill();
            CANVAS.crc2.stroke();
            CANVAS.crc2.beginPath();
            CANVAS.crc2.strokeStyle = this.strokeColor;
            CANVAS.crc2.fillStyle = "green";
            CANVAS.crc2.lineWidth = 1;
            CANVAS.crc2.arc(this.x + 23, this.y + 25, 11, 0, Math.PI * 2, true);
            CANVAS.crc2.closePath();
            CANVAS.crc2.fill();
            CANVAS.crc2.stroke();
            CANVAS.crc2.beginPath();
            CANVAS.crc2.strokeStyle = this.strokeColor;
            CANVAS.crc2.fillStyle = "green";
            CANVAS.crc2.lineWidth = 1;
            CANVAS.crc2.arc(this.x + 43, this.y + 25, 11, 0, Math.PI * 2, true);
            CANVAS.crc2.closePath();
            CANVAS.crc2.fill();
            CANVAS.crc2.stroke();
            CANVAS.crc2.beginPath();
            CANVAS.crc2.strokeStyle = this.strokeColor;
            CANVAS.crc2.fillStyle = "green";
            CANVAS.crc2.lineWidth = 1;
            CANVAS.crc2.arc(this.x + 34, this.y + 42, 11, 0, Math.PI * 2, true);
            CANVAS.crc2.closePath();
            CANVAS.crc2.fill();
            CANVAS.crc2.stroke();
        }
        gameOver() {
            this.y += Math.random() * (12 - 9);
            //            if ( this.y >= 651 ) {
            //                this.y = 0;
            //            }
            if (this.y >= 651) {
                CANVAS.crc2.clearRect(0, 0, 1000, 650);
                CANVAS.crc2.font = "90px Courier";
                CANVAS.crc2.fillStyle = "red";
                CANVAS.crc2.textAlign = "center";
                CANVAS.crc2.textBaseline = "middle";
                //alert("Seite neu laden, um weiter zu spielen!");
                CANVAS.crc2.fillText("Game Over! ", 1000 / 2, 650 / 2);
            }
        }
        // Teil der Boundingbox, hier wird die "Box" definiert, in die geklickt werden kann
        hit(x, y) {
            //verschieben von der hitbox ins zentrum(entlang einer bestimmten breite)
            let middleXAx = this.x - this.width / 2;
            let middleYAx = this.y - this.height / 2;
            let hit = false;
            if (x <= middleXAx + this.width && x >= middleXAx &&
                y <= middleYAx + this.height && y >= middleYAx) {
                hit = true;
            }
            return hit;
        }
    }
    CANVAS.Fruits = Fruits;
})(CANVAS || (CANVAS = {}));
//# sourceMappingURL=fruits.js.map