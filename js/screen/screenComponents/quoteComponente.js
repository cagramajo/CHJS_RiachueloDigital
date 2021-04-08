function quoteComponentLoad(){
    var divElement = $("<div></div>");
    var pElementTotalQuote = $("<p></p>")

    pElementTotalQuote.attr({
        id: "pElementTotalQuote",
        class: "text-center mw-100 display-4"
    });
    pElementTotalQuote.text("Total:");
    divElement.append(pElementTotalQuote);
    $("#quoteForm").append(divElement);
    $("#pElementTotalQuote").hide();

}

function showTotalQuote(totalQuoteScreen){
    $("#pElementTotalQuote").text("Total: $"+ totalQuoteScreen);
    $("#pElementTotalQuote").show();
}


