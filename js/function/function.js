var comisionMaxima = 0.1;

function validadorComision(comision){
    var comisionRecibida = parseFloat(comision);

    if (comisionRecibida <= comisionMaxima) {
        return true;
    }
    return false;
}

function listarVendedores(vendedores){
    var salida = "";
    
    for (let index = 0; index < vendedores.length; index++) {
        salida = salida + index + " - " + vendedores[index].getName() + " ";      
    }
    return salida;
}

function ordenarAlfabeticamenteVendedores(vendedores){

    vendedores.sort(function (a, b) {
        if (a.getName() > b.getName()) {
            return 1;
        }
        if (a.getName() < b.getName()) {
            return -1;
        }
        // a must be equal to b
        return 0;
        });
    return vendedores
}

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

function getQuote(){
    calculateQuote();
    // tambien hay que limpiar el datoen localStorage
}
