var advertisingComponentDiv = document.createElement("div");
var advertisingSelectorDiv = document.createElement("div")
var advertisingSelectorLabel = document.createElement("label");
var advertisingSelector = document.createElement("select");
var designIncludeCheckDiv = document.createElement("div");
var designIncludeCheckLabel = document.createElement("label");
var designIncludeCheck = document.createElement("input");

function advertisingComponentLoad(optionsAdverting){
    //div general
    advertisingComponentDiv.setAttribute("class", "row");

    //publicidad
    advertisingSelectorDiv.setAttribute("class", "col");
    advertisingSelectorLabel.setAttribute("for","advertisingSelector");
    advertisingSelectorLabel.innerHTML = "Tipo de publicidad: ";
    advertisingSelectorDiv.appendChild(advertisingSelectorLabel);
    advertisingSelector.setAttribute("id", "advertisingSelector");
    advertisingSelector.setAttribute("class", "form-control");
    optionsAdverting.forEach(element => {
        var optionAdverting = document.createElement("option");
        optionAdverting.innerHTML = element;
        advertisingSelector.add(optionAdverting);
    });
    advertisingSelectorDiv.appendChild(advertisingSelector);
    advertisingComponentDiv.appendChild(advertisingSelectorDiv);

    //incluye diseno
    designIncludeCheckDiv.setAttribute("class","col form-check");
    designIncludeCheckLabel.setAttribute("class", "form-check-label");
    designIncludeCheckLabel.setAttribute("for","designIncludeInput");
    designIncludeCheckLabel.innerHTML = "Incluye diseño";
    designIncludeCheckDiv.appendChild(designIncludeCheckLabel);
    designIncludeCheck.setAttribute("class", "form-check-input");
    designIncludeCheck.setAttribute("type", "checkbox");
    designIncludeCheck.setAttribute("id", "designIncludeInput")
    designIncludeCheckDiv.appendChild(designIncludeCheck);
    advertisingComponentDiv.appendChild(designIncludeCheckDiv);
    return advertisingComponentDiv;

}
