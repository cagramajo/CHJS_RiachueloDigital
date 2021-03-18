var durationComponentDiv = document.createElement("div");
var durationDiv = document.createElement("div");
var durationSelectorLabel = document.createElement("label");
var durationSelector = document.createElement("select");
var frecuencyDiv = document.createElement("div");
var frecuencyChangeSelectorLabel = document.createElement("label");
var frecuencyChangeSelector = document.createElement("select");

function durationComponentLoad(optionsDuration, optionsFrecuency){
    //div general
    durationComponentDiv.setAttribute("class", "row");

    //duracion
    durationDiv.setAttribute("class", "col");
    durationSelectorLabel.setAttribute("for", "durationSelector");
    durationSelectorLabel.innerHTML = "Duración";
    durationDiv.appendChild(durationSelectorLabel);
    durationSelector.setAttribute("id", "durationSelector");
    durationSelector.setAttribute("class", "form-control");
    optionsDuration.forEach(element => {
        var optionDuration = document.createElement("option");
        optionsDuration.innerHTML = element;
        durationSelector.add(optionDuration);
    });
    durationDiv.appendChild(durationSelector);
    durationComponentDiv.appendChild(durationDiv);

    //frecuencia
    frecuencyDiv.setAttribute("class", "col");
    frecuencyChangeSelectorLabel.setAttribute("for", "frecuencyChangeSelector");
    frecuencyChangeSelectorLabel.innerHTML = "Frecuencia";
    frecuencyDiv.appendChild(frecuencyChangeSelectorLabel);
    frecuencyChangeSelector.setAttribute("id", "frecuencyChangeSelector");
    frecuencyChangeSelector.setAttribute("class", "form-control");
    optionsFrecuency.forEach(element => {
        var optionFrecuency = document.createElement("option");
        optionFrecuency.innerHTML = element;
        frecuencyChangeSelector.add(optionFrecuency);
    });
    frecuencyDiv.appendChild(frecuencyChangeSelector);
    durationComponentDiv.appendChild(frecuencyDiv);

    return durationComponentDiv;
}