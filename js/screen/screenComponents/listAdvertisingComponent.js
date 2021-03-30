var advertisingTable =  document.createElement("table");
var advertisingTbody = document.createElement("tbody");
var advertisingThead = document.createElement("thead");
var advertisingTfoot = document.createElement("tfoot")
var listAdvertisingComponentDiv = document.createElement("div");
var advertisingItemCount = 0;

var listAdvertisingUl = document.createElement("ul");

function listAdvertisingComponentLoad(){

    var trHeadAdvertising = document.createElement("tr");
    var trFootAdvertising = document.createElement("tr");
    var thAdvertisingFil = document.createElement("th");
    var thAdvertising = document.createElement("th");
    var thDesignInclude = document.createElement("th");
    var thDuration = document.createElement("th");
    var thFrecuency = document.createElement("th");
    var tdFootAdvertising = document.createElement("td");
    var quoteButton = document.createElement("button");

    
    listAdvertisingComponentDiv.className = "col";
    advertisingTable.id = "advertisingTable";
    advertisingTable.className = "table table-striped";
    advertisingTbody.id = "advertisingTbody";
    advertisingThead.id = "advertisingThead";
    advertisingTfoot.id = "advertisingTfoot";
    trHeadAdvertising.id = "trHeadAdvertising";

    //
    thAdvertisingFil.id = "thAdvertisingFil";
    thAdvertisingFil.scope = "col";
    thAdvertisingFil.appendChild(document.createTextNode("#"));
    trHeadAdvertising.appendChild(thAdvertisingFil);

    //head tipo de publicidad
    thAdvertising.id = "thAdvertising";
    thAdvertising.scope = "col";
    thAdvertising.appendChild(document.createTextNode("Tipo de Publicidad"));
    trHeadAdvertising.appendChild(thAdvertising);

    //head diseno incluido
    thDesignInclude.id = "thDesignInclude";
    thDesignInclude.scope = "col";
    thDesignInclude.appendChild(document.createTextNode("Incluye Diseño"));
    trHeadAdvertising.appendChild(thDesignInclude);
    //head duracion
    thDuration.id = "thDuration";
    thDuration.scope = "col";
    thDuration.appendChild(document.createTextNode("Duracion"));
    trHeadAdvertising.appendChild(thDuration);
    //head frecuencia
    thFrecuency.id = "thFrecuency";
    thFrecuency.scope = "col";
    thFrecuency.appendChild(document.createTextNode("Frecuencia de Cambio"));
    trHeadAdvertising.appendChild(thFrecuency);
    //Boton cotizar en el pie de la lista
    tdFootAdvertising.id = "tdFootAdvertising"
    tdFootAdvertising.scope = "col";
    tdFootAdvertising.colSpan = "4";
    tdFootAdvertising.className = "text-center"
    quoteButton.type = "button";
    quoteButton.id = "QuoteBtn";
    quoteButton.className = "btn btn-primary";
    quoteButton.innerHTML = "Cotizar";
    quoteButton.setAttribute("onClick", "quote()")
    quoteButton.disabled = true;
    tdFootAdvertising.appendChild(quoteButton);
    trFootAdvertising.appendChild(tdFootAdvertising);

    advertisingThead.appendChild(trHeadAdvertising);
    advertisingTfoot.appendChild(trFootAdvertising);
    advertisingTable.appendChild(advertisingThead);
    advertisingTable.appendChild(advertisingTbody);
    advertisingTable.appendChild(advertisingTfoot);
    //advertisingTable.hidden = true;

    listAdvertisingUl.id = "listAdvertising";
    listAdvertisingComponentDiv.appendChild(listAdvertisingUl);

    listAdvertisingComponentDiv.appendChild(advertisingTable);
    localStorage.setItem("advertisingItemCount", advertisingItemCount);
    return listAdvertisingComponentDiv;
}


function addAdvertisingElement(textElement){
    var liElement = document.createElement("li");
    var textNode = document.createTextNode(textElement);

    var itemCampaign = JSON.parse(localStorage.getItem("itemAdvertising"));
    var trAdvertisingFil = document.createElement("tr");
    var tdIdAdvertising = document.createElement("td");
    var tdAdvertising = document.createElement("td");
    var tdDesignInclude =document.createElement("td");
    var tdDuration = document.createElement("td");
    var tdFrecuency = document.createElement("td");
    
    advertisingItemCount = parseInt(localStorage.getItem("advertisingItemCount"))+1;
    trAdvertisingFil.id = "trAdvertising_" + advertisingItemCount;
    //id
    tdIdAdvertising.id = "tdIdAdvertising_" + advertisingItemCount;
    tdIdAdvertising.scope = "col";
    tdIdAdvertising.appendChild(document.createTextNode(String(advertisingItemCount)));
    trAdvertisingFil.appendChild(tdIdAdvertising);

    //Tipo de Publicidad
    tdAdvertising.id = "tdAdvertising_" + advertisingItemCount;
    tdAdvertising.scope = "col";
    tdAdvertising.appendChild(document.createTextNode(itemCampaign["advertisingSelector"]));
    trAdvertisingFil.appendChild(tdAdvertising);

    //Dato Disenio
    tdDesignInclude.id = "tdDesignInclude_" + tdDesignInclude;
    tdDesignInclude.scope = "col";
    var designIncludeCheckTable = $((document).createElement("input"));
    designIncludeCheckTable.setAttribute("class", "form-check-input");
    designIncludeCheckTable.setAttribute("type", "checkbox");
    designIncludeCheckTable.setAttribute("id", "designIncludeInput_" + advertisingItemCount);
    designIncludeCheckTable.checked = itemCampaign["designIncludeCheck"];
    tdDesignInclude.appendChild(designIncludeCheckTable);
    trAdvertisingFil.appendChild(tdDesignInclude);

    $('#designIncludeInput_' + advertisingItemCount).prop('checked',true);
    $('#designIncludeInput_' + advertisingItemCount).


    liElement.appendChild(textNode);
    document.getElementById("listAdvertising").appendChild(liElement);
    //$("#advertisingTable").hide();
}
