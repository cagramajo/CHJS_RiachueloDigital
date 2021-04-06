class campaign{
    constructor(campaignTypeParameter, seller){
        this.campaignType = campaignTypeParameter;
        this.seller = seller;
        this.itemsCampaign = [];
        this.totalQuote = 0;

    }

    getCampaignType = function(){
        return this.campaignType;
    }

    getSeller =  function(){
        return this.seller;
    }

    getItemsCampaign = function(){
        return this.itemsCampaign;
    }

    getTotalQuote = function(){
        return this.totalQuote;
    }

    getTotalQuote = function(){
        return this.totalQuote;
    }

    setItemsCampaign = function(listItem){
        this.itemsCampaign = listItem;
    }

    quote = function(){
        //calculamos el valor final de la cotizacion.
        var totalItemCampaign = 0;
        itemsCampaign.forEach(element => {
            totalItemCampaign = totalItemCampaign + element.getItemValue();
        });
        this.totalQuote = totalItemCampaign;
    }
}