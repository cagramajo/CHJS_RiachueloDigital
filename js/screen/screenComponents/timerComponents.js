var durationComponentDiv = document.createElement("div");
var durationInputDiv = document.createElement("div");
var durationInputLabel = document.createElement("label");
var durationInput = document.createElement("input");
var frecuencyChangeSelectorDiv = document.createElement("div");
var frecuencyChangeSelectorLabel = document.createElement("label");
var frecuencyChangeSelector = document.createElement("select");

function durationComponentLoad(optionsFrecuency){
    //div general
    durationComponentDiv.setAttribute("class", "row");

    //duracion
    durationInputDiv.setAttribute("class", "col");
    durationInputLabel.setAttribute("for", "durationInput");
    durationInputLabel.innerHTML = "Duración";
    durationInputDiv.appendChild(durationInputLabel);
    durationInput.setAttribute("id", "durationInput");
    durationInput.setAttribute("class", "form-control");
    durationInput.setAttribute("type", "text");
    durationInputDiv.appendChild(durationInput);
    durationComponentDiv.appendChild(durationInputDiv);

    //frecuencia
    frecuencyChangeSelectorDiv.setAttribute("class", "col");
    frecuencyChangeSelectorLabel.setAttribute("for", "frecuencyChangeSelector");
    frecuencyChangeSelectorLabel.innerHTML = "Frecuencia";
    frecuencyChangeSelectorDiv.appendChild(frecuencyChangeSelectorLabel);
    frecuencyChangeSelector.setAttribute("id", "frecuencyChangeSelector");
    frecuencyChangeSelector.setAttribute("class", "form-control");
    optionsFrecuency.forEach(element => {
        var optionFrecuency = document.createElement("option");
        optionFrecuency.innerHTML = element;
        frecuencyChangeSelector.add(optionFrecuency);
    });
    frecuencyChangeSelectorDiv.appendChild(frecuencyChangeSelector);
    durationComponentDiv.appendChild(frecuencyChangeSelectorDiv);

    return durationComponentDiv;
}