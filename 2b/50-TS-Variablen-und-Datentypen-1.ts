// Variablen und primitive Datentypen
var name : string = "Pingu";                   // String: "Zeichenkette"
var age : number = 2; //2.25;                  // Number: Numerischer Wert ganzzahlig oder Fließkomma
var likesFish : boolean = true; //false        // Boolean: Bool'sche Aussagenlogik wahr oder falsch
var unsureWhichType: any;                      // Any: TypeScript Besonderheit - Datentyp unklar zum Zeitpunkt der Deklaration 

// Funktion zur Ausgabe der Daten auf der Konsole 
function showData () {
    
    console.log(name, age, likesFish, unsureWhichType);
    
}