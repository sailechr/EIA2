//Aufgabe abschluss
//Name: Saile Christian
//Matrikel: 254877
//Datum: 22.Feburar 2018 
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var CANVAS;
(function (CANVAS) {
    //superklasse
    //die subklassen werden durch das schlüsselwort extends erweitert
    //eine Subklasse erweiter eine Superklasse um zusätzliche Informationen
    //die subklassen erben alle enthaltenen Informationen aus der Superklasse und umgekehrt
    class AnimatedObjects {
        constructor(_x, _y) {
            console.log("Hallo");
            this.x = _x;
            this.y = _y;
            this.width = 600;
            this.height = 620;
        }
        draw() {
            // abstract
        }
        gameOver() {
            //abstract
        }
        // Teil der Boundingbox, hier wird die "Box" definiert, in die geklickt werden kann
        hit(x, y) {
            //verschieben von der hitbox ins zentrum(entlang einer bestimmten breite)
            let middleXAx = this.x - this.width / 2;
            let middleYAx = this.y - this.height / 2;
            let hit = false;
            if (x <= middleXAx + this.width && x >= middleXAx &&
                y <= middleYAx + this.height && y >= middleYAx) {
                hit = true;
            }
            return hit;
        }
    }
    CANVAS.AnimatedObjects = AnimatedObjects;
})(CANVAS || (CANVAS = {}));
//# sourceMappingURL=animatedObjects.js.map