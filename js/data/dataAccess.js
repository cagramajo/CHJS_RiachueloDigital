var campaignTypeList = [];
var advertisingList = [];
var sellerList = [];
var frecuencyList = [0,1,7,15,30,90,120,180,360]
var temporalItemsQuote = [];


function campaignTypeLoader(){
    var campaignTypeName = "";
    var campaignTypeDesc = "";
    
    // 1 - Solo publicidad en nuestra WEB
    campaignTypeName = "Solo WEB Riachuelo Digital"
    campaignTypeDesc = "Solo podras publicitar en nuestras en nuestra web"
    var campaignTypeElement = new campaignType(campaignTypeName, campaignTypeDesc);
    campaignTypeList.push(campaignTypeElement);

    // 2 - Publicidad en nuestra Web y nuestras redes sociales
    campaignTypeName = "WEB + Redes Riachiuelo Digital"
    campaignTypeDesc = "Podras publicitar en nuestras en nuestra web y nuestras redes sociales"
    var campaignTypeElement = new campaignType(campaignTypeName, campaignTypeDesc);
    campaignTypeList.push(campaignTypeElement);

    // 3 - Administracion de tus redes sociales
    campaignTypeName = "Administramos tus Redes"
    campaignTypeDesc = "Nos dedicamos integramente a tus redes"
    var campaignTypeElement = new campaignType(campaignTypeName, campaignTypeDesc);
    campaignTypeList.push(campaignTypeElement);
}

function getCampaignTypeList(){
    return campaignTypeList;
}

function advertisingLoader(){
    var advertisingName = "";
    var advertisingSocialMedia = "";
    var advertisingCost = 0;
    var web = "Solo WEB Riachuelo Digital";
    var webRedes = "WEB + Redes Riachiuelo Digital";
    var redes = "Administramos tus Redes";

    // Cargar publicaciones WEB
    advertisingName = "Publicacion en web"
    advertisingSocialMedia = "web"
    advertisingCost = 100
    var advertisingElementWeb = new advertising(advertisingName, advertisingSocialMedia, advertisingCost);
    advertisingElementWeb.addCampaignTypeName(web);
    advertisingElementWeb.addCampaignTypeName(webRedes);
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

}

function getAdvertisingList(){
    return advertisingList;
}

function getAdvertisingList(campaignTypeName){
    var advertisingListByCampaignType = [];
    advertisingList.forEach(element => {
        if (element.campaignTypeValidator(campaignTypeName)) {
            advertisingListByCampaignType.push(element);
        }
    });
    return advertisingListByCampaignType;
}

function getfrecuencyList(){
    var arrayList = [];
    arrayList.push("SIN CAMBIOS")
    arrayList.push("DIARIA");
    arrayList.push("SEMANAL");
    arrayList.push("QUINCENAL");
    arrayList.push("MENSUAL");
    arrayList.push("TRIMESTRAL");
    arrayList.push("CUATRIMESTRAL");
    arrayList.push("SEMESTRAL");
    arrayList.push("ANUAL");
    return arrayList;
}

function sellerLoader(){
    var sellerName = "";
    var sellerCommission = 0.1;

    // Vendedor 1
    sellerName = "Juan Jose";
    sellerCommission = 0.08;
    var vendedor1 = new seller(sellerName, sellerCommission);
    sellerList.push(vendedor1);

    // Vendedor 2
    sellerName = "Maria Julieta";
    sellerCommission = 0.085;
    var vendedor2 = new seller(sellerName, sellerCommission);
    sellerList.push(vendedor2);

    // Vendedor 3
    sellerName = "Yesica Rosaura";
    sellerCommission = 0.075;
    var vendedor3 = new seller(sellerName, sellerCommission);
    sellerList.push(vendedor3);

    // Vendedor 4
    sellerName = "David Raul";
    sellerCommission = 0.07;
    var vendedor4 = new seller(sellerName, sellerCommission);
    sellerList.push(vendedor4);

    // Vendedor 5
    sellerName = "Renato";
    sellerCommission = 0.09;
    var vendedor5 = new seller(sellerName, sellerCommission);
    sellerList.push(vendedor5);

}

function getSellerList(){
    return sellerList;
}

function addTemporalItemQuote(itemQuote){
    temporalItemsQuote.push(itemQuote);
}