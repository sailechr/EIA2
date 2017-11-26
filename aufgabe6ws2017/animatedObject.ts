namespace CANVAS6 {
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
        update(): void {
            this.draw();
            this.move();
        }

        draw(): void {
            // abstract


        }

        move(): void {
            //abstract




        }



    }
}
