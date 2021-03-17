var comisionMaxima = 0.1;

function cargarVendedor(arrayVendedores, nombre, comision){
    var pos = arrayVendedores.length;
    newVendedor = new seller(nombre, comision);
    arrayVendedores[pos] = newVendedor;

}

function validadorComision(comision){
    var comisionRecibida = parseFloat(comision);

    if (comisionRecibida <= comisionMaxima) {
        return true;
    }
    return false;
}

function listarVendedores(vendedores){
    var salida = "";
    
    for (let index = 0; index < vendedores.length; index++) {
        salida = salida + index + " - " + vendedores[index].getName() + " ";      
    }
    return salida;
}

function ordenarAlfabeticamenteVendedores(vendedores){

    vendedores.sort(function (a, b) {
        if (a.getName() > b.getName()) {
            return 1;
        }
        if (a.getName() < b.getName()) {
            return -1;
        }
        // a must be equal to b
        return 0;
        });
    return vendedores
}

function campaignTypeLoader(){
    var campaignTypeArray = [];
    var campaignTypeName = "";
    var campaignTypeDesc = "";
    
    // 1 - Solo publicidad en nuestra WEB
    campaignTypeName = "Solo WEB Riachuelo Digital"
    campaignTypeDesc = "Solo podras publicitar en nuestras en nuestra web"
    var campaignTypeElement = new campaignType(campaignTypeName, campaignTypeDesc);
    campaignTypeArray.push(campaignTypeElement);

    // 2 - Publicidad en nuestra Web y nuestras redes sociales
    campaignTypeName = "WEB + Redes Riachiuelo Digital"
    campaignTypeDesc = "Podras publicitar en nuestras en nuestra web y nuestras redes sociales"
    var campaignTypeElement = new campaignType(campaignTypeName, campaignTypeDesc);
    campaignTypeArray.push(campaignTypeElement);

    // 3 - Administracion de tus redes sociales
    campaignTypeName = "Administramos tus Redes"
    campaignTypeDesc = "Nos dedicamos integramente a tus redes"
    var campaignTypeElement = new campaignType(campaignTypeName, campaignTypeDesc);
    campaignTypeArray.push(campaignTypeElement);

    return campaignTypeArray;
}

function advertisingLoader(){
    var advertisingName = "";
    var advertisingSocialMedia = "";
    var advertisingCost = 0;
    var advertisingCampaingTypeName = "";
    var advertisingList = [];
    var web = "Solo WEB Riachuelo Digital";
    var webRedes = "WEB + Redes Riachiuelo Digital";
    var redes = "Administramos tus Redes";

    // Cargar publicaciones WEB
    advertisingName = "Publicacion en web"
    advertisingSocialMedia = "web"
    advertisingCost = 100
    var advertisingElementWeb = new advertising(advertisingName, advertisingSocialMedia, advertisingCost);
    advertisingElementWeb.addCampaignTypeName(web);
    advertisingList.push(advertisingElementWeb);

    // Cargar publicidad Facebook
    advertisingName = "Facebook Post"
    advertisingSocialMedia = "Facebook"
    advertisingCost = 500
    var advertisingElementFBP = new advertising(advertisingName, advertisingSocialMedia, advertisingCost);
    advertisingElementFBP.addCampaignTypeName(webRedes);
    advertisingElementFBP.addCampaignTypeName(redes);
    advertisingList.push(advertisingElementFBP);

    advertisingName = "Facebook Story"
    advertisingSocialMedia = "Facebook"
    advertisingCost = 300
    var advertisingElementFBS = new advertising(advertisingName, advertisingSocialMedia, advertisingCost);
    advertisingElementFBS.addCampaignTypeName(webRedes);
    advertisingElementFBS.addCampaignTypeName(redes);
    advertisingList.push(advertisingElementFBS);  

    // Cargar Publicidad Instagram
    advertisingName = "Instagram Post"
    advertisingSocialMedia = "Instagram"
    advertisingCost = 600
    var advertisingElementIGP = new advertising(advertisingName, advertisingSocialMedia, advertisingCost);
    advertisingElementIGP.addCampaignTypeName(webRedes);
    advertisingElementIGP.addCampaignTypeName(redes);
    advertisingList.push(advertisingElementIGP);  

    advertisingName = "Instagram Story"
    advertisingSocialMedia = "Instagram"
    advertisingCost = 350
    var advertisingElementIGS = new advertising(advertisingName, advertisingSocialMedia, advertisingCost);
    advertisingElementIGS.addCampaignTypeName(webRedes);
    advertisingElementIGS.addCampaignTypeName(redes);
    advertisingList.push(advertisingElementIGS); 

    // Carga publicidad Twitter
    advertisingName = "Twitter Post"
    advertisingSocialMedia = "Twitter"
    advertisingCost = 250
    var advertisingElementTWP = new advertising(advertisingName, advertisingSocialMedia, advertisingCost);
    advertisingElementTWP.addCampaignTypeName(redes);
    advertisingList.push(advertisingElementTWP); 

    return advertisingList;    
}

function sellerLoader(){
    return null;

}

function otherParameterLoader(){

}

function parameterLoad(){
    campaignTypeLoader();
    advertisingLoader();
    sellerLoader();
    otherParameterLoader();
}