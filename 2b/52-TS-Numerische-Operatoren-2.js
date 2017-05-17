var givenToPingu = 0;
var eatenByPingu = 0;
var fishInTotal = 12;
function feed() {
    // Addition
    givenToPingu = givenToPingu + 1;
    // Subtraktion
    fishInTotal = fishInTotal - 1;
    // Ausgabe Konsole
    console.log("Anzahl Fische gefüttert: " + givenToPingu);
    console.log("Noch " + fishInTotal + " Fische übrig.");
}
function eat() {
    // "Increment": Addition + 1
    // Verkürzte Schreibweise für eatenByPingu = eatenByPingu + 1 
    eatenByPingu++;
    // Ausgabe Konsole
    console.log("Anzahl Fische gegessen: " + eatenByPingu);
}
function fishPerYear() {
    // Variablen: Achtung Sichtbarkeit nur innerhalb des Codeblocks
    var fishPerDay = 15;
    var daysPerYear = 365;
    var fishPerYear = fishPerDay * daysPerYear;
    // Ausgabe
    console.log("Pingu benötigt " + fishPerYear + " Fische im Jahr");
}
// fishPerYear (); 
//# sourceMappingURL=52-TS-Numerische-Operatoren-2.js.map