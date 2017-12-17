//Aufgabe 9 erpresserbrief
//Name: Saile Christian
//Matrikel: 254877
//Datum: 14.Dezember 2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Aufgabe9;
(function (Aufgabe9) {
    window.onload = init; // Wenn die Seite komplett geladen ist, führe die init Funktion aus
    let section;
    let div;
    let b;
    function init() {
        console.log("Hallo ich bin Sushi");
        drawQuadrat((Math.random() * 10), (Math.random() * 4), "orange", 50, 50);
        section = document.createElement("section");
        document.body.appendChild(section);
        b = section.style;
        b.borderStyle = "solid";
        b.borderColor = "red";
        b.borderWidth = "2px";
        b.backgroundColor = "#ff8040";
        b.marginLeft = "3px";
        b.marginRight = "3px";
        b.marginTop = "5px";
        b.display = "inline-block";
        b.width = 1350 + "px";
        b.height = 1200 + "px";
        section.addEventListener("mousedown", MousedownEvent);
        document.onkeydown = KeyboardEvent;
        for (let i = 65; i <= 90; i++) {
            let alphabet = String.fromCharCode(i);
            console.log(alphabet);
        }
    }
    function drawQuadrat(_x, _y, _color, _sizeW, _sizeH) {
        for (let i = 0; i < 48; i++) {
            div = document.createElement("div");
            document.body.appendChild(div);
            div.addEventListener("mousedown", MousedownEvent);
            div.addEventListener("mousedown", changeColor);
            let s = div.style;
            s.borderStyle = "solid";
            s.borderColor = "white";
            s.borderWidth = "1px";
            s.display = "inline-block";
            s.backgroundColor = _color;
            s.marginLeft = "3px";
            s.marginTop = "5px";
            s.width = _sizeW + "px";
            s.height = _sizeH + "px";
            s.left = _x + "px";
            s.top = _y + "px";
            let alphabet = String.fromCharCode(i + 65);
            div.textContent = alphabet;
        }
    }
    function MousedownEvent(_event) {
        if (_event.srcElement.textContent) {
            console.log(_event);
            console.log(_event.srcElement);
            let div = document.createElement("div");
            document.body.appendChild(div);
            let s = div.style;
            s.borderStyle = "solid";
            s.borderColor = "white";
            s.borderWidth = "1px";
            s.backgroundColor = "whitesmoke";
            s.color = "orange";
            s.marginTop = "57px";
            s.position = "absolute";
            s.width = 50 + "px";
            s.height = 50 + "px";
            s.left = _event.screenX.toString();
            s.top = _event.screenY.toString();
            div.addEventListener("mousedown", removeInput);
            var outString = div.textContent;
            div.textContent = _event.srcElement.textContent;
            outString += _event.srcElement.textContent;
            section.textContent = outString;
        }
    }
    function changeColor(_event) {
        div = _event.srcElement;
        if (div) {
            this.classList.toggle("div");
        }
    }
    function KeyboardEvent(_event) {
        if (_event.keyCode) {
            let div = document.createElement("div");
            let s = div.style;
            s.borderStyle = "solid";
            s.borderColor = "white";
            s.borderWidth = "1px";
            s.backgroundColor = "whitesmoke";
            s.color = "orange";
            s.marginLeft = "3px";
            s.position = "absolute";
            s.marginTop = "5px";
            s.display = "inline-block";
            s.position = "absolute";
            s.width = 50 + "px";
            s.height = 50 + "px";
            div.addEventListener("mousedown", removeInput);
            console.log(_event.keyCode);
            console.log(_event);
            var outString = div.textContent;
            outString += String.fromCharCode(_event.keyCode);
            section.textContent = outString;
            document.body.appendChild(div);
        }
    }
    function removeInput(_event) {
        console.log(_event.altKey);
        if (_event.keyCode == 18) {
            _event.cancelBubble = true;
            _event.returnValue = false;
            let div = _event.target;
            document.removeChild(div);
        }
        return _event.returnValue;
    }
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=erpresserbrief9.js.map