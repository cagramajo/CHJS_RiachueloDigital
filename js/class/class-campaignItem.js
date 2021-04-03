class campaignItem{
    constructor(ad, ckeckDesign, duration, frecuency ){
        this.advertising = ad;
        this.includDesingCheck = ckeckDesign;
        this.duration = duration; // En dias
        this.frecuency = frecuency;
        this.changeNumber = (duration % frecuency);
        this.cpcPercent = 0.5;
        this.cpmPercent = 0.5;
        this.itemValue = 0;
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

    calculateItemCost(){
        
    }
}