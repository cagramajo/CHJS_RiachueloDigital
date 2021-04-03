class advertising{
    constructor(name, socialMedia, cost){
        this.name = name;
        this.socialMedia = socialMedia;
        this.costDesign = cost;
        this.baseCost = 50; 
        this.managmentFee = 0.01;
        this.campaignTypeName = [];
    }

    getCostDesign = function(){
        return this.costDesign;
    }

    getBaseCost = function(){
        return this.baseCost;
    }

    getManagmentFee = function(){
        return this.managmentFee;
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

    campaignTypeValidator = function(campaignTypeNameParameter){
        var indexCampaignType = this.campaignTypeName.indexOf(campaignTypeNameParameter);
        if(indexCampaignType == -1){
            return false;
        }
        return true;
    }

}