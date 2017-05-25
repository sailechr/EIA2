var Aufgabe8_Superklasse;
(function (Aufgabe8_Superklasse) {
    class Movingbees extends Aufgabe8_Superklasse.OrdinaryBees {
        constructor(_x, _y, _targetx, _targety) {
            super(_x, _y);
            this.speed = 2;
            this.setRandomTargetPosition();
            //this.getFlowerPosition();
            this.target = {
                x: _targetx,
                y: _targety
            };
        }
        setRandomTargetPosition() {
            this.targetx = Math.random() * Aufgabe8_Superklasse.crc2.canvas.width;
            this.targety = Math.random() * Aufgabe8_Superklasse.crc2.canvas.height;
        }
        getFlowerPosition() {
            let n = Math.round(Math.random() * (Aufgabe8_Superklasse.blümle.length - 1));
            this.targetx = Aufgabe8_Superklasse.blümle[n].centerX;
            this.targety = Aufgabe8_Superklasse.blümle[n].centerY;
        }
        move() {
            this.x += Math.random() * 14 - 3;
            this.y += Math.random() * 14 - 3;
            let dx = this.targetx - this.x;
            let dy = this.targety - this.y;
            let d = Math.sqrt(Math.pow(dx, 4) + Math.pow(dy, 4));
            if (d >= 970) {
                this.x += Aufgabe8_Superklasse.signum(dx);
                this.y += Aufgabe8_Superklasse.signum(dy);
            }
            else {
            }
            let xDiff = this.targetx - this.x;
            let yDiff = this.targety - this.y;
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
    Aufgabe8_Superklasse.Movingbees = Movingbees;
})(Aufgabe8_Superklasse || (Aufgabe8_Superklasse = {}));
//# sourceMappingURL=movingbees.js.map