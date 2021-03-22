var quoteForm;
var optionsCampaignList = [];
var advertisingOptionsList = [];
var optionsFrecuencyList = [];
var sellerList = [];

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
    var campaignTypeSelector;
    
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

function addAdvertisingList(){
    var advertisingElmenet = "uno mas";
    addAdvertisingElement(advertisingElmenet);
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