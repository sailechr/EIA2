var CANVAS_6;
(function (CANVAS_6) {
    class Snowflakes extends CANVAS_6.AnimatedObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        update() {
            this.draw();
            this.moveanimatedObject();
        }
        draw() {
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.strokeStyle = "black";
            CANVAS_6.crc2.fillStyle = "whitesmoke";
            CANVAS_6.crc2.globalAlpha = 0.8;
            CANVAS_6.crc2.arc(this.x + 40, this.y + 80, 2, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.stroke();
            CANVAS_6.crc2.fill();
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.strokeStyle = "black";
            CANVAS_6.crc2.fillStyle = "whitesmoke";
            CANVAS_6.crc2.globalAlpha = 0.7;
            CANVAS_6.crc2.arc(this.x + 50, this.y + 50, 3, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.stroke();
            CANVAS_6.crc2.fill();
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.strokeStyle = "black";
            CANVAS_6.crc2.fillStyle = "whitesmoke";
            CANVAS_6.crc2.globalAlpha = 0.7;
            CANVAS_6.crc2.arc(this.x + 20, this.y + 30, 5, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.stroke();
            CANVAS_6.crc2.fill();
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.strokeStyle = "black";
            CANVAS_6.crc2.fillStyle = "whitesmoke";
            CANVAS_6.crc2.globalAlpha = 0.7;
            CANVAS_6.crc2.arc(this.x + 120, this.y + 180, 2, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.stroke();
            CANVAS_6.crc2.fill();
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.strokeStyle = "black";
            CANVAS_6.crc2.fillStyle = "whitesmoke";
            CANVAS_6.crc2.globalAlpha = 0.7;
            CANVAS_6.crc2.arc(this.x + 160, this.y + 150, 4, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.stroke();
            CANVAS_6.crc2.fill();
        }
        moveanimatedObject() {
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
    CANVAS_6.Snowflakes = Snowflakes;
})(CANVAS_6 || (CANVAS_6 = {}));
//# sourceMappingURL=snowflakes.js.map