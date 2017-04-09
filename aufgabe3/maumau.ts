//Aufgabe: 3b,  gedicht
//Name: Saile Christian
//Matrikel: 254877
//Datum: 9.April 2017 
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.

//In Zusammenarbeit mit Nadia Credidio und Sara Kalinic 





///* Warten bis der DOMContent geladen ist */
///* Erst dann den EventListener und das Eventhandling "scharf schalten" */
document.addEventListener("DOMContentLoaded", function(): void {




    //variable= cards eckige Klammer = ein Array des Typs string (Zeichenkette)
    //die gesamten Kartennamen sind nun als eine Variable definiertmit let oder var --------> Variable deklarieren   
    let cards: string[] = ["Karo 7",
        "Karo 8",
        "Karo 9",
        "Karo 10",
        "Karo Bube",
        "Karo Dame",
        "Karo König",
        "Karo Ass",
        "Kreuz 7",
        "Kreuz 8",
        "Kreuz 9",
        "Kreuz 10",
        "Kreuz Bube",
        "Kreuz Dame",
        "Kreuz König",
        "Kreuz As",
        "Herz 7",
        "Herz 8",
        "Herz 9",
        "Herz 10",
        "Herz Bube",
        "Herz Dame",
        "Herz König",
        "Herz As",
        "Pik 7",
        "Pik 8",
        "Pik 9",
        "Pik 10",
        "Pik Bube",
        "Pik Dame",
        "Pik König",
        "Pik As"];

    // Nachziehstapel (firststack) 
    let nachziehStapel: any = document.getElementById("firststack");
    //beim  klicken werden die Karten verteilt
    nachziehStapel.addEventListener("click", function(): void {
        //Zufallskarte generieren
        let zufallsKarte: string = cards.splice(Math.round(Math.random() * (cards.length - 1)), 1)[0];
        // Variable als Funktion mit Rüchgabewert
        let leerKarte: any = sucheLeerKarte();
        // zweiter Stapel für Ablage, void=nichts
        function sucheLeerKarte(): void {
            let handKarten: any = document.getElementsByClassName("secondstack");
            let handstack: any = handKarten;
            // for Schleife, die solange läuft bis die ganzen Karten ausgegeben sind
            for (let i: number = 0; i < handstack.length; i++) {
                if (handstack[i].textContent === "") {
                    return handstack[i];
                }
            }
            return null;
        }
        if (leerKarte != null) {
            leerKarte.innerText = zufallsKarte;
        }
        if (cards.length === 0) {
            nachziehStapel.innerText = "leer";
        }
    });


    // ABLAGE 
    let traystack: any = document.getElementById("thirdstack");
    let handstack: any = document.getElementsByClassName("secondstack");



    for (let v: number = 0; v < handstack.length; v++) {

        //Karten von Hand in die Ablage
        handstack[v].addEventListener("click", function(event: Event): void {
            let karteHand: HTMLDivElement = <HTMLDivElement>event.target;
            traystack.innerText = karteHand.textContent;
            karteHand.innerText = "";

        }
        );
    }
});



//    //IDs , die in Html definiert werden, kann man damit über Java Script ansprechen  
//    // Nachziehstapel ("id =firststack")
//    let firststack: HTMLElement = document.getElementById("firststack");
//
//    //Eventlistener auf den Nachziehstapel
//    firststack.addEventListener("click", function(): void {
//        //Zufallskarte generieren
//        let randomcard: string = cards.splice(Math.round(Math.random() * (cards.length - 1)), 1)[0];
//
//        // Variable für funktion anlegen
//        let emptycards: HTMLDivElement = searchcards();
//        //Funktion mit Rückgabewert
//        function searchcards(): HTMLDivElement {
//            let handstack: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("secondstack");
//            for (let i: number = 0; i < handstack.length; i++) {
//                if (handstack[i].textContent === "") {
//                    return handstack[i];
//                }
//            }
//            return null;
//        }
//
//        if (emptycards != null) {
//            emptycards.innerText = randomcard;
//        }
//
//        if (cards.length === 0) {
//            firststack.innerText = "it is empty";
//        }
//    });
//
//    // ABLAGE 
//    let traystack: any = document.getElementById("thirdstack");
//    let handstack: any = document.getElementsByClassName("secondstack");
//
//
//
//    for (let v: number = 0; v < handstack.length; v++) {
//
//        //Karten von Hand in die Ablage
//        handstack[v].addEventListener("click", function(event: Event): void {
//            let karteHand: HTMLDivElement = <HTMLDivElement>event.target;
//            traystack.innerText = karteHand.textContent;
//            karteHand.innerText = "";
//
//        }
//        );
//    }
//});
//
