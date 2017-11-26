var CANVAS6;
(function (CANVAS6) {
    //Aufgabe 6 canvas
    //Name: Saile Christian
    //Matrikel: 254877
    //Datum: 25.November 2017
    //Hiermit versichere ich, dass ich diesen
    //Code selbst geschrieben habe. Er wurde
    //nicht kopiert und auch nicht diktiert.
    class Snowflakes extends CANVAS6.AnimatedObjects {
        constructor(_x, _y) {
            super(_x, _y);
            this.color = "whitesmoke";
        }
        draw() {
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.strokeStyle = "black";
            CANVAS6.crc2.fillStyle = this.color;
            CANVAS6.crc2.globalAlpha = 0.8;
            CANVAS6.crc2.arc(this.x + 40, this.y + 80, 2, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.stroke();
            CANVAS6.crc2.fill();
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.strokeStyle = "black";
            CANVAS6.crc2.fillStyle = this.color;
            CANVAS6.crc2.globalAlpha = 0.7;
            CANVAS6.crc2.arc(this.x + 50, this.y + 50, 3, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.stroke();
            CANVAS6.crc2.fill();
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.strokeStyle = "black";
            CANVAS6.crc2.fillStyle = this.color;
            CANVAS6.crc2.globalAlpha = 0.7;
            CANVAS6.crc2.arc(this.x + 20, this.y + 30, 5, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.stroke();
            CANVAS6.crc2.fill();
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.strokeStyle = "black";
            CANVAS6.crc2.fillStyle = this.color;
            CANVAS6.crc2.globalAlpha = 0.7;
            CANVAS6.crc2.arc(this.x + 120, this.y + 180, 2, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.stroke();
            CANVAS6.crc2.fill();
            CANVAS6.crc2.beginPath();
            CANVAS6.crc2.strokeStyle = "black";
            CANVAS6.crc2.fillStyle = this.color;
            CANVAS6.crc2.globalAlpha = 0.7;
            CANVAS6.crc2.arc(this.x + 160, this.y + 150, 4, 0, Math.PI * 2, true);
            CANVAS6.crc2.closePath();
            CANVAS6.crc2.stroke();
            CANVAS6.crc2.fill();
        }
        move() {
            this.y += Math.random() * 6;
            this.x += 3 * Math.random();
            // andere Bewegungsmuster zu finden
            //wenn die schneeflocken die volle breite des canvas erreichen, dann sollen sie wieder beim Startwert ins bild fliegen
            //dies gilt analog auch für die höhe, die skifahrer und für die wolke
            if (this.y >= 601) {
                this.y = 10;
            }
            if (this.x >= 801) {
                this.x = 12;
            }
        }
    }
    CANVAS6.Snowflakes = Snowflakes;
})(CANVAS6 || (CANVAS6 = {}));
//# sourceMappingURL=snowflakes.js.map