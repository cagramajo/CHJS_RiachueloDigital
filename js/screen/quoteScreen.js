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
    // Cargar vendedores
    sellerList = getNameSellerList();
    sellerComponent = sellerComponentLoad(sellerList);
    quoteForm.appendChild(sellerComponent);
    // Cargamos el listado de items publicidad cargados
    advertisingListComponent = listAdvertisingComponentLoad();
    quoteForm.appendChild(advertisingListComponent);
    campaignTypeSelector = document.getElementById("campaignTypeSelector");
    campaignTypeSelector.setAttribute("onchange", "updateAdvertisingOption()");
    campaignTypeSelector.disabled = true;
}

//Aplicamos JQuery y subida al local storage

function getAdvertisingItem(){
    var itemAdvertisingJSON = {
        "idAdvertisingItem": localStorage.getItem("advertisingItemCount"),
        "advertisingSelector": $("#advertisingSelector option:selected").text(),
        "designIncludeCheck": $("#designIncludeInput").is( ":checked" ),
        "duration": $("#durationInput").val(),
        "frecuency": $("#frecuencyChangeSelector option:selected").text()
    }

    localStorage.setItem ("itemAdvertising",JSON.stringify(itemAdvertisingJSON));
    return itemAdvertisingJSON
}

function additemCampaignScreen(){
    //addAdvertisingElement();
    addAdvertisingElementSlow();
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

function selectedCampaignOnScreen(){
    return $("#campaignTypeSelector option:selected").text();
}

function selectedSellerOnScreen(){
    return $("#sellerSelector option:selected").text();
}