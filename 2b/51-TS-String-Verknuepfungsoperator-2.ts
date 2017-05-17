// Variablen und primitive Datentypen
var name : string = "Pingu";              
var age : number = 2; 
var likesFish : boolean = true;
var girlFriendsName : string = "Luisa"; 

// Funktions zur Ausgabe auf der Konsole mit Hilfe des Verknüpfungsoperators +
function greetExt2() {
    
       // Deklaration 
       var output = "";
    
       // Zuweisung mit Verknüpfungsoperatoren += und +
       output += "Tschirp – Mein Name ist " + name + ". ";
       output += "Ich bin " + age + " Jahre alt. ";
       output += "Ich mag Fisch: " + likesFish + ". "; 
       output += "Meine Freundin heißt " + girlFriendsName + ".";
        
       // Ausgabe
       console.log(output); 
    
}