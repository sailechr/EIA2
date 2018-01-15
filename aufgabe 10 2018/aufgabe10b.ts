namespace SendData {
    //Aufgabe 10
    //Name: saile christian
    //Matrikel: 254877
    //Datum: 6.Januar 2018
    //    
    //Hiermit versichere ich, 
    //dass ich diesen Code selbst geschrieben habe. 
    //Er wurde nicht kopierchdiktiert.



    //Artikelbezeichnungen
    export let bäumePrice: number = 50;
    export let bäume: string[] = ["Nordmanntanne", "Edeltanne", "Blaufichte."];
    export let preisChristbaumständer: number = 45;
    export let halterung: string[] = ["Selbstfixierender Christbaumständer", "Christbaumständer in Form eines Sterns", "Weihnachtsbaumständer mit Wassertank"];
    export let christbaumschmuckPreis: number = 4;
    export let christbaumschmuck: string[] = ["Kugeln", "Glocken", "Zuckerstangen und Tannenzapfen", "Sterne", "Kugeln mit Motive"];
    export let christbaumbeleuchtungPreis: number = 10;
    export let christbaumbeleuchtung: string[] = ["LED-Kerzen", "Bunte LED-Lichterkette", "Deko-Lichterkette"];
    //Zugriff auf statische HTMLElemente
    export let schmuckartikel: HTMLElement;
    export let fieldset: HTMLElement;
    export let beleuchtung: HTMLElement;
    export let christbaumhalterung: HTMLElement;
    export let input: HTMLInputElement;
}