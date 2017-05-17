var name : string = "Pingu";              
var age : number = 2; 
var likesFish : boolean = true;
var girlFriendsName : string = "Luisa"; 

// Funktions zur Ausgabe auf der Konsole mit Hilfe des Verknüpfungsoperators +
function greetExt() {
    
       console.log('Tschirp – Mein Name ist ' + name);
       console.log('Ich bin ' + age + ' Jahre alt');
       console.log('Ich mag Fisch: ' + likesFish);
       console.log('Meine Freundin heißt ' + girlFriendsName);
    
}
var name : string = "Pingu";                   // String: "Zeichenkette"
var age : number = 2; //2.25;                  // Number: Numerischer Wert ganzzahlig oder Fließkomma
var likesFish : boolean = true; //false        // Boolean: Bool'sche Aussagenlogik wahr oder falsch
var unsureWhichType: any;                      // Any: TypeScript Besonderheit - Datentyp unklar zum Zeitpunkt der Deklaration 

// Funktion zur Ausgabe der Daten auf der Konsole 
function showData () {
    
    console.log(name, age, likesFish, unsureWhichType);
    
}
var friends: string [] = ["Seeli", "Eisbär","Ele"];     // Array: Liste von Werten eines Datentyps; Zugriff über ganzzahligen Index aufsteigend von 0;

function showFriends(){
    
    alert('Meine Bester Freunde ist ' + friends[0] );
    alert('Mein zweitbester Freund ist ' + friends[1] );
    alert('Mein drittbester Freund ist ' + friends[2] );
    
    console.log ("Anzahl Freunde: " + friends.length); 
}
