
//Aufgabe abschluss
//Name: Saile Christian
//Matrikel: 254877
//Datum: 22.Feburar 2018 
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.







namespace CANVAS {

    export class Icecream extends AnimatedObjects{


        
        strokeColor: string;
        fillColor: string;
       

        
        width: number;
        height: number;



        constructor( _x: number, _y: number, _Stielcolor: string ) {
            super( _x, _y );
            this.strokeColor = "orange";
            this.fillColor = "#FFFF00";
            this.color = _Stielcolor;
            this.width = 600;
            this.height = 620;

        }
        draw(): void {
            //sun meine Sonne

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.fillRect( this.x - 2.5, this.y + 9, 23, 5 );
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.strokeStyle = this.strokeColor;
            crc2.fillStyle = this.fillColor;
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.fillRect( this.x + 2.5, this.y + 4, 12, 25 );
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.strokeStyle = this.strokeColor;
            crc2.fillStyle = this.fillColor;
            crc2.lineWidth = 2;



            crc2.arc( this.x + 2.8, this.y + 2, 7.4, 0, Math.PI * 2, true );
            crc2.closePath();
            crc2.fill();
            crc2.stroke();


            crc2.beginPath();
            crc2.strokeStyle = this.strokeColor;
            crc2.fillStyle = this.fillColor;
            crc2.lineWidth = 2;
            crc2.arc( this.x + 13.8, this.y + 2, 7.4, 0, Math.PI * 2, true );
            crc2.closePath();
            crc2.fill();
            crc2.stroke();


            crc2.beginPath();
            crc2.strokeStyle = this.strokeColor;
            crc2.fillStyle = this.fillColor;
            crc2.lineWidth = 2;
            crc2.arc( this.x + 8, this.y - 7, 7.4, 0, Math.PI * 2, true );
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        gameOver(): void {

            this.y += Math.random() * ( 11.5 - 9 );

            //            if ( this.y >= 651 ) {
            //                this.y = 0;
            //            }
            if ( this.y >= 651 ) {




                crc2.clearRect( 0, 0, 1000, 650 );
                crc2.font = "90px Courier";
                crc2.fillStyle = "red";
                crc2.textAlign = "center";
                crc2.textBaseline = "middle";
                //alert("Seite neu laden, um weiter zu spielen!");
                crc2.fillText( "Game Over! "  , 1000 / 2, 650 / 2 );
                
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