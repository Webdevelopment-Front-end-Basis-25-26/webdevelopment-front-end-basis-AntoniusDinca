let scoreRood=0;
let scoreBlauw=0;
    document.getElementById("btnRoodPlus1").onclick= function(){
        scoreRood +=1;
        document.getElementById("scoreRood").innerText=scoreRood;
}
    document.getElementById("btnRoodPlus3").onclick= function(){
        scoreRood +=3;
        document.getElementById("scoreRood").innerText=scoreRood;
}
    document.getElementById("btnBlauwPlus1").onclick= function(){
        scoreBlauw +=1;
        document.getElementById("scoreBlauw").innerText=scoreBlauw;
}
    document.getElementById("btnBlauwPlus3").onclick= function(){
        scoreBlauw +=3;
        document.getElementById("scoreBlauw").innerText=scoreBlauw;
}
    document.getElementById("btnResetScores").onclick= function(){
        scoreRood =0;
        scoreBlauw =0;
        document.getElementById("scoreRood").innerText=scoreRood;
        document.getElementById("scoreBlauw").innerText=scoreBlauw;
}
 document.getElementById("updateRood").onclick= function(){
    const input = document.getElementById("valueRood").value;
    const nieuwScore= Number (input);
    scoreRood= nieuwScore;
    document.getElementById("scoreRood").innerText=scoreRood;
}
 document.getElementById("updateBlauw").onclick= function(){
    const input = document.getElementById("valueBlauw").value;
    const nieuwScore= Number (input);
    scoreBlauw= nieuwScore;
    document.getElementById("scoreBlauw").innerText=scoreBlauw;
}
document.getElementById("btnRood").onclick= function(){
    document.getElementById("kleurBox").style.backgroundColor="#ff0000";
}
document.getElementById("btnBlauw").onclick= function(){
    document.getElementById("kleurBox").style.backgroundColor="#0000ff";
}
document.getElementById("btnGroen").onclick= function(){
    document.getElementById("kleurBox").style.backgroundColor="#008800";
}
const color = document.getElementById("kleurKiezer");

document.getElementById("kleurBox").style.backgroundColor = color.value;

color.oninput = function () {
    const gekozenKleur = color.value;
    document.getElementById("kleurBox").style.backgroundColor = gekozenKleur;
}
document.getElementById("btnBericht").onclick = function() {
    const voornaam = document.getElementById("voornaam").value;
    const naam = document.getElementById("naam").value;
    const geboortedatum = new Date(document.getElementById("geboortedatum").value);

    const geboortejaar = geboortedatum.getFullYear();
    const huidigJaar = new Date().getFullYear();
    const leeftijd = huidigJaar - geboortejaar;

    const bericht = "Hallo " + voornaam + " " + naam + ", je wordt dit jaar " + leeftijd + " jaar oud.";
    document.getElementById("leeftijdBericht").innerText = bericht;
}



document.getElementById("box").onmouseover = function() {
    document.getElementById("resultaat").innerText = "De box werdt betreden";
    document.getElementById("box").style.backgroundColor = "#00FF00";
}

document.getElementById("box").onmouseout = function() {
    document.getElementById("resultaat").innerText = "De box werdt verlaten";
    document.getElementById("box").style.backgroundColor = "#FF0000";
    document.getElementById("box").style.border = "none";
}

document.getElementById("box").onmousedown = function() {
    document.getElementById("box").style.border = "5px solid";
}

document.getElementById("box").onmouseup = function() {
    document.getElementById("box").style.border = "none";
}



document.getElementById("menuButton").onclick = function() {
    document.getElementById("menuButton").classList.remove("closed");
}

document.getElementById("menuButton").onclick = function() {
    document.getElementById("menuButton").classList.toggle("closed");
}