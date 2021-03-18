var sellerComponentDiv = document.createElement("div");
var sellerDiv = document.createElement("div");
var sellerSelectorLabel = document.createElement("label");
var sellerSelector = document.createElement("select");

function sellerComponentLoad(optionsSeller){
    //div general
    sellerComponentDiv.setAttribute("class", "row");

    //vendedores
    sellerDiv.setAttribute("class", "col");
    sellerSelectorLabel.setAttribute("for", "sellerSelector");
    sellerSelectorLabel.innerHTML = "Vendedor";
    sellerDiv.appendChild(sellerSelectorLabel);
    sellerSelector.setAttribute("id", "sellerSelector");
    sellerSelector.setAttribute("class", "form-control");
    optionsSeller.forEach(element => {
        var optionSeller = document.createElement("option");
        optionSeller.innerHTML = element;
        sellerSelector.add(optionSeller);
    });
    sellerDiv.appendChild(sellerSelector);
    sellerComponentDiv.appendChild(sellerDiv);
    return sellerComponentDiv;
}