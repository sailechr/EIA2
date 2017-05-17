namespace maumau {


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
    window.onload = init;
    function init(): void {
        // Nachziehstapel (firststack) 
        //IDs , die in Html definiert werden, kann man damit über Java Script ansprechen  
        // Nachziehstapel ("id =firststack")
        let nachziehStapel: any = document.getElementById("firststack");
        //beim  klicken werden die Karten verteilt
        let handstack: any = document.getElementsByClassName("secondstack");
        let zufallsKarte: any;
        let leerKarte: any;
        //beim  klicken werden die Karten verteilt
        //Eventlistener auf den Nachziehstapel
        //Aufruf funktion randomCard
        nachziehStapel.addEventListener("click", randomCards);
        function randomCards(): void {
            //void=nichts
            //Zufallskarte generieren
            if (handstack.length == 0) {
                zufallsKarte = cards.splice(Math.round(Math.random() * (cards.length - 1)), 1)[0];
                leerKarte = sucheLeerKarte();
                // zweiter Stapel für Ablage
                handstack.push(cards);

            }
            console.log(handstack);
            if (leerKarte != null) {
                leerKarte.innerText = zufallsKarte;
            }
            if (cards.length === 0) {
                nachziehStapel.innerText = "leer";
            }

        }

        function sucheLeerKarte(): Element {
            let handKarten: NodeListOf<Element> = document.getElementsByClassName("secondstack");
            // for Schleife, die solange läuft bis die ganzen Karten ausgegeben sind
            for (let i: number = 0; i < handKarten.length; i++) {
                if (handKarten[i].textContent == "") {
                    return handKarten[i];
                }
            }
            return null;
        }
        // Variable als Funktion mit Rüchgabewert

        // ABLAGE 
        let traystack: any = document.getElementById("thirdstack");

        for (let v: number = 0; v < 5; v++) {
            //Karten von Hand in die Ablage
            handstack[v].addEventListener("click", event);

            function event(event: any): void {
                let karteHand: any = event.target;
                traystack.innerText = karteHand.textContent;
                karteHand.innerText = "";
            }
        }
    }


};