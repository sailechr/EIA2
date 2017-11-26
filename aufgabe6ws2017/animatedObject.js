var CANVAS6;
(function (CANVAS6) {
    class AnimatedObjects {
        constructor(_x, _y) {
            console.log("Hallo");
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.draw();
            this.move();
        }
        draw() {
            // abstract
        }
        move() {
            //abstract
        }
    }
    CANVAS6.AnimatedObjects = AnimatedObjects;
})(CANVAS6 || (CANVAS6 = {}));
//# sourceMappingURL=animatedObject.js.map