function formcheck(thisForm) {
    postcode = thisForm.postcode.value;
    for (var i = 0; i < postcode.length; i++) {
        var c = postcode.charAt(i);
        if (c == " ") {
            alert("Postcode mag geen spaties hebben");
            thisForm.postcode.focus();
            return false;
        }
    }
    leeftijd = thisForm.leeftijd.value;
        if (leeftijd < 20) {
            alert("Je bent te jong. Minimaal 20.");
            thisForm.leeftijd.focus();
            return false;
        
    }
}

function herhalen() {
    document.klantformulier.password2.value =
    document.klantformulier.password.value;
}

document.klantformulier.gadget[0]
document.klantformulier.gadget[1]
document.klantformulier.gadget[2]
