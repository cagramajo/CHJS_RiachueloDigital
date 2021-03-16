class campaign{
    constructor(campaignTypeParameter, ad, segment, duration,budget ){
        this.campaignType = campaignTypeParameter
        this.advertising = ad;
        this.segment = segment; // 0 - NO, 1 - SI
        this.duration = duration; // En dias
        this.budget = budget;
        this.cpcPercent = 0.5;
        this.cpmPercent = 0.5;
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