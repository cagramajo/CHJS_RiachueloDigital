var campaignTypeDiv = document.createElement("div");
var campaignTypeSlectorLabel = document.createElement("label");
var campaignTypeSelector = document.createElement("select");
//var optionsCampaign = [];

function campaignTypeComponentLoad(optionsCampaign){

    //Div
    campaignTypeDiv.setAttribute("class", "col");
    //Lavel
    campaignTypeSlectorLabel.setAttribute("for", "campaignTypeSelector");
    campaignTypeSlectorLabel.innerHTML = "Selecciona el Tipo de campania";
    campaignTypeDiv.appendChild(campaignTypeSlectorLabel);
    //Select
    campaignTypeSelector.setAttribute("id", "campaignTypeSelector");
    campaignTypeSelector.setAttribute("class", "form-control");
    //campaignTypeSelector.setAttribute("onblur", "updateAdvertisingOption()");
    for (let index = 0; index < optionsCampaign.length; index++) {
        //option
        var optionCampaignType = document.createElement("option");
        optionCampaignType.innerHTML = optionsCampaign[index];
        campaignTypeSelector.add(optionCampaignType);
    }
    campaignTypeDiv.appendChild(campaignTypeSelector);
    return campaignTypeDiv;
}
