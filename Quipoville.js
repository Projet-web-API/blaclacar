var villed = "Peu importe";
var villea = "Peu importe";
var theUrl = null;
var inverser = false;


function choix(){
    villed = document.getElementById("villed").value;
    villea = document.getElementById("villea").value;
    console.log("ville départ = "+villed+"ville arrivé = "+villea)
    if(villea == villed){
        alert("veuillez choisir deux villes différentes");
    }
    else if(inverser==true){
        else if(villea == "Peu importe"){
            lancea(villed);
        }
        else{
            lance(villea, villed);
        }
    }
    else{
        else if(villea == "Peu importe"){
            lanced(villed);
        }
        else{
            lance(villed, villea);
        }
    }
    
}

function lance(villed, villea) {
    theUrl = "https://public-api.blablacar.com/api/v2/trips?fn="+villed+"&tn="+villea+"&key=cZ1QJSVV5ruMIZiVshHT7jsYy6of6Uwv";
    search()
}

function lanced(villed) {
    theUrl = "https://public-api.blablacar.com/api/v2/trips?fn="+villed+"&key=cZ1QJSVV5ruMIZiVshHT7jsYy6of6Uwv";
    search()
}

function lancea(villea){
    theUrl = "https://public-api.blablacar.com/api/v2/trips?tn="+villea+"&key=cZ1QJSVV5ruMIZiVshHT7jsYy6of6Uwv";
    search()
}

function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function search(){
    json = JSON.parse(httpGet(theUrl));
    var i
    var text = ""
    var taille = json['trips'].length
    console.log(taille);
    var tab = []
    for(i = 0; i < taille; i++){
        text += "Départ = " + json['trips'][i.toString()]['departure_place']['city_name']+",arrivée = " + json['trips'][i.toString()]['arrival_place']['city_name'] + "<br>";

    }
    document.getElementById("test").innerHTML = text
}

function inverseVille(){
    if(inverser == false){
        inverser = true;
        document.getElementById("choix").innerHTML="Ville départ";
    }
    else{
        inverser = false;
        document.getElementById("choix").innerHTML="Ville arrivé";
    }
}

function animation1(){
    document.getElementById("fleches").src=('fleches2.png');
}

function animation2(){
    document.getElementById("fleches").src=('fleches.png');
}
