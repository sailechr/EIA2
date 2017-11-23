namespace CANVAS_6 {


    export class SkiersInfo extends AnimatedObjects {



        constructor(_x: number, _y: number) {
            super(_x, _y);
            




        }
        update(): void {
            this.draw();
            this.moveanimatedObject();
        }


        moveanimatedObject(): void {





            this.x += - 5 + (Math.random() * 14 - 3);
            //s.movetotheRight= leichte Bewegung nach rechts (siehe Interface)
            this.y += Math.random() * 22;
            // Bewegungsmuster, das dafür sorgt, dass die Skifahrer von oben nach unten durch das canvas verlaufen
            if (this.x <= 0) {
                this.x = 364;
            }
            if (this.x >= 801) {
                this.x = 364;
            }
            if (this.y >= 601) {
                this.y = 179;
            }



        }

        draw(): void {
            //Erklärung sieh animatefunktion
            crc2.beginPath();
            crc2.fillStyle = "hsl(" + Math.random() * 300 + ", 100%, 60%)";
            crc2.arc(this.x + 200, this.y + 109, Math.random() * 18 + 6.5, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "hsl(" + Math.random() * 300 + ", 100%, 60%)";
            crc2.arc(this.x + 200, this.y + 79, Math.random() * 18 + 6.5, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            //knöpfe aus kleinen kreisen
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.x + 200, this.y + 98, 2.5, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.x + 200, this.y + 108, 2.5, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.x + 200, this.y + 118, 2.5, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            //eyes
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.x + 195, this.y + 76, 1.5, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.x + 206, this.y + 76, 1.5, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            //arms
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x + 190, this.y + 89);
            crc2.lineTo(this.x + 150, this.y + 96);
            crc2.lineWidth = 1;
            crc2.closePath();
            crc2.stroke();
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x + 208.98, this.y + 89);
            crc2.lineTo(this.x + 239, this.y + 106);
            crc2.lineWidth = 1;
            crc2.closePath();
            crc2.stroke();
            //head
            crc2.beginPath();
            crc2.fillStyle = "black ";
            crc2.fillRect(this.x + 182, this.y + 56, 35, 12);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "black ";
            crc2.fillRect(this.x + 192, this.y + 42, 14, 23);
            crc2.closePath();
            crc2.fill();
            //scarf
            crc2.beginPath();
            crc2.fillStyle = "red";
            crc2.fillRect(this.x + 187, this.y + 88, 25, 4.2);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "red ";
            crc2.arc(this.x + 193, this.y + 91, 3.5, 0, Math.PI * 2, true);
            crc2.arc(this.x + 193, this.y + 95, 3.5, 0, Math.PI * 2, true);
            crc2.arc(this.x + 193, this.y + 99, 3.5, 0, Math.PI * 2, true);
            crc2.arc(this.x + 197, this.y + 103, 3.5, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fill();
            //mouth
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = "black";
            crc2.arc(this.x + 200, this.y + 88, 3, 0, Math.PI * 1, true);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            //nose
            crc2.beginPath();
            crc2.fillStyle = "orange ";
            crc2.arc(this.x + 200, this.y + 80, 3.5, 0, Math.PI * 2, true);
            crc2.fill();
            crc2.closePath();
            //ski
            crc2.beginPath();
            crc2.fillStyle = "red";
            crc2.fillRect(this.x + 156, this.y + 128, Math.random() * 18 + 6.5 + 78, Math.random() * 18 + 6.5 - 23);

            crc2.closePath();
            crc2.fill();




        }

    }
}