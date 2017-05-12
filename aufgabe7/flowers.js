var Aufgabe7_Bees;
(function (Aufgabe7_Bees) {
    class Flowers {
        constructor(colorArray) {
            // define an array of different colors
            colorArray.push("red"); // 0
            colorArray.push("orange"); // 1
            colorArray.push("blue"); // 2
            colorArray.push("darkorchid"); //3
            colorArray.push("goldenrod"); //4
            colorArray.push("tomato"); // 5
            console.log(colorArray);
        }
        // Funktion "drawFlowers"
        drawFlowers() {
            context.beginPath();
            // draw Petals of flowers
            for (let n = 0; n < this.numPetals; n++) {
                let theta1 = ((Math.PI * 2) / this.numPetals) * (n + 1);
                let theta2 = ((Math.PI * 2) / this.numPetals) * (n);
                var x1 = (this.radius * Math.sin(theta1)) + this.centerX;
                var y1 = (this.radius * Math.cos(theta1)) + this.centerY;
                var x2 = (this.radius * Math.sin(theta2)) + this.centerX;
                var y2 = (this.radius * Math.cos(theta2)) + this.centerY;
                context.moveTo(this.centerX, this.centerY);
                context.bezierCurveTo(x1, y1, x2, y2, this.centerX, this.centerY);
            }
            context.closePath();
            context.fillStyle = this.color;
            context.fill();
            // black point in the middle of the flowers
            context.beginPath();
            context.arc(this.centerX, this.centerY, this.radius / 5, 0, 2 * Math.PI, false);
            context.fillStyle = "black";
            context.fill();
        }
    }
    Aufgabe7_Bees.Flowers = Flowers;
})(Aufgabe7_Bees || (Aufgabe7_Bees = {}));
//# sourceMappingURL=flowers.js.map