namespace SendData {
    //Aufgabe 10
    //Name: saile christian
    //Matrikel: 254877
    //Datum: 6.Januar 2018
    //    
    //Hiermit versichere ich, 
    //dass ich diesen Code selbst geschrieben habe. 
    //Er wurde nicht kopiert und auch nicht diktiert
    window.onload = init; // Wenn die Seite komplett geladen ist, führe die init Funktion aus

    //Arrays aller Konfigurationsmöglickeiten
    let inputSchmuckartikel: HTMLInputElement[] = [];
    let inputKerzenart: HTMLInputElement[] = [];
    let inputBaum: HTMLInputElement[] = [];
    let inputChristbaumständer: HTMLInputElement[] = [];

    function init(): void {
        //Zugriff auf button vom typ submit
        let bestätigen: HTMLElement = document.getElementById("submit");
        //button erhält lauscher, damit er auf ein Event reagiere kann und wenn der button angeklickt wird
        //dann wird die funktion bestellungprüfen ausgeführt
        bestätigen.addEventListener("click", PrüfungBestellung);
        //Zugriff auf weitere HTML-Elemente
        schmuckartikel = document.getElementById("schmuckartikel");
        schmuckartikel.addEventListener("change", berechnePreisdesWarenkorbs);
        fieldset = document.getElementById("christmastrees");
        fieldset.addEventListener("change", berechnePreisdesWarenkorbs);
        beleuchtung = document.getElementById("beleuchtung");
        beleuchtung.addEventListener("change", berechnePreisdesWarenkorbs);
        christbaumhalterung = document.getElementById("Christbaumständer");
        christbaumhalterung.addEventListener("change", berechnePreisdesWarenkorbs);
        //Funktionsaufrufe
        createAuswahlfeld();
        Christmastrees();
        createAuswahlfeld2();
        createAuswahlfeld3();

    }

    //Schmuckartikel
    //Auswahlfläche für Weihnachtsschmuck wird dynamisch erstellt 
    function createAuswahlfeld(): void {
        for (let i: number = 0; i < christbaumschmuck.length; i++) {
            let label: HTMLLabelElement = document.createElement("label");
            let input: HTMLInputElement = document.createElement("input");
            label.innerText = christbaumschmuck[i];
            label.appendChild(input);
            input.type = "number";
            input.min = "0";
            input.max = "100";
            input.value = "0";

            schmuckartikel.appendChild(label);
            input.setAttribute("name", christbaumschmuck[i]);
            inputSchmuckartikel.push(input);






        }

    }
    //Auswahlfläche für Weihnachtsbäume
    function Christmastrees(): void {


        for (let i: number = 0; i < bäume.length; i++) {
            let label: HTMLLabelElement = document.createElement("label");
            let input: HTMLInputElement = document.createElement("input");

            label.innerText = bäume[i];
            label.appendChild(input);
            input.type = "number";
            input.min = "0";
            input.max = "100";
            input.value = "0";


            console.log(input);
            fieldset.appendChild(label);
            input.setAttribute("name", bäume[i]);
            inputBaum.push(input);
        }

    }
    //Beleuchtung
    function createAuswahlfeld2(): void {
        for (let i: number = 0; i < christbaumbeleuchtung.length; i++) {
            let label: HTMLLabelElement = document.createElement("label");
            let input: HTMLInputElement = document.createElement("input");



            label.innerText = christbaumbeleuchtung[i];
            label.appendChild(input);
            input.type = "number";
            input.min = "0";
            input.max = "100";
            input.value = "0";


            beleuchtung.appendChild(label);
            input.setAttribute("name", christbaumbeleuchtung[i]);
            inputKerzenart.push(input);
        }
    }
    //Christbaumständer
    function createAuswahlfeld3(): void {
        for (let i: number = 0; i < halterung.length; i++) {
            let label: HTMLLabelElement = document.createElement("label");
            input = document.createElement("input");



            label.innerText = halterung[i];
            label.appendChild(input);
            input.type = "number";
            input.min = "0";
            input.max = "100";
            input.value = "0";


            christbaumhalterung.appendChild(label);
            input.setAttribute("name", halterung[i]);
            inputChristbaumständer.push(input);

        }


    }
    function changeAuswahluebersicht(_summe: number): void {
        let auswahl: HTMLElement = document.getElementById("auswahl");
        auswahl.textContent = "";


        for (let i: number = 0; i < inputChristbaumständer.length; i++) {
            if (parseInt(inputChristbaumständer[i].value) > 0) {
                auswahl.textContent += inputChristbaumständer[i].name + "\n" + "\n" + "in Euro:" + (parseInt(inputChristbaumständer[i].value) * preisChristbaumständer) + "\n" + "€" + "\n" + "Einzelpreis  45 Euro." + "\n";
            }
        }

        for (let i: number = 0; i < inputSchmuckartikel.length; i++) {
            if (parseInt(inputSchmuckartikel[i].value) > 0) {
                auswahl.textContent += inputSchmuckartikel[i].name + "\n" + "\n" + "in Euro:" + (parseInt(inputSchmuckartikel[i].value) * christbaumschmuckPreis) + "\n" + "€" + "\n" + "Einzelpreis  4 Euro." + "\n";
            }
        }

        for (let i: number = 0; i < inputKerzenart.length; i++) {
            if (parseInt(inputKerzenart[i].value) > 0) {
                auswahl.textContent += inputKerzenart[i].name + "\n" + "\n" + "in Euro:" + (parseInt(inputKerzenart[i].value) * christbaumbeleuchtungPreis) + "\n" + "€" + "\n" + "Einzelpreis  10 Euro." + "\n";
            }
        }
        for (let i: number = 0; i < inputBaum.length; i++) {
            if (parseInt(inputBaum[i].value) > 0) {
                auswahl.textContent += inputBaum[i].name + "\n" + "\n" + "in Euro:" + (parseInt(inputBaum[i].value) * bäumePrice) + "\n" + "€" + "\n" + "Einzelpreis  50 Euro." + "\n";
            }
        }

        //Summe im HTML
        let summe: HTMLElement = document.getElementById("summe");
        summe.textContent = _summe.toString() + "€";
    }
    function berechnePreisdesWarenkorbs(): void {
        let summe: number = 0;

        //Innerhalb der Array-Länge der Christbaumständer wird die Summe um den preis des Produkts hochgezählt
        for (let i: number = 0; i < inputChristbaumständer.length; i++) {


            if (inputChristbaumständer[i].value) {

                summe += (parseInt(inputChristbaumständer[i].value) * preisChristbaumständer);
            }


        }
        //Innerhalb der Array-Länge des Christbaumschmucks wird die Summe um den preis des Produkts hochgezählt
        for (let i: number = 0; i < inputSchmuckartikel.length; i++) {


            if (inputSchmuckartikel[i].value) {

                summe += (parseInt(inputSchmuckartikel[i].value) * christbaumschmuckPreis);
            }


        }
        //Innerhalb der Array-Länge der Beleuchtung die Summe um den preis des Produkts hochgezählt
        for (let i: number = 0; i < inputKerzenart.length; i++) {


            if (inputKerzenart[i].value) {

                summe += (parseInt(inputKerzenart[i].value) * christbaumbeleuchtungPreis);
            }


        }

        //Innerhalb der Array-Länge der Bäume wird die Summe um den preis des Produkts hochgezählt
        for (let i: number = 0; i < inputBaum.length; i++) {


            if (inputBaum[i].value) {

                summe += (parseInt(inputBaum[i].value) * bäumePrice);
            }


        }


        console.log(summe);

        changeAuswahluebersicht(summe);

    }
    //Bestellung wird auf Vollständigkeit geprüft
    function PrüfungBestellung(): void {









        let prüfen: string[] = ["Folgende Eingaben fehlen: \n"];

        //Name
        let name: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
        if (name.validity.valid == false) {
            prüfen.push("\nName \n");
        }

        //Vorname
        let vorname: HTMLInputElement = <HTMLInputElement>document.getElementById("vorname");
        if (vorname.validity.valid == false) {
            prüfen.push("Vorname \n");
        }

        //Straße
        let street: HTMLInputElement = <HTMLInputElement>document.getElementById("street");
        if (street.validity.valid == false) {
            prüfen.push("Straße \n");
        }

        //ortschaft
        let place: HTMLInputElement = <HTMLInputElement>document.getElementById("place");
        if (place.validity.valid == false) {
            prüfen.push("Adresse \n");
        }

        //postleitzahl
        let postleitzahl: HTMLInputElement = <HTMLInputElement>document.getElementById("postleitzahl");
        if (postleitzahl.validity.valid == false) {
            prüfen.push("Postleitzahl \n");
        }
        let numberOfTrees: number = 0;
        for (let i: number = 0; i < inputBaum.length; i++) {
            if (parseInt(inputBaum[i].value) > 0)
                numberOfTrees += 1;
        }
        if (numberOfTrees == 0) {
            prüfen.push("Bäume\n");
        }

        //Halterungsart
        let numberOfHalterungen: number = 0;
        for (let i: number = 0; i < inputChristbaumständer.length; i++) {
            if (parseInt(inputChristbaumständer[i].value) > 0)
                numberOfHalterungen += 1;
        }
        if (numberOfHalterungen == 0) {
            prüfen.push("Christbaumständer\n");
        }
        //Schmuck für den Baum
        let numberOfChristbaumschmuck: number = 0;
        for (let i: number = 0; i < inputSchmuckartikel.length; i++) {
            if (parseInt(inputSchmuckartikel[i].value) > 0)
                numberOfChristbaumschmuck += 1;
        }
        if (numberOfChristbaumschmuck == 0) {
            prüfen.push("Christbaumschmuck\n");
        }
        //Beleuchtung
        let numberOfKerzen: number = 0;
        for (let i: number = 0; i < inputKerzenart.length; i++) {
            if (parseInt(inputKerzenart[i].value) > 0)
                numberOfKerzen += 1;
        }
        if (numberOfKerzen == 0) {
            prüfen.push("Sie haben die Beleuchtung vergessen" + ":(" + "\n");
        }



        //Überprüfung der Lieferoptionen
        let delivery: HTMLInputElement = <HTMLInputElement>document.getElementById("delivery");
        if (delivery.value == "Express") {
            alert("Sie haben sich für eine Expresslieferung innerhalb 24 Stunden entschieden");
        }
        else if (delivery.value == "Premium") {
            alert("Sie haben sich für die Premiumlieferung innerhalb 3 Tage entschieden");
        }
        else { alert("Sie haben sich für die Standardlieferung innerhalb 1 Woche entschieden"); }
        //Überprüfung, ob Farben ausgewählt wurden
        let radio: HTMLInputElement = <HTMLInputElement>document.getElementById("red");
        let radio1: HTMLInputElement = <HTMLInputElement>document.getElementById("green");
        let radio2: HTMLInputElement = <HTMLInputElement>document.getElementById("blue");
        let radio3: HTMLInputElement = <HTMLInputElement>document.getElementById("orange");
        let radio4: HTMLInputElement = <HTMLInputElement>document.getElementById("purple");
        let radio5: HTMLInputElement = <HTMLInputElement>document.getElementById("gold");
        let radio6: HTMLInputElement = <HTMLInputElement>document.getElementById("silber");
        let radio7: HTMLInputElement = <HTMLInputElement>document.getElementById("bunt");
        //hat nicht funktioniert
        //wenn radio button angeklickt wurde, dann gebe diese meldung aus, wenn nicht dann gebe Fehler aus!
        if (radio.checked == true) {
            alert("Sie haben sich eine rote Christbaumdeko ausgesucht.");
        }
        else if (radio1.checked == true) {
            alert("Sie haben sich eine grüne Christbaumdeko ausgesucht.");
        }
        else if (radio2.checked == true) {
            alert("Sie haben sich eine blaue Christbaumdeko ausgesucht.");
        }
        else if (radio3.checked == true) {
            alert("Sie haben sich eine orangene Christbaumdeko ausgesucht.");
        }
        else if (radio4.checked == true) {
            alert("Sie haben sich eine lilane Christbaumdeko ausgesucht.");
        }
        else if (radio5.checked == true) {
            alert("Schön Ihr Weihnachtsbaum erstrahlt in Gold.");
        }
        else if (radio6.checked == true) {
            alert("Schön Ihr Weihnachtsbaum erstrahlt in Silber.");
        }
        else if (radio7.checked == true) {
            alert("Schön Ihr Weihnachtsbaum wird bunt.");
        }
        else if (radio.checked == false) {
            alert("Bitte eine Checkbox auswählen!");

        }
        //überprüfung ob Inhalte richtig sind von dem Kontaktformular
        let rückmeldung: HTMLDivElement = <HTMLDivElement>document.getElementById("rückmeldung");

        let input: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
        let input1: HTMLInputElement = <HTMLInputElement>document.getElementById("vorname");
        let input2: HTMLInputElement = <HTMLInputElement>document.getElementById("street");
        let input3: HTMLInputElement = <HTMLInputElement>document.getElementById("hausnummer");
        let input4: HTMLInputElement = <HTMLInputElement>document.getElementById("place");
        let input5: HTMLInputElement = <HTMLInputElement>document.getElementById("postleitzahl");
//        prüft, ob Eingabe eine Zahl, Buchstaben oder ohne leerzeichen eingegeben werden oder nicht, 
//        BSP: wenn es keine Zahl ist, dann ist ein Fehler aufgetreten
        if (input.checkValidity() == false || input1.checkValidity() == false || input2.checkValidity() == false || input3.checkValidity() == false || input4.checkValidity() == false || input5.checkValidity() == false) {
            //Eingaben sind falsch
            prüfen.push("Error");
            rückmeldung.innerText = "Error";
            rückmeldung.style.color = "red";
            rückmeldung.style.fontWeight = "bold";
        }
        else {
            //Eingaben sind korrekt
            prüfen.push("Eingaben sind korrekt");
            rückmeldung.innerText = "Eingaben sind korrekt";
            rückmeldung.style.color = "white";
            rückmeldung.style.fontWeight = "bold";
        }




        if (prüfen.length > 1) {
            for (let i: number = 0; i < prüfen.length; i++)
                prüfen.push();
            alert(prüfen.join(""));
        }
        else {
            alert("Vielen Dank für Ihre Bestellung und viel Freude mit Ihrem Weihnachtsbaum" + ":)");
        }
    }
}

