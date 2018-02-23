//Aufgabe abschluss
//Name: Saile Christian
//Matrikel: 254877
//Datum: 22.Feburar 2018 
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var CANVAS;
(function (CANVAS) {
    class Icecream extends CANVAS.AnimatedObjects {
        constructor(_x, _y, _Stielcolor) {
            super(_x, _y);
            this.strokeColor = "orange";
            this.fillColor = "#FFFF00";
            this.color = _Stielcolor;
            this.width = 600;
            this.height = 620;
        }
        draw() {
            //sun meine Sonne
            CANVAS.crc2.beginPath();
            CANVAS.crc2.fillStyle = this.color;
            CANVAS.crc2.fillRect(this.x - 2.5, this.y + 9, 23, 5);
            CANVAS.crc2.closePath();
            CANVAS.crc2.fill();
            CANVAS.crc2.stroke();
            CANVAS.crc2.beginPath();
            CANVAS.crc2.strokeStyle = this.strokeColor;
            CANVAS.crc2.fillStyle = this.fillColor;
            CANVAS.crc2.lineWidth = 2;
            CANVAS.crc2.beginPath();
            CANVAS.crc2.fillStyle = this.color;
            CANVAS.crc2.fillRect(this.x + 2.5, this.y + 4, 12, 25);
            CANVAS.crc2.closePath();
            CANVAS.crc2.fill();
            CANVAS.crc2.stroke();
            CANVAS.crc2.beginPath();
            CANVAS.crc2.strokeStyle = this.strokeColor;
            CANVAS.crc2.fillStyle = this.fillColor;
            CANVAS.crc2.lineWidth = 2;
            CANVAS.crc2.arc(this.x + 2.8, this.y + 2, 7.4, 0, Math.PI * 2, true);
            CANVAS.crc2.closePath();
            CANVAS.crc2.fill();
            CANVAS.crc2.stroke();
            CANVAS.crc2.beginPath();
            CANVAS.crc2.strokeStyle = this.strokeColor;
            CANVAS.crc2.fillStyle = this.fillColor;
            CANVAS.crc2.lineWidth = 2;
            CANVAS.crc2.arc(this.x + 13.8, this.y + 2, 7.4, 0, Math.PI * 2, true);
            CANVAS.crc2.closePath();
            CANVAS.crc2.fill();
            CANVAS.crc2.stroke();
            CANVAS.crc2.beginPath();
            CANVAS.crc2.strokeStyle = this.strokeColor;
            CANVAS.crc2.fillStyle = this.fillColor;
            CANVAS.crc2.lineWidth = 2;
            CANVAS.crc2.arc(this.x + 8, this.y - 7, 7.4, 0, Math.PI * 2, true);
            CANVAS.crc2.closePath();
            CANVAS.crc2.fill();
            CANVAS.crc2.stroke();
        }
        gameOver() {
            this.y += Math.random() * (11.5 - 9);
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
    CANVAS.Icecream = Icecream;
})(CANVAS || (CANVAS = {}));
//# sourceMappingURL=icecream.js.map