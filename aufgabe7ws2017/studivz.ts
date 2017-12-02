namespace StudiVZ {
    interface StudentData {
        Matrikelnummer: number;
        Name: string;
        Nachname: string;
        Alter: number;
        Gender: boolean;
        Kommentar: string;

        // hier ist noch die richtige Datenstruktur festzulegen
    }
    var students: StudentData[] = [];
    let stop: boolean = false;



    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                let input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0=m oder 1=f) und Kommentar");
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
        var inputSplit: string[] = _input.split(",");






        if (isNaN(parseInt(inputSplit[0]))) {

            // ist keine Zahl 
            return "You didn't enter a number as Matrikelnummer";

        }

        if (parseInt(inputSplit[4]) != 0 && parseInt(inputSplit[4]) != 1) {
            return " You must enter 0 or 1 to submit your Gender";
        }





        if (isNaN(parseInt(inputSplit[3]))) {

            // ist keine Zahl 
            return "You didn't enter a number as age";

        }
        let student: StudentData = {
            Matrikelnummer: parseInt(inputSplit[0]),
            Name: inputSplit[1],
            Nachname: inputSplit[2],
            Alter: parseInt(inputSplit[3]),
            Gender: parseInt(inputSplit[4]) == 0,
            Kommentar: inputSplit[5]





        };
        students.push(student);
        let b: boolean = student.Gender;
        let gender: string;

        if (parseInt(inputSplit[4]) == 0) {
            b = true;
            gender = "male";

        }
        else if (parseInt(inputSplit[4]) == 1) {
            b = false;
            gender = "female";
        }


        console.log(student);
        //Die eingegebenen Daten werden untereinander aufgelistet
        return "Your data were saved. Thankyou for your registration :)" + "\n" + "Ausgabe" + student.Matrikelnummer + "\nName: " + student.Name + "\nVorname: " + student.Nachname + "\nAlter: " + student.Alter + "\nGeschlecht: " + gender + "\nKommentar: " + student.Kommentar;


    }

    function queryData(_matrikel: number): string {
        let gender: string;

        let b: boolean;


        for (let i: number = 0; i < students.length; i++) {
            console.log(i + ": " + students);







            if (students[i].Matrikelnummer == _matrikel) {
                //Bestimmung des Geschlechts in if-Anweisung von Matrikelnummer, da beides miteinander zusammenhängt
                //denn wenn die if-else-anweisung des geschlechts außerhalb des Anweisungsblock der Matrikelnummer ist , dann wird diese so lange ausgeführt wie die schleife lang ist und dann wird erst der Anweisungsblock mit der Matrikelnummer ausgeführt
                //code läuft somit ein paar Millisekunden schneller
                //wenn beides zusammenausgeführt wird, dann wird zuerst geprüft, ob die Matrikelnummer die richtige ist und wenn diese die richtige ist wird der rest ausgeführt
                if (students[i].Gender) {
                    //if(gleich true auch möglich)
                    gender = "male";
                    b = true;
                }
                else {
                    gender = "female";
                    b = false;
                }
                //Auflistung der daten und ausgabe
                return "Ausgabe" + students[i].Matrikelnummer + "\nName: " + students[i].Name + "\nVorname: " + students[i].Nachname + "\nAlter: " + students[i].Alter + "\nGeschlecht: " + gender + "\nKommentar: " + students[i].Kommentar;
            }


        }


        return "Ups da stimmt was nicht";



















    }
}
