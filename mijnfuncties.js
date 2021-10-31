function afmelden() {
    var antwoord = confirm("Wilt u zich afmelden?");
    if (antwoord == true) {
        alert("U wordt afgemeld!!!");
        window.close();
    }
}

function begroeten() {
    var vandaag = new Date();
    var uur = vandaag.getHours();
    if (uur < 11) {
        document.write('<br>Goedemorgen!')
        exit;
    }
    if (uur == 12, 13, 14, 15, 16, 17) {
        document.write('<br>Goedemiddag!')
        exit;
    } 
    if (uur > 17) {
        document.write('<br>Goedenavond!')
        exit;
    }
}

function dollarKoers() {
    return (1.36);
}

function euroKoers() {
    return (0.74);
}

function dollar_naar_euro(inputdollars) {
    return (inputdollars * euroKoers());
}

function wissel(bedrag, valuta) {
    if (valuta == 'euro') {
        return (bedrag * dollarKoers());
    } else if (valuta == 'dollar') {
        return (bedrag * euroKoers());
    }
}