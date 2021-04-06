class campaignItem{
    constructor(ad, ckeckDesign, duration, frecuency ){
        this.advertising = ad;
        this.includDesingCheck = ckeckDesign;
        this.duration = parseInt(duration); // En dias
        this.frecuency = parseInt(frecuency);
        this.changeNumber = (this.frecuency == 0 ? 0 : Math.floor(this.duration / this.frecuency));
        this.itemValue = 0;
    }

    getItemValue = function(){
        return this.itemValue;
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

    calculateItemCost = function(){
        var advertisingCostBase = this.advertising.getCostBase();
        var advertisingFeeManagment = this.advertising.getFeeManagment();
        var advertisingDesignCost = this.advertising.getDesignCost();
        var preValue = ((this.changeNumber * advertisingFeeManagment) + 1) * advertisingCostBase;
        if (this.includDesingCheck){
            this.itemValue = preValue + advertisingDesignCost;
        }
        else{
            this.itemValue = preValue;
        }
        //console.log(this.itemValue);
    }

}