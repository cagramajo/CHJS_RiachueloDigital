var campaignTypeList = [];
var advertisingList = [];
var sellerListObject = [];
var frecuencyList = [0,1,7,15,30,90,120,180,360]
var frecuencyName = [];
var temporalItemsQuote = [];
var itemsCampaign = [];
var campaigns = [];
var campaingQuote;

function campaignTypeLoaderbyArc(){
    var oCampaignType = new campaignType();
    $.getJSON("../js/data/dataCampaignTypes.json",
        function (data, textStatus) {
            data.forEach(element => {
                Object.setPrototypeOf(element, oCampaignType);
                campaignTypeList.push(element);
            });
            uploadCampaignType()
        }
    );

}

function uploadCampaignType(){
    var campaignTypeNameList = getNameObjetList(campaignTypeList);
    localStorage.setItem("optionsCampaignList", JSON.stringify(campaignTypeNameList));
    loadOptionsCampaignList();
}

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
    var designCost = 0;
    var feeManagment = 0.03;
    var web = "Solo WEB Riachuelo Digital";
    var webRedes = "WEB + Redes Riachiuelo Digital";
    var redes = "Administramos tus Redes";

    // Cargar publicaciones WEB
    advertisingName = "Publicacion en web";
    advertisingSocialMedia = "web";
    advertisingCost = 100;
    designCost = 500;
    var advertisingElementWeb = new advertising(advertisingName, advertisingSocialMedia, advertisingCost, designCost, feeManagment);
    advertisingElementWeb.addCampaignTypeName(web);
    advertisingElementWeb.addCampaignTypeName(webRedes);
    advertisingList.push(advertisingElementWeb);

    // Cargar publicidad Facebook
    advertisingName = "Facebook Post";
    advertisingSocialMedia = "Facebook";
    advertisingCost = 500;
    designCost = 900;
    var advertisingElementFBP = new advertising(advertisingName, advertisingSocialMedia, advertisingCost, designCost, feeManagment);
    advertisingElementFBP.addCampaignTypeName(webRedes);
    advertisingElementFBP.addCampaignTypeName(redes);
    advertisingList.push(advertisingElementFBP);

    advertisingName = "Facebook Story";
    advertisingSocialMedia = "Facebook";
    advertisingCost = 300;
    designCost = 700;
    var advertisingElementFBS = new advertising(advertisingName, advertisingSocialMedia, advertisingCost, designCost, feeManagment);
    advertisingElementFBS.addCampaignTypeName(webRedes);
    advertisingElementFBS.addCampaignTypeName(redes);
    advertisingList.push(advertisingElementFBS);  

    // Cargar Publicidad Instagram
    advertisingName = "Instagram Post";
    advertisingSocialMedia = "Instagram";
    advertisingCost = 600;
    designCost = 1200;
    var advertisingElementIGP = new advertising(advertisingName, advertisingSocialMedia, advertisingCost, designCost, feeManagment);
    advertisingElementIGP.addCampaignTypeName(webRedes);
    advertisingElementIGP.addCampaignTypeName(redes);
    advertisingList.push(advertisingElementIGP);  

    advertisingName = "Instagram Story";
    advertisingSocialMedia = "Instagram";
    advertisingCost = 350;
    designCost = 900;
    var advertisingElementIGS = new advertising(advertisingName, advertisingSocialMedia, advertisingCost, designCost, feeManagment);
    advertisingElementIGS.addCampaignTypeName(webRedes);
    advertisingElementIGS.addCampaignTypeName(redes);
    advertisingList.push(advertisingElementIGS); 

    // Carga publicidad Twitter
    advertisingName = "Twitter Post";
    advertisingSocialMedia = "Twitter";
    advertisingCost = 250;
    designCost = 400;
    var advertisingElementTWP = new advertising(advertisingName, advertisingSocialMedia, advertisingCost, designCost, feeManagment);
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

function sellerLoader(){
    var sellerName = "";
    var sellerCommission = 0.1;

    // Vendedor 1
    sellerName = "Juan Jose";
    sellerCommission = 0.08;
    var vendedor1 = new seller(sellerName, sellerCommission);
    sellerListObject.push(vendedor1);

    // Vendedor 2
    sellerName = "Maria Julieta";
    sellerCommission = 0.085;
    var vendedor2 = new seller(sellerName, sellerCommission);
    sellerListObject.push(vendedor2);

    // Vendedor 3
    sellerName = "Yesica Rosaura";
    sellerCommission = 0.075;
    var vendedor3 = new seller(sellerName, sellerCommission);
    sellerListObject.push(vendedor3);

    // Vendedor 4
    sellerName = "David Raul";
    sellerCommission = 0.07;
    var vendedor4 = new seller(sellerName, sellerCommission);
    sellerListObject.push(vendedor4);

    // Vendedor 5
    sellerName = "Renato";
    sellerCommission = 0.09;
    var vendedor5 = new seller(sellerName, sellerCommission);
    sellerListObject.push(vendedor5);

}

function sellerLoaderFromAPI() {
    var oSeller = new seller();
    $.get("https://my.api.mockaroo.com/seller.json?key=e244da50", function (data, textStatus) {
            for (let sellerRead of data) {
                Object.setPrototypeOf(sellerRead, oSeller);
                sellerListObject.push(sellerRead);
            }
            uploadSellerLocalStorage();
        });
}

function uploadSellerLocalStorage() {
    let sellerNameList = getNameObjetList(sellerListObject);
    localStorage.setItem("listNameSeller", JSON.stringify(sellerNameList));  
}

function getSellerList(){
    return sellerListObject;
}

function addTemporalItemQuote(itemQuote){
    temporalItemsQuote.push(itemQuote);
}

//DEPRECADA
// function setItemCampaign(){
//     // Limpiamos el array de items de campa??a
//     itemsCampaign = [];
//     // Repetir para todos los items temporales
//     temporalItemsQuote.forEach(element => {
//         // Tomamos un elemento del array
//         var itemCampaign;
        
//         // Obtenemos los objetos correspondientes
//         var advertisingElem =  advertisingList.find(elem => elem.getName() == element["advertisingSelector"]);
//         var checkElem = element["designIncludeCheck"];
//         var durationElem = element["duration"];
//         var frecuencyNameElem = frecuencyName.findIndex(elem => elem == element["frecuency"]);
//         var frecuencyElem = frecuencyList[frecuencyNameElem];
//         // Creamos el item campania
//         itemCampaign = new campaignItem(advertisingElem, checkElem, durationElem, frecuencyElem);
//         // Agregamos el item a la campania
//         itemsCampaign.push(itemCampaign);
//         // Calculamos el valor del item
//         itemCampaign.calculateItemCost();
//         // Acumulamos Valor
//     });
//     // Eliminamos Items temporales
//     //temporalItemsQuote = [];
// }

function addItem() {
    var element = JSON.parse(localStorage.getItem("itemAdvertising"));
    var itemCampaign;
    //var campaingQuote;
    // Obtenemos los objetos correspondientes
    var advertisingElem =  advertisingList.find(elem => elem.getName() == element["advertisingSelector"]);
    var checkElem = element["designIncludeCheck"];
    var durationElem = element["duration"];
    var frecuencyNameElem = frecuencyName.findIndex(elem => elem == element["frecuency"]);
    var frecuencyElem = frecuencyList[frecuencyNameElem];
    // Creamos el item campania
    itemCampaign = new campaignItem(advertisingElem, checkElem, durationElem, frecuencyElem);
    // Calculamos el valor del item
    itemCampaign.calculateItemCost();    
    // Obtengo la cotizacion
    //campaingQuote = JSON.parse(localStorage.getItem("campaingQuote"));
    //Object.setPrototypeOf(campaingQuote, new campaign());
    campaingQuote.pushItemCampaign(itemCampaign);
    campaingQuote.quote();
    localStorage.setItem("totalQuote", campaingQuote.getTotalQuote());
    //localStorage.setItem("campaingQuote", JSON.stringify(campaingQuote));

}


function newCampaignQuote(campaignTypeSelected, sellerSelected){
    var seller = sellerListObject.find(element => element.getName() == sellerSelected);
    var campaignType = campaignTypeList.find(element => element.getName() == campaignTypeSelected);
    campaingQuote = new campaign(campaignType, seller);
    //localStorage.setItem("campaingQuote", JSON.stringify(campaingQuote));
    //campaingQuote.quote();
    //campaigns.push(campaingQuote);
    //localStorage.setItem("totalQuote", campaingQuote.getTotalQuote())
    //return campaingQuote.getTotalQuote();
}

function saveQuote() {
    var URLPOST = "https://jsonplaceholder.typicode.com/posts";
    console.log(campaingQuote);
    $.post(URLPOST, JSON.stringify(campaingQuote), function (data, textStatus){
        console.log(data);
    });
    
}