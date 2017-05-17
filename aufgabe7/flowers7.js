//immer und überall bei separaten Dateien denselben Namespace verwenden
var Aufgabe7_Bees;
(function (Aufgabe7_Bees) {
    var Flower = (function () {
        function Flower(_centerX, _centerY) {
            this.setRandomColor();
            this.setRandomPosition();
            this.numPetals = Math.round(Math.random() * (5 - 3) + 3);
        }
        // Funktion "drawFlowers"
        Flower.prototype.draw = function () {
            Aufgabe7_Bees.crc2.beginPath();
            // draw Petals of flowers
            for (var n = 0; n < this.numPetals; n++) {
                var theta1 = ((Math.PI * 2) / this.numPetals) * (n + 1);
                var theta2 = ((Math.PI * 2) / this.numPetals) * (n);
                var x1 = (this.radius * Math.sin(theta1)) + this.centerX;
                var y1 = (this.radius * Math.cos(theta1)) + this.centerY;
                var x2 = (this.radius * Math.sin(theta2)) + this.centerX;
                var y2 = (this.radius * Math.cos(theta2)) + this.centerY;
                Aufgabe7_Bees.crc2.moveTo(this.centerX, this.centerY);
                Aufgabe7_Bees.crc2.bezierCurveTo(x1, y1, x2, y2, this.centerX, this.centerY);
            }
            Aufgabe7_Bees.crc2.closePath();
            Aufgabe7_Bees.crc2.fillStyle = this.color;
            Aufgabe7_Bees.crc2.fill();
            // black point in the middle of the flowers
            Aufgabe7_Bees.crc2.beginPath();
            Aufgabe7_Bees.crc2.arc(this.centerX, this.centerY, this.radius / 5, 0, 2 * Math.PI, false);
            Aufgabe7_Bees.crc2.fillStyle = "black";
            Aufgabe7_Bees.crc2.fill();
        };
        Flower.prototype.setRandomColor = function () {
            this.color = Aufgabe7_Bees.colors[Math.round(Math.random() * (Aufgabe7_Bees.colors.length - 1))];
        };
        Flower.prototype.setRandomPosition = function () {
            this.centerX = (Math.random() * (1280 - 307) + 307);
            this.centerY = (Math.random() * (720 - 410) + 410);
            this.radius = (Math.random() * 25) + 25;
        };
        return Flower;
    }());
    Aufgabe7_Bees.Flower = Flower;
})(Aufgabe7_Bees || (Aufgabe7_Bees = {}));
