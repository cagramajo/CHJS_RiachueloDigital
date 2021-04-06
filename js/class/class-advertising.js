class advertising{
    constructor(name, socialMedia, cost, costDesign, feeManagment){
        this.name = name;
        this.socialMedia = socialMedia;
        this.costBase = cost;
        this.feeManagment = feeManagment;
        this.designCost = costDesign
        this.campaignTypeName = [];
    }

    getFeeManagment = function(){
        return this.feeManagment;
    }

    getCostBase = function(){
        return this.costBase;
    }

    getDesignCost = function(){
        return this.designCost;
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