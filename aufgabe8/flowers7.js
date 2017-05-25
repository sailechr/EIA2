//immer und überall bei separaten Dateien denselben Namespace verwenden
var Aufgabe8_Superklasse;
(function (Aufgabe8_Superklasse) {
    class Blümle {
        constructor(_centerX, _centerY, _color) {
            this.setRandomColor();
            this.setRandomPosition();
            this.numPetals = Math.round(Math.random() * (5 - 3) + 3);
            _color = this.color;
            _centerX = this.centerX;
            _centerY = this.centerY;
            //Anzahl der Blätter werden über den Constructor übergeben
        }
        setRandomColor() {
            //Zugriff auf Arraycolors mit Farben
            this.color = Aufgabe8_Superklasse.colorarray[Math.round(Math.random() * (Aufgabe8_Superklasse.colorarray.length - 1))];
        }
        setRandomPosition() {
            this.centerX = (Math.random() * (1280 - 307) + 307);
            this.centerY = (Math.random() * (720 - 410) + 410);
            this.radius = (Math.random() * 25) + 25;
        }
    }
    Aufgabe8_Superklasse.Blümle = Blümle;
})(Aufgabe8_Superklasse || (Aufgabe8_Superklasse = {}));
//# sourceMappingURL=flowers7.js.map