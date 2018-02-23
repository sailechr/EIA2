
//Aufgabe abschluss
//Name: Saile Christian
//Matrikel: 254877
//Datum: 22.Feburar 2018 
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.







namespace CANVAS {

    export class Fruits extends AnimatedObjects{


       
        strokeColor: string;
     




        width: number;
        height: number;


        constructor( _x: number, _y: number, _color: string ) {
            super( _x, _y );
            this.strokeColor = "black";
            this.color = _color;

            this.width = 600;
            this.height = 620;

        }
        draw(): void {
            crc2.beginPath();
            crc2.fillRect( this.x + 174, this.y - 16, 5, 6 );
            crc2.fillStyle = this.color;
            crc2.strokeStyle = this.strokeColor;
            crc2.lineWidth = 1;
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            
            crc2.beginPath();
            crc2.strokeStyle = this.strokeColor;
            crc2.lineWidth = 1;
            crc2.fillStyle = "OrangeRed";
            crc2.arc( this.x + 180, this.y + 2, 15, 0, Math.PI * 2, true );
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            
           
            crc2.beginPath();
            crc2.fillRect( this.x + 116, this.y - 6.5, 5, 6 );
            crc2.fillStyle = "green";
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            
            crc2.beginPath();
            crc2.strokeStyle = this.strokeColor;
            crc2.lineWidth = 1;
            crc2.fillStyle = "orange";
            crc2.arc( this.x + 120, this.y + 12, 15, 0, Math.PI * 2, true );
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            
            crc2.beginPath();
            crc2.fillRect( this.x + 29, this.y - 16, 5, 13 );
            crc2.fillStyle = this.color;
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            
            crc2.beginPath();
            crc2.strokeStyle = this.strokeColor;
            crc2.lineWidth = 1;
            crc2.fillStyle = "green";
            crc2.arc( this.x + 14, this.y + 8, 11, 0, Math.PI * 2, true );
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
           
            crc2.beginPath();
            crc2.strokeStyle = this.strokeColor;
            crc2.fillStyle = "green";
            crc2.lineWidth = 1;
            crc2.arc( this.x + 34, this.y + 8, 11, 0, Math.PI * 2, true );
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            
            crc2.beginPath();
            crc2.strokeStyle = this.strokeColor;
            crc2.fillStyle = "green";
            crc2.lineWidth = 1;
            crc2.arc( this.x + 54, this.y + 8, 11, 0, Math.PI * 2, true );
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
           
            crc2.beginPath();
            crc2.strokeStyle = this.strokeColor;
            crc2.fillStyle = "green";
            crc2.lineWidth = 1;
            crc2.arc( this.x + 23, this.y + 25, 11, 0, Math.PI * 2, true );
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        
            crc2.beginPath();
            crc2.strokeStyle = this.strokeColor;
            crc2.fillStyle = "green";
            crc2.lineWidth = 1;
            crc2.arc( this.x + 43, this.y + 25, 11, 0, Math.PI * 2, true );
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            
            crc2.beginPath();
            crc2.strokeStyle = this.strokeColor;
            crc2.fillStyle = "green";
            crc2.lineWidth = 1;
            crc2.arc( this.x + 34, this.y + 42, 11, 0, Math.PI * 2, true );
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            
        }
        gameOver(): void {

            this.y += Math.random() * ( 12 - 9 );

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