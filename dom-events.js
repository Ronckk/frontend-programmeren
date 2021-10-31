// Globale variabelen
var afbeeldingen = new Array(
    "images/galaxy-s4.png", "images/ipad.jpg", "images/laptop.jpg");
var max = afbeeldingen.length;
var randomIndex = 0;
function showMedia() {
    randomIndex = Math.floor((Math.random() * max));
    document.getElementById("media").scr =  afbeeldingen[randomIndex];
}
