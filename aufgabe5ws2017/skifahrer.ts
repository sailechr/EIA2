 namespace CANVAS_5 {


export class SkiersInfo {
        positionX: number;
        positionY: number;
        bodyColor: string;
        size: number;
        movetotheRight: number;

        constructor(_x: number, _y: number, _color: string, _size: number, _moveright: number) {
            this.positionX = _x;
            this.positionY = _y;
            this.bodyColor = _color;
            this.size = _size;
            this.movetotheRight = _moveright;


        }

//        setPositionanColor(): void {
//            this.positionX = Math.random() * 950 - 20;
//            this.positionY = canvas.height;
//            this.bodyColor = "hsl(" + Math.random() * 300 + ", 100%, 60%)";
//            this.size = Math.random() * 18 + 6.5;
//            this.movetotheRight = Math.random() * 14 - 3;
//
//       }
        moveSkiers(): void {





            this.positionX += Math.random() * 5 + this.movetotheRight;
            //s.movetotheRight= leichte Bewegung nach rechts (siehe Interface)
            this.positionY += Math.random() * 24;
            // Bewegungsmuster, das dafür sorgt, dass die Skifahrer von oben nach unten durch das canvas verlaufen
            if (this.positionX >= 602) {
                this.positionX = 244;
            }
            if (this.positionY >= 601) {
                this.positionY = 179;
            }
            
            
            
        }

        drawSkiers(): void {
            //Erklärung sieh animatefunktion
            crc2.beginPath();
            crc2.fillStyle = this.bodyColor;
            crc2.arc(this.positionX + 200, this.positionY + 109, this.size, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = this.bodyColor;
            crc2.arc(this.positionX + 200, this.positionY + 79, this.size, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            //knöpfe aus kleinen kreisen
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.positionX + 200, this.positionY + 98, 2.5, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.positionX + 200, this.positionY + 108, 2.5, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.positionX + 200, this.positionY + 118, 2.5, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            //eyes
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.positionX + 195, this.positionY + 76, 1.5, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.positionX + 206, this.positionY + 76, 1.5, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            //arms
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.moveTo(this.positionX + 190, this.positionY + 89);
            crc2.lineTo(this.positionX + 150, this.positionY + 96);
            crc2.lineWidth = 1;
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.moveTo(this.positionX + 208.98, this.positionY + 89);
            crc2.lineTo(this.positionX + 239, this.positionY + 106);
            crc2.lineWidth = 1;
            crc2.closePath();
            crc2.stroke();
            //head
            crc2.beginPath();
            crc2.fillStyle = "black ";
            crc2.fillRect(this.positionX + 182, this.positionY + 56, 35, 12);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "black ";
            crc2.fillRect(this.positionX + 192, this.positionY + 42, 14, 23);
            crc2.closePath();
            crc2.fill();
            //scarf
            crc2.beginPath();
            crc2.fillStyle = "red";
            crc2.fillRect(this.positionX + 187, this.positionY + 88, 25, 4.2);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "red ";
            crc2.arc(this.positionX + 193, this.positionY + 91, 3.5, 0, Math.PI * 2, true);
            crc2.arc(this.positionX + 193, this.positionY + 95, 3.5, 0, Math.PI * 2, true);
            crc2.arc(this.positionX + 193, this.positionY + 99, 3.5, 0, Math.PI * 2, true);
            crc2.arc(this.positionX + 197, this.positionY + 103, 3.5, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            //mouth
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = "black";
            crc2.arc(this.positionX + 200, this.positionY + 88, 3, 0, Math.PI * 1, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            //nose
            crc2.beginPath();
            crc2.fillStyle = "orange ";
            crc2.arc(this.positionX + 200, this.positionY + 80, 3.5, 0, Math.PI * 2, true);
            crc2.fill();
            crc2.closePath();
            //ski
            crc2.beginPath();
            crc2.fillStyle = "red";
            crc2.fillRect(this.positionX + 156, this.positionY + 128, this.size + 78, this.size - 23);

            crc2.closePath();
            crc2.fill();




        }

    }
     }