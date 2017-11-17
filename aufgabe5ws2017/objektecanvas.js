var CANVAS_5;
(function (CANVAS_5) {
    //Klassen zu den Bäumen mit verschiedenen Farben
    class Trees {
        constructor(_x, _y, _strokeColor, _fillColor) {
            this.drawTrees();
            this.x = _x;
            this.y = _y;
            this.strokeColor = _strokeColor;
            this.fillColor = _fillColor;
        }
        drawTrees() {
            //Baumstamm
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "brown ";
            CANVAS_5.crc2.fillRect(this.x + 235, this.y + 308, 10, 20);
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.closePath();
            //leaves of  trees
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = this.fillColor;
            CANVAS_5.crc2.strokeStyle = this.strokeColor;
            CANVAS_5.crc2.lineWidth = 1;
            CANVAS_5.crc2.moveTo(this.x + 166, this.y + 219);
            CANVAS_5.crc2.lineTo(this.x + 136, this.y + 329);
            CANVAS_5.crc2.lineTo(this.x + 195, this.y + 329);
            CANVAS_5.crc2.lineTo(this.x + 166, this.y + 219);
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.stroke();
            CANVAS_5.crc2.closePath();
            //Baumstamm
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "brown ";
            CANVAS_5.crc2.fillRect(this.x + 161, this.y + 329, 10, 20);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.stroke();
            //leaves of trees
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = this.fillColor;
            CANVAS_5.crc2.strokeStyle = this.strokeColor;
            CANVAS_5.crc2.lineWidth = 1;
            CANVAS_5.crc2.moveTo(this.x + 246, this.y + 199);
            CANVAS_5.crc2.lineTo(this.x + 216, this.y + 309);
            CANVAS_5.crc2.lineTo(this.x + 267, this.y + 309);
            CANVAS_5.crc2.lineTo(this.x + 247, this.y + 199);
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.stroke();
            CANVAS_5.crc2.closePath();
            //baumstamm
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "brown ";
            CANVAS_5.crc2.fillRect(this.x + 306, this.y + 339, 10, 20);
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.closePath();
            //leaves of trees
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = this.fillColor;
            CANVAS_5.crc2.strokeStyle = this.strokeColor;
            CANVAS_5.crc2.lineWidth = 1;
            CANVAS_5.crc2.moveTo(this.x + 318.2, this.y + 219);
            CANVAS_5.crc2.lineTo(this.x + 282, this.y + 339);
            CANVAS_5.crc2.lineTo(this.x + 334, this.y + 339);
            CANVAS_5.crc2.lineTo(this.x + 319, this.y + 219);
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.stroke();
            CANVAS_5.crc2.closePath();
        }
    }
    CANVAS_5.Trees = Trees;
    class Trees1 {
        constructor(_x, _y, _strokeColor, _fillColor) {
            this.drawTrees();
            this.x = _x;
            this.y = _y;
            this.strokeColor = _strokeColor;
            this.fillColor = _fillColor;
        }
        drawTrees() {
            //Baumstamm
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "brown ";
            CANVAS_5.crc2.fillRect(this.x + 235, this.y + 308, 10, 20);
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.closePath();
            //leaves of  trees
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = this.fillColor;
            CANVAS_5.crc2.strokeStyle = this.strokeColor;
            CANVAS_5.crc2.lineWidth = 1;
            CANVAS_5.crc2.moveTo(this.x + 166, this.y + 219);
            CANVAS_5.crc2.lineTo(this.x + 136, this.y + 329);
            CANVAS_5.crc2.lineTo(this.x + 195, this.y + 329);
            CANVAS_5.crc2.lineTo(this.x + 166, this.y + 219);
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.stroke();
            CANVAS_5.crc2.closePath();
            //Baumstamm
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "brown ";
            CANVAS_5.crc2.fillRect(this.x + 161, this.y + 329, 10, 20);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.stroke();
            //leaves of trees
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = this.fillColor;
            CANVAS_5.crc2.strokeStyle = this.strokeColor;
            CANVAS_5.crc2.lineWidth = 1;
            CANVAS_5.crc2.moveTo(this.x + 246, this.y + 199);
            CANVAS_5.crc2.lineTo(this.x + 216, this.y + 309);
            CANVAS_5.crc2.lineTo(this.x + 267, this.y + 309);
            CANVAS_5.crc2.lineTo(this.x + 247, this.y + 199);
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.stroke();
            CANVAS_5.crc2.closePath();
            //baumstamm
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "brown ";
            CANVAS_5.crc2.fillRect(this.x + 306, this.y + 339, 10, 20);
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.closePath();
            //leaves of trees
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = this.fillColor;
            CANVAS_5.crc2.strokeStyle = this.strokeColor;
            CANVAS_5.crc2.lineWidth = 1;
            CANVAS_5.crc2.moveTo(this.x + 318.2, this.y + 219);
            CANVAS_5.crc2.lineTo(this.x + 282, this.y + 339);
            CANVAS_5.crc2.lineTo(this.x + 334, this.y + 339);
            CANVAS_5.crc2.lineTo(this.x + 319, this.y + 219);
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.stroke();
            CANVAS_5.crc2.closePath();
        }
    }
    CANVAS_5.Trees1 = Trees1;
    class Trees2 {
        constructor(_x, _y, _strokeColor, _fillColor) {
            this.drawTrees();
            this.x = _x;
            this.y = _y;
            this.strokeColor = _strokeColor;
            this.fillColor = _fillColor;
        }
        drawTrees() {
            //Baumstamm
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "brown ";
            CANVAS_5.crc2.fillRect(this.x + 235, this.y + 308, 10, 20);
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.closePath();
            //leaves of  trees
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = this.fillColor;
            CANVAS_5.crc2.strokeStyle = this.strokeColor;
            CANVAS_5.crc2.lineWidth = 1;
            CANVAS_5.crc2.moveTo(this.x + 166, this.y + 219);
            CANVAS_5.crc2.lineTo(this.x + 136, this.y + 329);
            CANVAS_5.crc2.lineTo(this.x + 195, this.y + 329);
            CANVAS_5.crc2.lineTo(this.x + 166, this.y + 219);
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.stroke();
            CANVAS_5.crc2.closePath();
            //Baumstamm
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "brown ";
            CANVAS_5.crc2.fillRect(this.x + 161, this.y + 329, 10, 20);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.stroke();
            //leaves of trees
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = this.fillColor;
            CANVAS_5.crc2.strokeStyle = this.strokeColor;
            CANVAS_5.crc2.lineWidth = 1;
            CANVAS_5.crc2.moveTo(this.x + 246, this.y + 199);
            CANVAS_5.crc2.lineTo(this.x + 216, this.y + 309);
            CANVAS_5.crc2.lineTo(this.x + 267, this.y + 309);
            CANVAS_5.crc2.lineTo(this.x + 247, this.y + 199);
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.stroke();
            CANVAS_5.crc2.closePath();
            //baumstamm
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "brown ";
            CANVAS_5.crc2.fillRect(this.x + 306, this.y + 339, 10, 20);
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.closePath();
            //leaves of trees
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = this.fillColor;
            CANVAS_5.crc2.strokeStyle = this.strokeColor;
            CANVAS_5.crc2.lineWidth = 1;
            CANVAS_5.crc2.moveTo(this.x + 318.2, this.y + 219);
            CANVAS_5.crc2.lineTo(this.x + 282, this.y + 339);
            CANVAS_5.crc2.lineTo(this.x + 334, this.y + 339);
            CANVAS_5.crc2.lineTo(this.x + 319, this.y + 219);
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.stroke();
            CANVAS_5.crc2.closePath();
        }
    }
    CANVAS_5.Trees2 = Trees2;
    class Mountains {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        drawMountains() {
            //draw mountains
            //quadratische Kurve = quadratic Curve(Bogen für Hügel/Berge/auch Bezierkurve)
            //besteht aus 2 Punkten
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.stroke();
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.lineWidth = 6;
            CANVAS_5.crc2.strokeStyle = "black";
            //Farbverlauf von schneebedeckten Gipfel zu Fels
            let grad = CANVAS_5.crc2.createLinearGradient(80, 230, 96, 80);
            grad.addColorStop(0, "grey");
            grad.addColorStop(1, "whitesmoke");
            CANVAS_5.crc2.fillStyle = grad;
            CANVAS_5.crc2.moveTo(this.x + 578, this.y + 400);
            CANVAS_5.crc2.quadraticCurveTo(this.x + 890, this.y - 150, 1050, 400);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.stroke();
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.stroke();
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.lineWidth = 6;
            CANVAS_5.crc2.strokeStyle = "black"; // line color
            CANVAS_5.crc2.fillStyle = grad;
            CANVAS_5.crc2.moveTo(this.x + 778, this.y + 400);
            CANVAS_5.crc2.quadraticCurveTo(this.x + 1300, this.y - 150, 1400, 400);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.stroke();
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.stroke();
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.lineWidth = 6;
            CANVAS_5.crc2.strokeStyle = "black"; // line color
            CANVAS_5.crc2.moveTo(this.x + 328, this.y + 400);
            CANVAS_5.crc2.quadraticCurveTo(this.x + 600, this.y - 150, 900, 400);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.stroke();
            CANVAS_5.crc2.fill();
        }
    }
    CANVAS_5.Mountains = Mountains;
    class OrdinarySkier {
        constructor(_x, _y, _fillColor, _strokeColor) {
            this.x = _x;
            this.y = _y;
            this.strokeColor = _strokeColor;
            this.fillColor = _fillColor;
        }
        drawoneSkier() {
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = this.fillColor;
            CANVAS_5.crc2.arc(this.x + 200, this.y + 109, 20, 0, Math.PI * 2, true);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = this.fillColor;
            CANVAS_5.crc2.arc(this.x + 200, this.y + 79, 15, 0, Math.PI * 2, true);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            //knöpfe aus kleinen kreisen
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "black ";
            CANVAS_5.crc2.arc(this.x + 200, this.y + 98, 2.5, 0, Math.PI * 2, true);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "black ";
            CANVAS_5.crc2.arc(this.x + 200, this.y + 108, 2.5, 0, Math.PI * 2, true);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "black ";
            CANVAS_5.crc2.arc(this.x + 200, this.y + 118, 2.5, 0, Math.PI * 2, true);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            //eyes
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "black ";
            CANVAS_5.crc2.arc(this.x + 195, this.y + 76, 1.5, 0, Math.PI * 2, true);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "black ";
            CANVAS_5.crc2.arc(this.x + 206, this.y + 76, 1.5, 0, Math.PI * 2, true);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            //arms
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.strokeStyle = this.strokeColor;
            CANVAS_5.crc2.moveTo(this.x + 190, this.y + 89);
            CANVAS_5.crc2.lineTo(this.x + 150, this.y + 96);
            CANVAS_5.crc2.lineWidth = 1;
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.stroke();
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.strokeStyle = this.strokeColor;
            CANVAS_5.crc2.moveTo(this.x + 208.98, this.y + 89);
            CANVAS_5.crc2.lineTo(this.x + 239, this.y + 106);
            CANVAS_5.crc2.lineWidth = 1;
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.stroke();
            //head
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "black ";
            CANVAS_5.crc2.fillRect(this.x + 182, this.y + 56, 35, 12);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "black ";
            CANVAS_5.crc2.fillRect(this.x + 192, this.y + 42, 14, 23);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            //scarf
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "red";
            CANVAS_5.crc2.fillRect(this.x + 187, this.y + 88, 25, 4.2);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "red ";
            CANVAS_5.crc2.arc(this.x + 193, this.y + 91, 3.5, 0, Math.PI * 2, true);
            CANVAS_5.crc2.arc(this.x + 193, this.y + 95, 3.5, 0, Math.PI * 2, true);
            CANVAS_5.crc2.arc(this.x + 193, this.y + 99, 3.5, 0, Math.PI * 2, true);
            CANVAS_5.crc2.arc(this.x + 197, this.y + 103, 3.5, 0, Math.PI * 2, true);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
            //mouth
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.strokeStyle = this.strokeColor;
            CANVAS_5.crc2.fillStyle = "black";
            CANVAS_5.crc2.arc(this.x + 200, this.y + 88, 3, 0, Math.PI * 1, true);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.stroke();
            CANVAS_5.crc2.fill();
            //nose
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "orange ";
            CANVAS_5.crc2.arc(this.x + 200, this.y + 80, 3.5, 0, Math.PI * 2, true);
            CANVAS_5.crc2.fill();
            CANVAS_5.crc2.closePath();
            //ski
            CANVAS_5.crc2.beginPath();
            CANVAS_5.crc2.fillStyle = "red";
            CANVAS_5.crc2.fillRect(this.x + 156, this.y + 128, 87, 4);
            CANVAS_5.crc2.closePath();
            CANVAS_5.crc2.fill();
        }
    }
    CANVAS_5.OrdinarySkier = OrdinarySkier;
})(CANVAS_5 || (CANVAS_5 = {}));
//# sourceMappingURL=objektecanvas.js.map