function quoteComponentLoad(){
    var divElement = $("<div></div>");
    var pElementTotalQuote = $("<p></p>")

    $(divElement).attr("id", "divElement");
    $(pElementTotalQuote).attr({
        id: "pElementTotalQuote",
        class: "text-center mw-100 display-4"
    });
    $(pElementTotalQuote).text("Total: $ 0");
    $(divElement).append(pElementTotalQuote);
    $("#quoteForm").append(divElement);
//    $("#pElementTotalQuote").hide();
}

function showTotalQuote(){
    var totalQuoteText = "Total: $ " + localStorage.getItem("totalQuote");
    $("#divElement").slideUp("slow", function () {
        $("#pElementTotalQuote").text(totalQuoteText);
    }).slideDown("slow");
}


