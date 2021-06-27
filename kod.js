var elem = document.getElementById("elem");
var jelszo = document.getElementById("jelszo");
var felfedGomb = document.getElementById("felfed-gomb");
var felhasznalonev = document.getElementById("felhasznalonev");
var email = document.getElementById("email");
var jelszo = document.getElementById("jelszo");
var lista = [felhasznalonev, email, jelszo];
window.addEventListener("load", meretezes);
window.addEventListener("resize", meretezes);
window.addEventListener("orientationchange", meretezes);

function meretezes() {
    var szel = window.innerWidth;
    var mag = window.innerHeight;
    if (szel <= 520) {
        elem.style.width = szel - 20 + "px";
    } else {
        elem.style.width = "500px";
    }
    if (mag <= 355) {
        document.body.style.marginTop = "60px";
        document.body.style.marginBottom = "60px";
    } else {
        document.body.style.marginTop = "0px";
        document.body.style.marginBottom = "0px";
    }
}

function felfed() {
    if (jelszo.type == "password") {
        jelszo.type = "text";
        felfedGomb.innerText = "Elrejt";
    } else {
        jelszo.type = "password";
        felfedGomb.innerText = "Felfed";
    }
}

function ellenorzo() {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].value == "") {
            lista[i].classList.remove("razas");
            void lista[i].offsetWidth;
            lista[i].classList.add("razas");
        }
    }
}