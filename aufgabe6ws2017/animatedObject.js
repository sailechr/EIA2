//Aufgabe 6 canvas
//Name: Saile Christian
//Matrikel: 254877
//Datum: 25.November 2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var CANVAS6;
(function (CANVAS6) {
    //superklasse
    //die subklassen werden durch das schlüsselwort extends erweitert
    //eine Subklasse erweiter eine Superklasse um zusätzliche Informationen
    //die subklassen erben alle enthaltenen Informationen aus der Superklasse und umgekehrt
    class AnimatedObjects {
        constructor(_x, _y) {
            console.log("Hallo");
            this.x = _x;
            this.y = _y;
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