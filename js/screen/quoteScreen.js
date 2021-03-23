var quoteForm;
var optionsCampaignList = [];
var advertisingOptionsList = [];
var optionsFrecuencyList = [];
var sellerList = [];
var itemsCampaign = [];
var campaignTypeSelector;

// Carga la seccion Tipo de Campaña
function addCampaignTypeComponent(){
    var StartButton;
    var campaignTypeComponent;

    optionsCampaignList = getNameCampaignTypeList();
    campaignTypeComponent = campaignTypeComponentLoad(optionsCampaignList);
    quoteForm.appendChild(campaignTypeComponent);
    StartButton = document.createElement("button");
    StartButton.type = "button";
    StartButton.id = "startQuoteBtn";
    StartButton.className = "btn btn-primary";
    StartButton.innerHTML = "Empezar";
    //StartButton.onclick = "startQuote()"
    StartButton.setAttribute("onClick", "startQuote()")
    quoteForm.appendChild(StartButton);
}

function loadQuoteScreen(){
    quoteForm = document.getElementById("quoteForm")
    addCampaignTypeComponent()
}

function addQuoteComponent(){
    var advertisingForm;
    var advertisingListComponent;
    var sellerComponent;
    var hiddenBtn;
    var quoteButton;
    var selectedCampaignTypeOption;
    var selectedNameCampaignTypeOption;
    
    quoteForm = document.getElementById("quoteForm");
    //Ocultamos boton "Cotizar Ahora"
    hiddenBtn = document.getElementById("startQuoteBtn");
    quoteForm.removeChild(hiddenBtn);
    // Cargamos el formulario de publicidades
    selectedCampaignTypeOption = document.getElementById("campaignTypeSelector");
    selectedNameCampaignTypeOption = optionsCampaignList[selectedCampaignTypeOption.selectedIndex];
    advertisingOptionsList = getNameAdvertisingList(selectedNameCampaignTypeOption);
    optionsFrecuencyList = getNameFrecuencyList();
    advertisingForm = advertisingFormLoad(advertisingOptionsList, optionsFrecuencyList);
    quoteForm.appendChild(advertisingForm);
    // Cargamos el listado de items publicidad cargados
    advertisingListComponent = listAdvertisingComponentLoad();
    quoteForm.appendChild(advertisingListComponent);
    // Cargar vendedores
    sellerList = getNameSellerList();
    sellerComponent = sellerComponentLoad(sellerList);
    quoteForm.appendChild(sellerComponent);
    //boton Cotizar
    quoteButton = document.createElement("button");
    quoteButton.type = "button";
    quoteButton.id = "QuoteBtn";
    quoteButton.className = "btn btn-primary";
    quoteButton.innerHTML = "Cotizar";
    //quoteButton.onclick = "startQuote()"
    quoteButton.setAttribute("onClick", "quote()")
    quoteForm.appendChild(quoteButton);
    campaignTypeSelector = document.getElementById("campaignTypeSelector");
    campaignTypeSelector.setAttribute("onchange", "updateAdvertisingOption()");
    campaignTypeSelector.disabled = true;
}

function getAdvertisingItem(){
    var itemAdvertisingJSON = {
        "advertisingSelector":"",
        "designIncludeCheck":false,
        "duration":0,
        "frecuency":"SIN CAMBIOS"
    }
    var selectedAdvertising = document.getElementById("advertisingSelector");
    var designIncludeInput = document.getElementById("designIncludeInput");
    var durationInput = document.getElementById("durationInput");
    var frecuencyChangeSelector = document.getElementById("frecuencyChangeSelector");

    console.log(selectedAdvertising.selectedIndex);
    itemAdvertisingJSON["advertisingSelector"] = advertisingOptionsList[selectedAdvertising.selectedIndex];
    itemAdvertisingJSON["designIncludeCheck"] = designIncludeInput.checked;
    itemAdvertisingJSON["duration"] = durationInput.value;
    itemAdvertisingJSON["frecuency"] = optionsFrecuencyList[frecuencyChangeSelector.selectedIndex];
    return itemAdvertisingJSON
}

function additemCampaignScreen(itemCampaign){
    var registro = itemCampaign["advertisingSelector"] + ", " + itemCampaign["designIncludeCheck"] + ", " + itemCampaign["duration"] + ", " + itemCampaign["frecuency"];
    addAdvertisingElement(registro);
}

function updateAdvertisingOption(){
    var selectedCampaignTypeOption = document.getElementById("campaignTypeSelector");
    var selectedNameCampaignTypeOption = optionsCampaignList[selectedCampaignTypeOption.selectedIndex];
    var advertisingListComponent = document.getElementById("advertisingSelector");
    advertisingListComponent.length = 0;
    //selectedCampaignTypeOption.length = 0;
    advertisingOptionsList = getNameAdvertisingList(selectedNameCampaignTypeOption);
    advertisingOptionsList.forEach(elementList => {
        advertisingListComponent[advertisingListComponent.length] = new Option(elementList);
    });
}