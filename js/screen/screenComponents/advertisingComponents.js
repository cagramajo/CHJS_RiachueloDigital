var advertisingComponentDiv = document.createElement("div");
var advertisingDiv = document.createElement("div");
var advertisingSelectorLabel = document.createElement("label");
var advertisingSelector = document.createElement("select");
var designIncludeDiv = document.createElement("div");
var designIncludeInputLabel = document.createElement("label");
var designIncludeCheck = document.createElement("input");

function advertisingComponentLoad(optionsAdverting){
    //div general
    advertisingComponentDiv.setAttribute("class", "row");

    //publicidad
    advertisingDiv.setAttribute("class", "col");
    advertisingSelectorLabel.setAttribute("for","advertisingSelector");
    advertisingSelectorLabel.innerHTML = "Tipo de publicidad: ";
    advertisingDiv.appendChild(advertisingSelectorLabel);
    advertisingSelector.setAttribute("id", "advertisingSelector");
    advertisingSelector.setAttribute("class", "form-control");
    optionsAdverting.forEach(element => {
        var optionAdverting = document.createElement("option");
        optionAdverting.innerHTML = element;
        advertisingSelector.add(optionAdverting);
    });
    advertisingDiv.appendChild(advertisingSelector);
    advertisingComponentDiv.appendChild(advertisingDiv);

    //incluye diseno
    designIncludeDiv.setAttribute("class","col form-check");
    designIncludeInputLabel.setAttribute("class", "form-check-label");
    designIncludeInputLabel.setAttribute("for","designIncludeInput");
    designIncludeInputLabel.innerHTML = "Incluye diseño";
    designIncludeDiv.appendChild(designIncludeInputLabel);
    designIncludeCheck.setAttribute("class", "form-check-input");
    designIncludeCheck.setAttribute("type", "checkbox");
    designIncludeCheck.setAttribute("id", "designIncludeInput")
    designIncludeDiv.appendChild(designIncludeCheck);
    advertisingComponentDiv.appendChild(designIncludeDiv);
    return advertisingComponentDiv;

}
