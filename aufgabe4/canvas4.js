window.onload = init;
let canvas;
let context;
function init() {
    canvas = document.getElementsByTagName("canvas")[0];
    context = canvas.getContext("2d");
    // define Flower constructor
    function Flower(context, centerX, centerY, radius, numPetals, color) {
        this.context = context;
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
        this.numPetals = numPetals;
        this.color = color;
    }
    // Define Flower draw method
    Flower.prototype.draw = function () {
        let context = this.context;
        context.beginPath();
        // draw petals
        for (let n = 0; n < this.numPetals; n++) {
            let theta1 = ((Math.PI * 2) / this.numPetals) * (n + 1);
            let theta2 = ((Math.PI * 2) / this.numPetals) * (n);
            let x1 = (this.radius * Math.sin(theta1)) + this.centerX;
            let y1 = (this.radius * Math.cos(theta1)) + this.centerY;
            let x2 = (this.radius * Math.sin(theta2)) + this.centerX;
            let y2 = (this.radius * Math.cos(theta2)) + this.centerY;
            context.moveTo(this.centerX, this.centerY);
            context.bezierCurveTo(100, 150, 100, 150, this.centerX, this.centerY);
        }
        context.closePath();
        context.fillStyle = this.color;
        context.fill();
        // draw yellow center
        context.beginPath();
        context.arc(this.centerX, this.centerY, this.radius / 5, 0, 2 * Math.PI, false);
        context.fillStyle = "yellow";
        context.fill();
    };
    // create a green gradation for background
    context.beginPath();
    context.rect(0, 0, canvas.width, canvas.height);
    let grd = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    grd.addColorStop(0, "#1EDE70"); // light green
    grd.addColorStop(1, "#00A747"); // dark green
    context.fillStyle = grd;
    context.fill();
    // define an array of colors
    let colorArray = [];
    colorArray.push("red"); // 0
    colorArray.push("orange"); // 1
    colorArray.push("blue"); // 2
    colorArray.push("purple"); // 3
    // define number of flowers
    let numFlowers = 50;
    // draw randomly placed flowers
    for (let n = 0; n < numFlowers; n++) {
        let centerX = Math.random() * canvas.width;
        let centerY = Math.random() * canvas.height;
        let radius = (Math.random() * 25) + 25;
        let colorIndex = Math.round(Math.random() * (colorArray.length - 1));
        let thisFlower = Flower;
        thisFlower(context, centerX, centerY, radius, 5, colorArray[colorIndex]);
        thisFlower.draw();
    }
}
;
//# sourceMappingURL=canvas4.js.map