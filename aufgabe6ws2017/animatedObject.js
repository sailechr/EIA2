var CANVAS_6;
(function (CANVAS_6) {
    class AnimatedObjects {
        constructor(_x, _y) {
            console.log("Hallo");
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.draw();
            this.moveanimatedObject();
        }
        draw() {
            // abstract
        }
        moveanimatedObject() {
            //abstract
        }
    }
    CANVAS_6.AnimatedObjects = AnimatedObjects;
})(CANVAS_6 || (CANVAS_6 = {}));
//# sourceMappingURL=animatedObject.js.map