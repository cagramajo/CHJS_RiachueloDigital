var optionsCampaignList = ["Opcion 1", "Opcion 2"];
var formQuote = document.createElement("form");
var mainSection;
var campaignTypeComponent1;

function quoteScreenLoad(campaignTypeParameterArray){
    optionsCampaignList = getNameCampaignList(campaignTypeParameterArray);
    mainSection = document.getElementById("mainCotizador");
    campaignTypeComponent1 = campaignTypeComponentLoad(optionsCampaignList);
    console.log(campaignTypeComponent1);
    formQuote.appendChild(campaignTypeComponent1);
    mainSection.appendChild(formQuote);
}

function getNameCampaignList(campaignTypeParameterArray){
    arrayList = [];
    elementList = "";
    for (let index = 0; index < campaignTypeParameterArray.length; index++) {
        elementList = campaignTypeParameterArray[index].getName();
        arrayList.push(elementList);      
    }
    return arrayList;
}