var CANVAS_5;
(function (CANVAS_5) {
    class Sonne {
        constructor(_x, _y, _strokeColor, _fillColor) {
            this.x = _x;
            this.y = _y;
            this.strokeColor = _strokeColor;
            this.fillColor = _fillColor;
        }
        drawSun() {
            //sun meine Sonne
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.strokeStyle = this.strokeColor;
            CANVAS_5.crc2.fillStyle = this.fillColor;
            CANVAS_5.crc2.lineWidth = 6;
            //Farbverlauf sonne gelb zu orange
            let grad2 = CANVAS_5.crc2.createLinearGradient(110, 300, 93, 80);
            grad2.addColorStop(0, "yellow");
            grad2.addColorStop(1, "orange");
            CANVAS_5.crc2.fillStyle = grad2;
            CANVAS_5.crc2.arc(this.x + 20, this.y, 88, 0, Math.PI * 2, true);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.stroke();
        }
        animatedSun() {
            this.x += Math.random() * (12 - 9);
            if (this.x >= 800) {
                this.x = 0;
            }
        }
    }
    CANVAS_5.Sonne = Sonne;
})(CANVAS_5 || (CANVAS_5 = {}));
//# sourceMappingURL=sun.js.map