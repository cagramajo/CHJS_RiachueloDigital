var listAdvertisingComponentDiv = document.createElement("div");
var listAdvertisingUl = document.createElement("ul");

function listAdvertisingComponentLoad(){
    listAdvertisingComponentDiv.className = "row";
    listAdvertisingUl.id = "listAdvertising";
    listAdvertisingComponentDiv.appendChild(listAdvertisingUl);
    return listAdvertisingComponentDiv;
}

function addAdvertisingElement(textElement){
    var liElement = document.createElement("li");
    var textNode = document.createTextNode(textElement);
    liElement.appendChild(textNode);
    document.getElementById("listAdvertising").appendChild(liElement);
}
