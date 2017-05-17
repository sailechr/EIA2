// Variablen und primitive Datentypen
var name : string = "Pingu";                   
var age : number = 2;                          
var likesFish : boolean = true;       
var girlFriendsName : string;                   // Name der Freundin noch unbekannt, nur Variablendeklaration;
girlFriendsName = "Pinga";                      // Zuweisung jederzeit möglich
girlFriendsName = "Luisa";                      // Veränderung jederzeit möglich

// Konstante 
const placeOfBirth : string = "Südpol";         // einmalige Zuweisung zum Zeitpunkt der Deklaration
                                                // unveränderbar "konstant";
// placeOfBirth = "Nordpol";                    // erneute Zuweisung nicht erlaubt, erzeugt Fehlermeldung


// Funktion zur Ausgabe der Daten auf der Konsole 
function showDataExt () {
    
    console.log(name, age, placeOfBirth, likesFish, girlFriendsName);
    
}