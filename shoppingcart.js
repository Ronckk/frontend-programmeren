// function: bestellen
// parameters: form object
// returns: cookie met bestelling info...
// purpose: cookie maken met info bestelde item
function bestellen(thisForm) {
    productInfo =
    thisForm.id.value + "|" +
    thisForm.merk.value + "|" +
    thisForm.model.value + "|" +
    thisForm.geheugen.value + "|" +
    thisForm.prijs.value + "|" +
    thisForm.aantal.value;
    maakCookie(thisForm.aantal.value, productInfo, 1);
    notice = thisForm.aantal.value + " " +
        thisForm.merk.value +
        " in winkelwagen.";
    alert(notice);
}

// function: cartWeergeven
// parameters: Null
// returns: productentabel
// purpose: geeft productentabel weer in html
// formaat
function cartWeergeven() {
    tabelrij = "";
    for (i = 0; i <= 6; i++) {
        dezeCookie = leesCookie(i);
        if (dezeCookie == null || dezeCookie == 'niet-gevonden') {
            continue;
        }
        velden = new Array();
        velden = dezeCookie.split("|");
        tabelrij += "<tr>" +
        "<td>" + velden[0] + "</td>" +
        "<td>" + velden[1] + "</td>" +
        "<td>" + velden[2] + "</td>" +
        "<td>" + velden[3] + "</td>" +
        "<td>" + velden[4] + "</td>" +
        "<td>" + velden[5] + "</td>" +
        "<td>" + (velden[5] * velden[4]).toFixed(2) + "</td>" +
        "<td> <a href=\"managecart.html\"><img scr\"images/del.jpg\" width=40px onclick=\"verwijderCookie(" + "'" + velden[0]
         + "'" + ");\" /> </a></td>" + "</tr>";

    }
    document.write(tabelrij);
}

// function: verwijderAlleCookies
// parameters: null
// returns: null
// purpose: alle cookies verwijderen
function verwijderAlleCookies() {
    // items = leesCookie("items");
    for (i = 1; i <= 6; i++) {
        verwijderCookie(i);
    }
}