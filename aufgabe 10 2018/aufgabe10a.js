var SendData;
(function (SendData) {
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
    let inputSchmuckartikel = [];
    let inputKerzenart = [];
    let inputBaum = [];
    let inputChristbaumständer = [];
    function init() {
        //Zugriff auf button vom typ submit
        let bestätigen = document.getElementById("submit");
        //button erhält lauscher, damit er auf ein Event reagiere kann und wenn der button angeklickt wird
        //dann wird die funktion bestellungprüfen ausgeführt
        bestätigen.addEventListener("click", PrüfungBestellung);
        //Zugriff auf weitere HTML-Elemente
        SendData.schmuckartikel = document.getElementById("schmuckartikel");
        SendData.schmuckartikel.addEventListener("change", berechnePreisdesWarenkorbs);
        SendData.fieldset = document.getElementById("christmastrees");
        SendData.fieldset.addEventListener("change", berechnePreisdesWarenkorbs);
        SendData.beleuchtung = document.getElementById("beleuchtung");
        SendData.beleuchtung.addEventListener("change", berechnePreisdesWarenkorbs);
        SendData.christbaumhalterung = document.getElementById("Christbaumständer");
        SendData.christbaumhalterung.addEventListener("change", berechnePreisdesWarenkorbs);
        //Funktionsaufrufe
        createAuswahlfeld();
        Christmastrees();
        createAuswahlfeld2();
        createAuswahlfeld3();
    }
    //Schmuckartikel
    //Auswahlfläche für Weihnachtsschmuck wird dynamisch erstellt 
    function createAuswahlfeld() {
        for (let i = 0; i < SendData.christbaumschmuck.length; i++) {
            let label = document.createElement("label");
            let input = document.createElement("input");
            label.innerText = SendData.christbaumschmuck[i];
            label.appendChild(input);
            input.type = "number";
            input.min = "0";
            input.max = "100";
            input.value = "0";
            SendData.schmuckartikel.appendChild(label);
            input.setAttribute("name", SendData.christbaumschmuck[i]);
            inputSchmuckartikel.push(input);
        }
    }
    //Auswahlfläche für Weihnachtsbäume
    function Christmastrees() {
        for (let i = 0; i < SendData.bäume.length; i++) {
            let label = document.createElement("label");
            let input = document.createElement("input");
            label.innerText = SendData.bäume[i];
            label.appendChild(input);
            input.type = "number";
            input.min = "0";
            input.max = "100";
            input.value = "0";
            console.log(input);
            SendData.fieldset.appendChild(label);
            input.setAttribute("name", SendData.bäume[i]);
            inputBaum.push(input);
        }
    }
    //Beleuchtung
    function createAuswahlfeld2() {
        for (let i = 0; i < SendData.christbaumbeleuchtung.length; i++) {
            let label = document.createElement("label");
            let input = document.createElement("input");
            label.innerText = SendData.christbaumbeleuchtung[i];
            label.appendChild(input);
            input.type = "number";
            input.min = "0";
            input.max = "100";
            input.value = "0";
            SendData.beleuchtung.appendChild(label);
            input.setAttribute("name", SendData.christbaumbeleuchtung[i]);
            inputKerzenart.push(input);
        }
    }
    //Christbaumständer
    function createAuswahlfeld3() {
        for (let i = 0; i < SendData.halterung.length; i++) {
            let label = document.createElement("label");
            SendData.input = document.createElement("input");
            label.innerText = SendData.halterung[i];
            label.appendChild(SendData.input);
            SendData.input.type = "number";
            SendData.input.min = "0";
            SendData.input.max = "100";
            SendData.input.value = "0";
            SendData.christbaumhalterung.appendChild(label);
            SendData.input.setAttribute("name", SendData.halterung[i]);
            inputChristbaumständer.push(SendData.input);
        }
    }
    function changeAuswahluebersicht(_summe) {
        let auswahl = document.getElementById("auswahl");
        auswahl.textContent = "";
        for (let i = 0; i < inputChristbaumständer.length; i++) {
            if (parseInt(inputChristbaumständer[i].value) > 0) {
                auswahl.textContent += inputChristbaumständer[i].name + "\n" + "\n" + "in Euro:" + (parseInt(inputChristbaumständer[i].value) * SendData.preisChristbaumständer) + "\n" + "€" + "\n" + "Einzelpreis  45 Euro." + "\n";
            }
        }
        for (let i = 0; i < inputSchmuckartikel.length; i++) {
            if (parseInt(inputSchmuckartikel[i].value) > 0) {
                auswahl.textContent += inputSchmuckartikel[i].name + "\n" + "\n" + "in Euro:" + (parseInt(inputSchmuckartikel[i].value) * SendData.christbaumschmuckPreis) + "\n" + "€" + "\n" + "Einzelpreis  4 Euro." + "\n";
            }
        }
        for (let i = 0; i < inputKerzenart.length; i++) {
            if (parseInt(inputKerzenart[i].value) > 0) {
                auswahl.textContent += inputKerzenart[i].name + "\n" + "\n" + "in Euro:" + (parseInt(inputKerzenart[i].value) * SendData.christbaumbeleuchtungPreis) + "\n" + "€" + "\n" + "Einzelpreis  10 Euro." + "\n";
            }
        }
        for (let i = 0; i < inputBaum.length; i++) {
            if (parseInt(inputBaum[i].value) > 0) {
                auswahl.textContent += inputBaum[i].name + "\n" + "\n" + "in Euro:" + (parseInt(inputBaum[i].value) * SendData.bäumePrice) + "\n" + "€" + "\n" + "Einzelpreis  50 Euro." + "\n";
            }
        }
        //Summe im HTML
        let summe = document.getElementById("summe");
        summe.textContent = _summe.toString() + "€";
    }
    function berechnePreisdesWarenkorbs() {
        let summe = 0;
        //Innerhalb der Array-Länge der Christbaumständer wird die Summe um den preis des Produkts hochgezählt
        for (let i = 0; i < inputChristbaumständer.length; i++) {
            if (inputChristbaumständer[i].value) {
                summe += (parseInt(inputChristbaumständer[i].value) * SendData.preisChristbaumständer);
            }
        }
        //Innerhalb der Array-Länge des Christbaumschmucks wird die Summe um den preis des Produkts hochgezählt
        for (let i = 0; i < inputSchmuckartikel.length; i++) {
            if (inputSchmuckartikel[i].value) {
                summe += (parseInt(inputSchmuckartikel[i].value) * SendData.christbaumschmuckPreis);
            }
        }
        //Innerhalb der Array-Länge der Beleuchtung die Summe um den preis des Produkts hochgezählt
        for (let i = 0; i < inputKerzenart.length; i++) {
            if (inputKerzenart[i].value) {
                summe += (parseInt(inputKerzenart[i].value) * SendData.christbaumbeleuchtungPreis);
            }
        }
        //Innerhalb der Array-Länge der Bäume wird die Summe um den preis des Produkts hochgezählt
        for (let i = 0; i < inputBaum.length; i++) {
            if (inputBaum[i].value) {
                summe += (parseInt(inputBaum[i].value) * SendData.bäumePrice);
            }
        }
        console.log(summe);
        changeAuswahluebersicht(summe);
    }
    //Bestellung wird auf Vollständigkeit geprüft
    function PrüfungBestellung() {
        let prüfen = ["Folgende Eingaben fehlen: \n"];
        //Name
        let name = document.getElementById("name");
        if (name.validity.valid == false) {
            prüfen.push("\nName \n");
        }
        //Vorname
        let vorname = document.getElementById("vorname");
        if (vorname.validity.valid == false) {
            prüfen.push("Vorname \n");
        }
        //Straße
        let street = document.getElementById("street");
        if (street.validity.valid == false) {
            prüfen.push("Straße \n");
        }
        //ortschaft
        let place = document.getElementById("place");
        if (place.validity.valid == false) {
            prüfen.push("Adresse \n");
        }
        //postleitzahl
        let postleitzahl = document.getElementById("postleitzahl");
        if (postleitzahl.validity.valid == false) {
            prüfen.push("Postleitzahl \n");
        }
        let numberOfTrees = 0;
        for (let i = 0; i < inputBaum.length; i++) {
            if (parseInt(inputBaum[i].value) > 0)
                numberOfTrees += 1;
        }
        if (numberOfTrees == 0) {
            prüfen.push("Bäume\n");
        }
        //Halterungsart
        let numberOfHalterungen = 0;
        for (let i = 0; i < inputChristbaumständer.length; i++) {
            if (parseInt(inputChristbaumständer[i].value) > 0)
                numberOfHalterungen += 1;
        }
        if (numberOfHalterungen == 0) {
            prüfen.push("Christbaumständer\n");
        }
        //Schmuck für den Baum
        let numberOfChristbaumschmuck = 0;
        for (let i = 0; i < inputSchmuckartikel.length; i++) {
            if (parseInt(inputSchmuckartikel[i].value) > 0)
                numberOfChristbaumschmuck += 1;
        }
        if (numberOfChristbaumschmuck == 0) {
            prüfen.push("Christbaumschmuck\n");
        }
        //Beleuchtung
        let numberOfKerzen = 0;
        for (let i = 0; i < inputKerzenart.length; i++) {
            if (parseInt(inputKerzenart[i].value) > 0)
                numberOfKerzen += 1;
        }
        if (numberOfKerzen == 0) {
            prüfen.push("Sie haben die Beleuchtung vergessen" + ":(" + "\n");
        }
        //Überprüfung der Lieferoptionen
        let delivery = document.getElementById("delivery");
        if (delivery.value == "Express") {
            alert("Sie haben sich für eine Expresslieferung innerhalb 24 Stunden entschieden");
        }
        else if (delivery.value == "Premium") {
            alert("Sie haben sich für die Premiumlieferung innerhalb 3 Tage entschieden");
        }
        else {
            alert("Sie haben sich für die Standardlieferung innerhalb 1 Woche entschieden");
        }
        //Überprüfung, ob Farben ausgewählt wurden
        let radio = document.getElementById("red");
        let radio1 = document.getElementById("green");
        let radio2 = document.getElementById("blue");
        let radio3 = document.getElementById("orange");
        let radio4 = document.getElementById("purple");
        let radio5 = document.getElementById("gold");
        let radio6 = document.getElementById("silber");
        let radio7 = document.getElementById("bunt");
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
        let rückmeldung = document.getElementById("rückmeldung");
        let input = document.getElementById("name");
        let input1 = document.getElementById("vorname");
        let input2 = document.getElementById("street");
        let input3 = document.getElementById("hausnummer");
        let input4 = document.getElementById("place");
        let input5 = document.getElementById("postleitzahl");
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
            for (let i = 0; i < prüfen.length; i++)
                prüfen.push();
            alert(prüfen.join(""));
        }
        else {
            alert("Vielen Dank für Ihre Bestellung und viel Freude mit Ihrem Weihnachtsbaum" + ":)");
        }
    }
})(SendData || (SendData = {}));
//# sourceMappingURL=aufgabe10a.js.map