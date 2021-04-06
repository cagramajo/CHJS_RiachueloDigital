var comisionMaxima = 0.1;

// Devuelve array de string a partir de un listado de objetos 
function getNameObjetList(objectArray){
    arrayList = [];
    elementList = "";
    objectArray.forEach(element => {
        elementList = element.getName();
        arrayList.push(elementList);
    });
    return arrayList;
}

function getNameCampaignTypeList(){
    return getNameObjetList(getCampaignTypeList());
}

function getNameAdvertisingList(){
    return getNameObjetList(getAdvertisingList());
}

function getNameAdvertisingList(campaignTypeName){
    return getNameObjetList(getAdvertisingList(campaignTypeName));
}

function getNameFrecuencyList(){
    return getfrecuencyList();
}

function getNameSellerList(){
    return getNameObjetList(getSellerList());
}

function itemConfirmation(){
    setItemCampaign();
}

function newCampaign(){
    // Obtenemos el tipo de campania
    var campaignTypeSelected = selectedCampaignOnScreen();
    // Obtenemos al vendedor a partir del dato de la pantalla
    var sellerSelected = selectedSellerOnScreen();
    // creamos la campania y devolvemos su cotizaci[on]
    return newCampaignQuote(campaignTypeSelected, sellerSelected);

}

function campaignValueScreen(quoteValueParameter){
    console.log(quoteValueParameter);
    alert(quoteValueParameter);
}