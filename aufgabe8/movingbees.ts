namespace Aufgabe8_Superklasse {

    export class Movingbees extends OrdinaryBees {

        targetx: number;
        targety: number;
        X: number;
        y: number;
        speed: number;
        target: Position;
        constructor(_x: number, _y: number, _targetx: number, _targety: number) {

            super(_x, _y);
            this.speed = 2;
            this.setRandomTargetPosition();
            //this.getFlowerPosition();
            this.target = {
                x: _targetx,
                y: _targety
            };

        }


        setRandomTargetPosition(): void {
            this.targetx = Math.random() * crc2.canvas.width;
            this.targety = Math.random() * crc2.canvas.height;

        }
        getFlowerPosition(): void {

            let n: number = Math.round(Math.random() * (blümle.length - 1));
            this.targetx = blümle[n].centerX;
            this.targety = blümle[n].centerY;

        }
        move(): void {
            this.x += Math.random() * 14 - 3;
            this.y += Math.random() * 14 - 3;
            let dx: number = this.targetx - this.x;
            let dy: number = this.targety - this.y;
            let d: number = Math.sqrt(Math.pow(dx, 4) + Math.pow(dy, 4));
            if (d >= 970) {
                this.x += signum(dx);
                this.y += signum(dy);
            }
            else {//seachnewTarget;
            }
            let xDiff: number = this.targetx - this.x;
            let yDiff: number = this.targety - this.y;
            if (Math.abs(xDiff) < 0.6 && Math.abs(yDiff) < 0.6) {
                this.setRandomTargetPosition();
                this.getFlowerPosition();
            }
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }

            this.rotation++;
            if (this.rotation >= 2700) {
                this.rotation = 0;
            }



        }





    }
}  