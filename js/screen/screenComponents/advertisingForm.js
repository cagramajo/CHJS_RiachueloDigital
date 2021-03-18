var advertisingFormDiv = document.createElement("div");
var advertisingComponentScreen;
var durationComponentScreen;

function advertisingFormLoad(optionsAdvertingList, optionsFrecuencyList){

    // Cargamos la sección Publicidades
    //optionsAdvertingList = getNameAdvertisingList(advertisingArray);
    advertisingComponentScreen = advertisingComponentLoad(optionsAdvertingList);
    advertisingFormDiv.appendChild(advertisingComponentScreen);

    // Cargamos la seccion Duración
    durationComponentScreen = durationComponentLoad(optionsFrecuencyList);
    advertisingFormDiv.appendChild(durationComponentScreen);

    // Boton de Carga adicional

    return advertisingFormDiv;
}