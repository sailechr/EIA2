var CANVAS_6;
(function (CANVAS_6) {
    //clouds in the sky
    class Clouds {
        constructor(_x, _y, _strokeColor, _fillColor) {
            this.x = _x;
            this.y = _y;
            this.strokeColor = _strokeColor;
            this.fillColor = _fillColor;
        }
        drawCloud() {
            CANVAS_6.crc2.globalAlpha = 0.99;
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.strokeStyle = this.strokeColor;
            CANVAS_6.crc2.fillStyle = this.fillColor;
            CANVAS_6.crc2.arc(this.x + 40, this.y + 80, 10, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.stroke();
            CANVAS_6.crc2.fill();
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.arc(this.x + 50, this.y + 54, 60, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.stroke();
            CANVAS_6.crc2.fill();
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.arc(this.x + 20, this.y - 30, 60, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.stroke();
            CANVAS_6.crc2.fill();
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.arc(this.x + 90, this.y - 50, 60, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.stroke();
            CANVAS_6.crc2.fill();
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.arc(this.x + 146, this.y + 12, 60, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.stroke();
            CANVAS_6.crc2.fill();
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.arc(this.x + 264, this.y - 394, 60, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.stroke();
            CANVAS_6.crc2.fill();
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.arc(this.x + 174, this.y - 44, 50, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.stroke();
            CANVAS_6.crc2.fill();
        }
    }
    CANVAS_6.Clouds = Clouds;
    class SecondCloud extends CANVAS_6.AnimatedObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        update() {
            this.draw();
            this.moveanimatedObject();
        }
        draw() {
            CANVAS_6.crc2.globalAlpha = 0.99;
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.strokeStyle = "grey";
            CANVAS_6.crc2.fillStyle = "grey";
            CANVAS_6.crc2.arc(this.x + 40, this.y + 80, 10, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.stroke();
            CANVAS_6.crc2.fill();
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.arc(this.x + 50, this.y + 54, 60, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.stroke();
            CANVAS_6.crc2.fill();
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.arc(this.x + 20, this.y - 30, 60, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.stroke();
            CANVAS_6.crc2.fill();
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.arc(this.x + 90, this.y - 50, 60, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.stroke();
            CANVAS_6.crc2.fill();
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.arc(this.x + 146, this.y + 12, 60, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.stroke();
            CANVAS_6.crc2.fill();
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.arc(this.x + 264, this.y - 394, 60, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.stroke();
            CANVAS_6.crc2.fill();
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.arc(this.x + 174, this.y - 44, 50, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.stroke();
            CANVAS_6.crc2.fill();
        }
        moveanimatedObject() {
            this.x += Math.random() * (29 - 20); // Bewegungsmuster, das dafür sorgt, dass die wolken sich von links nach rechts durch das bild bewegen
            if (this.y >= 601) {
                this.y = 0;
            }
            if (this.x >= 800) {
                this.x = 0;
            }
        }
    }
    CANVAS_6.SecondCloud = SecondCloud;
})(CANVAS_6 || (CANVAS_6 = {}));
//# sourceMappingURL=clouds.js.map