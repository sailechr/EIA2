//Beginn
document.addEventListener('DOMContentLoaded', function () {
    var name;
    name = prompt("Bitte geben Sie ihren Namen ein :)");
    if (name) {
        alert("Hallo" + name + ":)");
    }
    document.getElementById("eingabename").innerHTML = name;
});
//# sourceMappingURL=web.js.map