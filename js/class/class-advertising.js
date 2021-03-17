class advertising{
    constructor(name, socialMedia, cost){
        this.name = name;
        this.socialMedia = socialMedia;
        this.cost = cost;
        this.campaignTypeName = [];
    }

    getCost = function(){
        return this.cost;
    }

    getName = function(){
        return this.name;
    }

    getCampaingTypeName = function(){
        return this.campaignTypeName;
    }

    addCampaignTypeName = function(campaignTypeNameElement){
        this.campaignTypeName.push(campaignTypeNameElement);
    }

}