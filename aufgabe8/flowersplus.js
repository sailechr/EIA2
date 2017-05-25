var Aufgabe8_Superklasse;
(function (Aufgabe8_Superklasse) {
    class Flowerplus extends Aufgabe8_Superklasse.Blümle {
        constructor(_centerX, _centerY, _color) {
            super(_centerX, _centerY, _color);
            this.setRandomColor();
            this.setRandomPosition();
            this.draw();
            this.numPetals = Math.round(Math.random() * (5 - 3) + 3);
            _color = this.color;
            _centerX = this.centerX;
            _centerY = this.centerY;
            //Anzahl der Blätter werden über den Constructor übergeben
        }
        // Funktion "drawFlowers"
        draw() {
            Aufgabe8_Superklasse.crc2.beginPath();
            // draw Petals of flowers
            for (let n = 0; n < this.numPetals; n++) {
                let theta1 = ((Math.PI * 2) / this.numPetals) * (n + 1);
                let theta2 = ((Math.PI * 2) / this.numPetals) * (n);
                let x1 = (this.radius * Math.sin(theta1)) + this.centerX;
                let y1 = (this.radius * Math.cos(theta1)) + this.centerY;
                let x2 = (this.radius * Math.sin(theta2)) + this.centerX;
                let y2 = (this.radius * Math.cos(theta2)) + this.centerY;
                Aufgabe8_Superklasse.crc2.moveTo(this.centerX, this.centerY);
                Aufgabe8_Superklasse.crc2.bezierCurveTo(x1, y1, x2, y2, this.centerX, this.centerY);
                if (n > 10) {
                    Aufgabe8_Superklasse.blümle.push();
                }
            }
            Aufgabe8_Superklasse.crc2.closePath();
            Aufgabe8_Superklasse.crc2.fillStyle = this.color;
            Aufgabe8_Superklasse.crc2.fill();
            // black point in the middle of the flowers
            Aufgabe8_Superklasse.crc2.beginPath();
            Aufgabe8_Superklasse.crc2.arc(this.centerX, this.centerY, this.radius / 5, 0, 2 * Math.PI, false);
            Aufgabe8_Superklasse.crc2.fillStyle = "black";
            Aufgabe8_Superklasse.crc2.fill();
        }
    }
    Aufgabe8_Superklasse.Flowerplus = Flowerplus;
})(Aufgabe8_Superklasse || (Aufgabe8_Superklasse = {}));
//# sourceMappingURL=flowersplus.js.map