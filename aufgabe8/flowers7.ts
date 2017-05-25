//immer und überall bei separaten Dateien denselben Namespace verwenden

namespace Aufgabe8_Superklasse {
    export class Blümle {


        centerX: number;
        centerY: number;
        radius: number;
        numPetals: number;
        color: string;

        constructor(_centerX: number, _centerY: number, _color: string) {

            this.setRandomColor();
            this.setRandomPosition();
            this.numPetals = Math.round(Math.random() * (5 - 3) + 3);
            _color = this.color;
            _centerX = this.centerX;
            _centerY = this.centerY;
            //Anzahl der Blätter werden über den Constructor übergeben
        }

          

 setRandomColor(): void {
            //Zugriff auf Arraycolors mit Farben
            this.color = colorarray[Math.round(Math.random() * (colorarray.length - 1))];

        }

        setRandomPosition(): void {
            this.centerX = (Math.random() * (1280 - 307) + 307);
            this.centerY = (Math.random() * (720 - 410) + 410);
            this.radius = (Math.random() * 25) + 25;
        }

    }
}