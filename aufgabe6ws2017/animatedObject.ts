namespace CANVAS_6 {
    export class AnimatedObjects {
        x: number;
        y: number;
        

        constructor(_x: number, _y: number) {
            console.log("Hallo");
            this.x = _x;
            this.y = _y;

           

        }

        update(): void {
            this.draw();
            this.moveanimatedObject();
        }
        draw(): void {
            // abstract
        }

        moveanimatedObject(): void {
            //abstract
        }


        // different random style

    }
}
