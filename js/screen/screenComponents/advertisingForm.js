var advertisingFormDiv = document.createElement("div");
var advertisingAddButton = document.createElement("button");
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
    var advertisingAddButtonDiv = document.createElement("div");
    advertisingAddButton.type = "button";
    advertisingAddButton.id = "advertisingAddButton";
    advertisingAddButton.className = "btn btn-primary";
    advertisingAddButton.innerHTML = "Agregar";
    advertisingAddButton.setAttribute("onclick", "addItemQuote()");
    advertisingAddButtonDiv.appendChild(advertisingAddButton);
    advertisingFormDiv.appendChild(advertisingAddButtonDiv);

    return advertisingFormDiv;
}