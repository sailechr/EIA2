var CANVAS6;
(function (CANVAS6) {
    //Aufgabe 6 canvas
    //Name: Saile Christian
    //Matrikel: 254877
    //Datum: 25.November 2017
    //Hiermit versichere ich, dass ich diesen
    //Code selbst geschrieben habe. Er wurde
    //nicht kopiert und auch nicht diktiert.
    class Sun extends CANVAS6.AnimatedObjects {
        constructor(_x, _y) {
            super(_x, _y);
            this.fillColor = "#FFFF00";
            this.strokeColor = "orange";
        }
        draw() {
            //sun meine Sonne
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.strokeStyle = this.strokeColor;
            CANVAS6.crc2.fillStyle = this.fillColor;
            CANVAS6.crc2.lineWidth = 6;
            //Farbverlauf sonne gelb zu orange
            let grad2 = CANVAS6.crc2.createLinearGradient(110, 300, 93, 80);
            grad2.addColorStop(0, "yellow");
            grad2.addColorStop(1, "orange");
            CANVAS6.crc2.fillStyle = grad2;
            CANVAS6.crc2.arc(this.x + 20, this.y + 10, 88, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.fill();
            CANVAS6.crc2.stroke();
        }
        move() {
            this.x += Math.random() * (12 - 9);
            if (this.x >= 800) {
                this.x = 0;
            }
        }
    }
    CANVAS6.Sun = Sun;
})(CANVAS6 || (CANVAS6 = {}));
//# sourceMappingURL=sun.js.map