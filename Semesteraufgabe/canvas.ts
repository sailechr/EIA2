//Aufgabe abschluss
//Name: Saile Christian
//Matrikel: 254877
//Datum: 22.Feburar 2018 
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.



//canvas hauptdatei


namespace CANVAS {
    window.onload = init; // Wenn die Seite komplett geladen ist, führe die init Funktion aus

    let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    //Variablen um Umrandung zu zeichnen
    let breite: number = 1000;
    let hoehe: number = 650;
    let blockGroesse: number = 10;
    let breiteInBloecken: number = breite / blockGroesse;
    let hoeheInBloecken: number = hoehe / blockGroesse;



    //Array for animations vom Typ AnimatedObjects (superklasse)
    let movingObjects: AnimatedObjects[] = [];


    //variable, um den Hintergrund abzuspeichern
    let imgData: ImageData;


    //init funktion, die Bäume, berge, Wolken usw. zeichnet
    function init(): void {


        canvas = <HTMLCanvasElement>document.getElementsByTagName( "canvas" )[0];
        crc2 = canvas.getContext( "2d" );
        canvas.addEventListener( "click", canvasClicked );

        infos();



        //background
        crc2.beginPath();
        crc2.fillStyle = "#7FFFd4 ";

        crc2.rect( 0, 0, canvas.width, 800 );
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        //Aufruf von funktion die graue Umrandung zeichnet
        drawBorder();



        //startposition for icecream

        for ( let i: number = 0; i < 16; i++ ) {
            let cream: Icecream;
            cream = new Icecream( Math.random() * 660, Math.random() * 50, "saddlebrown" );
            movingObjects.push( cream );


        }






        //startwert für die früchte orangen und trauben
        
        for ( let i: number = 0; i < 6; i++ ) {
            let f: Fruits;
            f = new Fruits( Math.random() * 800 + 20, Math.random() * 130, "brown" );
            movingObjects.push( f );


        }

        //startwert für Kaugummis in verschiedenen Farben und größen mit math.random

        for ( let i: number = 0; i < 10; i++ ) {



            let b: Bubblegum;
            b = new Bubblegum( Math.random() * 600, 1 );
            movingObjects.push( b );


        }
        //startwert für die schockolade
        for ( let i: number = 0; i < 8; i++ ) {
            let c: Chocolate = new Chocolate( 2 + Math.random() * 560, 1 + Math.random() * 1.56 );
            movingObjects.push( c );
        }


        //backgroundimage is saved

        imgData = crc2.getImageData( 0, 0, canvas.width, canvas.height );
        console.log( imgData );



        //Aufruf animateFunktion
        animate();

    }
    function infos(): void {
        alert( "Welcome to" + "\n" + "Catch the Food" + ":)" );
        alert( "You have to catch the entire food before it hits the ground." );
        alert( "You should catch the food as fast as you can" + ":)" );
        alert( "If you click on the food, you will catch it" + "\n" + "Enjoy yourself!" );



    }
    //zeichne Umrandung innerhalb vom canvas
    function drawBorder(): void {
        crc2.fillStyle = "Grey";
        crc2.fillRect( 0, 0, breite, blockGroesse );
        crc2.fillRect( 0, hoehe - blockGroesse, breite, blockGroesse );
        crc2.fillRect( 0, 0, blockGroesse, hoehe );
        crc2.fillRect( breite - blockGroesse, 0, blockGroesse, hoehe );
    }

    function animate(): void {
        //crc2.clearRect(0, 0, 1000, 650);
        crc2.putImageData( imgData, 0, 0 );

        for ( let i: number = 0; i < movingObjects.length; i++ ) {
            let s: AnimatedObjects = movingObjects[i];
            s.draw();
            s.gameOver();





        }

        window.setTimeout( animate, 30 );

    }





    // Die Größe des Canvas wird auf die Größe des Fensters/der Ansicht skaliert

    function resizeCanvas(): void {

        let margin: number = 50;
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName( "canvas" )[0];
        canvas.width = window.innerWidth - margin;
        canvas.height = window.innerHeight - margin;
    }




    //man bekommet die richtige Position des Klicks auf dem Canvas durch den zuvor definierten margin

    function canvasClicked( _event: MouseEvent ): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName( "canvas" )[0];

        // Implementiert nach: http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
        let rect: ClientRect = canvas.getBoundingClientRect();

        let x: number = _event.clientX - rect.left;
        let y: number = _event.clientY - rect.top;

        for ( let i: number = 0; i < movingObjects.length; i++ ) {
            if ( movingObjects[i].hit( x, y ) ) {

                movingObjects.splice( i, 1 );
                //elemente werden beim klicken auf den canvas aus dem array entfernt mit splice

                break;

            }
        }
        //wenn nichts mehr im array ist, dann kommt die Meldung , dass man das Spiel gewonnen hat
        if ( movingObjects.length == 0 ) {

            alert( "You just won the game! Congratulations :)" );
            alert( "Seite neu laden, um weiter zu spielen!" );


        }



    }


}