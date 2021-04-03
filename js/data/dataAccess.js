var campaignTypeList = [];
var advertisingList = [];
var sellerList = [];
var frecuencyList = [0,1,7,15,30,90,120,180,360]
var frecuencyName = [];
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
    var advertisingCostDesign = 0;
    var web = "Solo WEB Riachuelo Digital";
    var webRedes = "WEB + Redes Riachiuelo Digital";
    var redes = "Administramos tus Redes";

    // Cargar publicaciones WEB
    advertisingName = "Publicacion en web"
    advertisingSocialMedia = "web"
    advertisingCostDesign = 100
    var advertisingElementWeb = new advertising(advertisingName, advertisingSocialMedia, advertisingCostDesign);
    advertisingElementWeb.addCampaignTypeName(web);
    advertisingElementWeb.addCampaignTypeName(webRedes);
    advertisingList.push(advertisingElementWeb);

    // Cargar publicidad Facebook
    advertisingName = "Facebook Post"
    advertisingSocialMedia = "Facebook"
    advertisingCostDesign = 500
    var advertisingElementFBP = new advertising(advertisingName, advertisingSocialMedia, advertisingCostDesign);
    advertisingElementFBP.addCampaignTypeName(webRedes);
    advertisingElementFBP.addCampaignTypeName(redes);
    advertisingList.push(advertisingElementFBP);

    advertisingName = "Facebook Story"
    advertisingSocialMedia = "Facebook"
    advertisingCostDesign = 300
    var advertisingElementFBS = new advertising(advertisingName, advertisingSocialMedia, advertisingCostDesign);
    advertisingElementFBS.addCampaignTypeName(webRedes);
    advertisingElementFBS.addCampaignTypeName(redes);
    advertisingList.push(advertisingElementFBS);  

    // Cargar Publicidad Instagram
    advertisingName = "Instagram Post"
    advertisingSocialMedia = "Instagram"
    advertisingCostDesign = 600
    var advertisingElementIGP = new advertising(advertisingName, advertisingSocialMedia, advertisingCostDesign);
    advertisingElementIGP.addCampaignTypeName(webRedes);
    advertisingElementIGP.addCampaignTypeName(redes);
    advertisingList.push(advertisingElementIGP);  

    advertisingName = "Instagram Story"
    advertisingSocialMedia = "Instagram"
    advertisingCostDesign = 350
    var advertisingElementIGS = new advertising(advertisingName, advertisingSocialMedia, advertisingCostDesign);
    advertisingElementIGS.addCampaignTypeName(webRedes);
    advertisingElementIGS.addCampaignTypeName(redes);
    advertisingList.push(advertisingElementIGS); 

    // Carga publicidad Twitter
    advertisingName = "Twitter Post"
    advertisingSocialMedia = "Twitter"
    advertisingCostDesign = 250
    var advertisingElementTWP = new advertising(advertisingName, advertisingSocialMedia, advertisingCostDesign);
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
    frecuencyName.push("SIN CAMBIOS")
    frecuencyName.push("DIARIA");
    frecuencyName.push("SEMANAL");
    frecuencyName.push("QUINCENAL");
    frecuencyName.push("MENSUAL");
    frecuencyName.push("TRIMESTRAL");
    frecuencyName.push("CUATRIMESTRAL");
    frecuencyName.push("SEMESTRAL");
    frecuencyName.push("ANUAL");
    return frecuencyName;
}

function getfrecuencyNumber

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

function calculateQuote(){
    var itemsCampaign = [];
    var valueCampaing = 0;

    // Crear la campania


    // Repetir para todos los items temporales
    temporalItemsQuote.forEach(element => {
        // Tomamos un elemento del array
        var itemCampaign;
        
        // Obtenemos los objetos correspondientes
        var advertisingElem =  advertisingList.find(elem => elem.getName() == element["advertisingSelector"]);
        var checkElem = element["designIncludeCheck"];
        var durationElem = element["duration"];
        var frecuencyNameElem = frecuencyName.findIndex(elem => elem = element["frecuency"]);
        var frecuencyElem = frecuencyList[frecuencyNameElem];
        // Creamos el item campania
        itemCampaign = new campaignItem(advertisingElem, checkElem, durationElem, frecuencyElem);
        // Agregamos el item a la campania
        itemsCampaign.push(itemCampaign);
        // Calculamos el valor del item
        campaignItem.calculateItemCost();
        // Acumulamos Valor
    });

    // Eliminamos Items temporales
    // Obtenemos al vendedor
    // Agregamos el Vendedor
    // Calculamos valor final
    // devolvemos valor final
}