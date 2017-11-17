var CANVAS_5;
(function (CANVAS_5) {
    class Snowflakes {
        constructor(_x, _y, _strokeColor, _fillColor) {
            this.x = _x;
            this.y = _y;
            this.strokeColor = _strokeColor;
            this.fillColor = _fillColor;
        }
        drawSnowflakes() {
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.strokeStyle = this.strokeColor;
            CANVAS_5.crc2.fillStyle = this.fillColor;
            CANVAS_5.crc2.globalAlpha = 0.8;
            CANVAS_5.crc2.arc(this.x + 40, this.y + 80, 2, 0, Math.PI * 2, true);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.stroke();
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.strokeStyle = this.strokeColor;
            CANVAS_5.crc2.fillStyle = this.fillColor;
            CANVAS_5.crc2.globalAlpha = 0.7;
            CANVAS_5.crc2.arc(this.x + 50, this.y + 50, 3, 0, Math.PI * 2, true);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.stroke();
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.strokeStyle = this.strokeColor;
            CANVAS_5.crc2.fillStyle = this.fillColor;
            CANVAS_5.crc2.globalAlpha = 0.7;
            CANVAS_5.crc2.arc(this.x + 20, this.y + 30, 5, 0, Math.PI * 2, true);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.stroke();
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.strokeStyle = this.strokeColor;
            CANVAS_5.crc2.fillStyle = this.fillColor;
            CANVAS_5.crc2.globalAlpha = 0.7;
            CANVAS_5.crc2.arc(this.x + 120, this.y + 180, 2, 0, Math.PI * 2, true);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.stroke();
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.strokeStyle = this.strokeColor;
            CANVAS_5.crc2.fillStyle = this.fillColor;
            CANVAS_5.crc2.globalAlpha = 0.7;
            CANVAS_5.crc2.arc(this.x + 160, this.y + 150, 4, 0, Math.PI * 2, true);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.stroke();
            CANVAS_5.crc2.fill();
        }
        moveSnowflakes() {
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
    CANVAS_5.Snowflakes = Snowflakes;
})(CANVAS_5 || (CANVAS_5 = {}));
//# sourceMappingURL=snowflakes.js.map