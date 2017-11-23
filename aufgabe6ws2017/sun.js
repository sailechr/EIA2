var CANVAS_6;
(function (CANVAS_6) {
    class Sonne extends CANVAS_6.AnimatedObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        update() {
            this.draw();
            this.moveanimatedObject();
        }
        draw() {
            //sun meine Sonne
            CANVAS_6.crc2.beginPath();
            CANVAS_6.crc2.strokeStyle = "orange";
            CANVAS_6.crc2.fillStyle = "#FFFF00";
            CANVAS_6.crc2.lineWidth = 6;
            //Farbverlauf sonne gelb zu orange
            let grad2 = CANVAS_6.crc2.createLinearGradient(110, 300, 93, 80);
            grad2.addColorStop(0, "yellow");
            grad2.addColorStop(1, "orange");
            CANVAS_6.crc2.fillStyle = grad2;
            CANVAS_6.crc2.arc(this.x + 20, this.y, 88, 0, Math.PI * 2, true);
            CANVAS_6.crc2.closePath();
            CANVAS_6.crc2.fill();
            CANVAS_6.crc2.stroke();
        }
        moveanimatedObject() {
            this.x += Math.random() * (12 - 9);
            if (this.x >= 800) {
                this.x = 0;
            }
        }
    }
    CANVAS_6.Sonne = Sonne;
})(CANVAS_6 || (CANVAS_6 = {}));
//# sourceMappingURL=sun.js.map