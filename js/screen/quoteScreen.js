var optionsCampaignList = [];
var optionsAdvertingList = [];
var optionsDurationList = [];
var optionsFrecuencyList = [];
var sellerList = [];
var quoteForm;
var campaignTypeComponentScreen;
var sellerComponentScreen;
var advertisingFormScreen;

function quoteScreenLoad(campaignTypeArray, advertisingArray){
    quoteForm = document.getElementById("quoteForm")

    //Ocultamos boton "Cotizar Ahora"
    var hiddenBtn = document.getElementById("startQuoteBtn");
    quoteForm.removeChild(hiddenBtn);

    // Cargamos La sección tipo de Campaña
    optionsCampaignList = getNameCampaignList(campaignTypeArray);
    campaignTypeComponentScreen = campaignTypeComponentLoad(optionsCampaignList);
    quoteForm.appendChild(campaignTypeComponentScreen);

    // Cargamos el formulario de publicidades
    advertisingFormScreen = advertisingFormLoad(optionsAdvertingList, optionsFrecuencyList);
    quoteForm.appendChild(advertisingFormScreen);

    // Cargar vendedores
    sellerComponentScreen = sellerComponentLoad(sellerList);
    quoteForm.appendChild(sellerComponentScreen);

    // Cotizar y Limpiar
}

function getNameCampaignList(campaignTypeArray){
    arrayList = [];
    elementList = "";
    campaignTypeArray.forEach(element => {
        elementList = element.getName();
        arrayList.push(elementList);
    });
    return arrayList;
}

function getNameAdvertisingList(advertisingArray){
    arrayList = [];
    elementList = "";
    advertisingArray.forEach(element => {
        elementList = element.getName();
        arrayList.push(elementList);
    });
    return arrayList;
}