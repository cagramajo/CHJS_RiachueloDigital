class campaign{
    constructor(campaignTypeParameter){
        this.campaignType = campaignTypeParameter;
        this.itemsCampaign = []
    }

    getDuratio = function(){
        return this.duration;
    }

    getAdvertising =  function(){
        return this.advertising;
    }

    getBudget = function(){
        return this.budget;
    }
}