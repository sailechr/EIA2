//Aufgabe 6 canvas
//Name: Saile Christian
//Matrikel: 254877
//Datum: 25.November 2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.





namespace CANVAS6 {
    //superklasse
    //die subklassen werden durch das schlüsselwort extends erweitert
    //eine Subklasse erweiter eine Superklasse um zusätzliche Informationen
    //die subklassen erben alle enthaltenen Informationen aus der Superklasse und umgekehrt
    export class AnimatedObjects {
        x: number;
        y: number;
        color: string;
        fillColor: string;
        strokeColor: string;

        constructor(_x: number, _y: number) {
            console.log("Hallo");
            this.x = _x;
            this.y = _y;




        }
        

        draw(): void {
            // abstract


        }

        move(): void {
            //abstract




        }



    }
}
