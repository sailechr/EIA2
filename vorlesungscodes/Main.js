var L5_Animation;
(function (L5_Animation) {
    window.addEventListener("load", init);
    let crc2;
    let x = [];
    let y = [];
    let n = 300;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        for (let i = 0; i < n; i++) {
            x[i] = Math.random() * 200;
            y[i] = Math.random() * 200;
        }
        window.setTimeout(animate, 20);
    }
    function animate() {
        console.log("Animate called");
        crc2.fillStyle = "#ff0000";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        for (let i = 0; i < n; i++) {
            x[i] += Math.random() * 4 - 2;
            y[i] += Math.random() * 4 - 2;
            drawObject(x[i], y[i]);
        }
        window.setTimeout(animate, 20);
    }
    function drawObject(_x, _y) {
        crc2.fillStyle = "#000000";
        crc2.fillRect(_x, _y, 10, 10);
    }
})(L5_Animation || (L5_Animation = {}));
//# sourceMappingURL=Main.js.map