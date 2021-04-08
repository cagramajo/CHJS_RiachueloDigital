var quoteForm;
var optionsCampaignList = [];
var advertisingOptionsList = [];
var optionsFrecuencyList = [];
var sellerList = [];
var itemsCampaign = [];
var campaignTypeSelector;

// Carga la seccion Tipo de Campaña
function addCampaignTypeComponent(){
    //var StartButton;
    var campaignTypeComponent;

    optionsCampaignList = getNameCampaignTypeList();
    campaignTypeComponent = campaignTypeComponentLoad(optionsCampaignList);
    quoteForm.appendChild(campaignTypeComponent);
    startQuoteButtonLoad();
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
    $("#startQuoteBtn").remove();
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
    quoteComponentLoad();
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

function showQuoteTotalScreen(valueQuote){
    showTotalQuote(valueQuote);
}

//////// Aqui refactorizo los componentes con Jquery

function startQuoteButtonLoad(){
    var divStartQuoteButton = $("<div></div>")
    var startQuoteButton = $("<button></button>");

    divStartQuoteButton.attr("class", "d-flex justify-content-around");
    startQuoteButton.attr({
        id: "startQuoteBtn",
        type: "button",
        class: "btn btn-primary",
        onclick: "startQuote()"
    });
    startQuoteButton.text("Empezar");
    divStartQuoteButton.append(startQuoteButton);
    $("#quoteForm").append(divStartQuoteButton);

}