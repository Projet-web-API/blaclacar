var villed = "Peu importe"
var villea = "Peu importe"
var theUrl = null
var inverser = false
var plus = new Array()

function choix(){
    villed = document.getElementById("villed").value;
    villea = document.getElementById("villea").value;
    console.log("ville départ = "+villed+"ville arrivé = "+villea)
    if(villea == villed){
        alert("veuillez choisir deux villes différentes");
    }
    else if(inverser==true){
        if(villea == "Peu importe"){
            lancea(villed);
        }
        else{
            lance(villea, villed);
        }
    }
    else{
        if(villea == "Peu importe"){
            lanced(villed);
        }
        else{
            lance(villed, villea);
        }
    }
    
}

function lance(villed, villea) {
    theUrl = "https://public-api.blablacar.com/api/v2/trips?fn="+villed+"&tn="+villea+"&key=cZ1QJSVV5ruMIZiVshHT7jsYy6of6Uwv"
    search()
}

function lanced(villed) {
    theUrl = "https://public-api.blablacar.com/api/v2/trips?fn="+villed+"&key=cZ1QJSVV5ruMIZiVshHT7jsYy6of6Uwv"
    search()
}

function lancea(villea){
    theUrl = "https://public-api.blablacar.com/api/v2/trips?tn="+villea+"&key=cZ1QJSVV5ruMIZiVshHT7jsYy6of6Uwv"
    search()
}

function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open( "GET", theUrl, false ) // false for synchronous request
    xmlHttp.send( null )
    return xmlHttp.responseText
}

function logArrayElements(element, index, array) {
    array[index] = "<img src=\"plus1.png\" alt=\"plus d'infos sur le trajet\" id=\"plus"+index+"\" height=\"16\" width=\"16\" onclick=\"plusInfos("+index+")\" onmouseover=\"animationp1("+index+")\" onmouseout=\"animationp2("+index+")\" >"
    console.log("a[" + index + "] = " + array[index]);
}

function search(){
    json = JSON.parse(httpGet(theUrl))
    var text = ""
    var taille = json['trips'].length
    console.log(taille)
    
    var i = 0

    for(i = 0; i < taille; i++){
        plus.push(undefined)
    }

    plus.forEach(logArrayElements);
    
    for(i = 0; i < taille; i++){
        text += "<div id=\"texte"+i+"\"> Départ = " + json['trips'][i.toString()]['departure_place']['city_name']+",arrivée = " + json['trips'][i.toString()]['arrival_place']['city_name'] +"   " + plus[i] +"</div>"
        
    }
    document.getElementById("test").innerHTML = text
}

function inverseVille(){
    if(inverser == false){
        inverser = true;
        document.getElementById("choix1").innerHTML="Ville arrivé"
        document.getElementById("choix2").innerHTML="Ville départ"
    }
    else{
        inverser = false;
        document.getElementById("choix1").innerHTML="Ville départ"
        document.getElementById("choix2").innerHTML="Ville arrivé"
    }
}

function animation1(){
    document.getElementById("fleches").src=('fleches2.png')
}

function animation2(){
    document.getElementById("fleches").src=('fleches1.png')
}

function animationp1(i){
    temp = "plus"+i
    console.log(temp)
    document.getElementById(temp).src=('plus2.png');

}

function animationp2(i){
    temp = "plus"+i
    console.log(temp)
    document.getElementById(temp).src=('plus1.png')
}

function plusInfos(i){
    console.log("tu as cliqué sur le plus " + i)
    document.getElementById("texte"+i).innerHTML = "Départ à "+json['trips'][i]['departure_place']['city_name']+", "+json['trips'][i]['departure_place']['address']+" le "+json['trips'][i]['departure_date']+",arrivée = " + json['trips'][i]['arrival_place']['city_name']
}