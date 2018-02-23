//Aufgabe abschluss
//Name: Saile Christian
//Matrikel: 254877
//Datum: 22.Feburar 2018 
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.

namespace CANVAS {


    export class Bubblegum extends AnimatedObjects {



        fillColor: string;
        size: number;


        width: number;
        height: number;



        constructor( _x: number, _y: number ) {

            super( _x, _y );
            this.fillColor = "hsl(" + Math.random() * 100 + ", 100%, 60%)";
            this.size = Math.random() * ( 18 + 6.5 );
            this.width = 600;
            this.height = 620;
        }


        draw(): void {
            //bubblegums
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.arc( this.x + 5, this.y + 4, this.size, 0, Math.PI * 2, true );
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.arc( this.x + 5, this.y + 4, this.size, 0, Math.PI * 2, true );
            crc2.closePath();
            crc2.fill();







        }
        gameOver(): void {

            this.y += Math.random() * ( 9.6 - 9 );

            //            if ( this.y >= 651 ) {
            //                this.y = 0;
            //            }
            if ( this.y >= 651 ) {




                crc2.clearRect( 0, 0, 1000, 650 );
                crc2.font = "90px Courier";
                crc2.fillStyle = "red";
                crc2.textAlign = "center";
                crc2.textBaseline = "middle";
                //alert( "Seite neu laden, um weiter zu spielen!" );
                crc2.fillText( "Game Over! ", 1000 / 2, 650 / 2 );

            }

        }
     // Teil der Boundingbox, hier wird die "Box" definiert, in die geklickt werden kann
        hit( x: number, y: number ): boolean {
            //verschieben von der hitbox ins zentrum(entlang einer bestimmten breite)
            let middleXAx: number = this.x - this.width / 2;
            let middleYAx: number = this.y - this.height / 2;
            let hit: boolean = false;
            if ( x <= middleXAx + this.width && x >= middleXAx &&
                y <= middleYAx + this.height && y >= middleYAx ) {
                hit = true;
            }
            return hit;
        }
    }
}