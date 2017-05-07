//Aufgabe: 6
//Name: Saile Christian
//Matrikel: 254877
//Datum: 6.Mai 2017 
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.







namespace StudiVZ {
    interface StudentData {
        Matrikelnummer: number;
        Alter: number;
        Name: string;
        Vorname: string;
        Geschlecht: boolean;
        Kommentar: string;

    }
    //assoziatives Array(heterogen)
    let students: StudentData[] = [];
    //Array students 
    let stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let enter: string[] = _input.split(",");
        //Variablen mit Kommaata durch split trennen
        //Genderquery
        if (parseInt(enter[4]) != 0 && parseInt(enter[4]) != 1) {
            return "bitte nur 0 oder 1 für Geschlecht angeben";
        }
        if (isNaN(parseInt(enter[0]))) {
            return "You did not enter a number as Matrikelnummer";
        }
        if (isNaN(parseInt(enter[3]))) {
            return "Bitte geben Sie das Alter als Zahl ein.";
        }
        let student: StudentData = {
            Matrikelnummer: parseInt(enter[0]),
            Name: enter[1],
            Vorname: enter[2],
            Alter: parseInt(enter[3]),
            Geschlecht: parseInt(enter[4]) == 0,
            Kommentar: enter[5]
        };
        students.push(student);
        //im Array students werden die Variablen vom assziativen Array "StudentData" abgespeichert bzw. zugewiesen

        return "Your data were saved. Thankyou for your registration :)";
    }
    function queryData(_matrikel: number): string {
        let gender: string;
        for (let i: number = 0; i <= students.length; i++) {
            if (students[i].Matrikelnummer == _matrikel) {
                
                if (students[i].Geschlecht == true) {
                    gender = "female";
                }
                else {
                    gender = "male";
                }
            }

            return "Ausgabe" + students[i].Matrikelnummer + "\nName: " + students[i].Name + "\nVorname: " + students[i].Vorname + "\nAlter: " + students[i].Alter + "\nGeschlecht: " + gender + "\nKommentar: " + students[i].Kommentar;
        }





    }






















}
