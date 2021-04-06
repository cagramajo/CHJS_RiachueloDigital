class campaignType{
    constructor(nameParameter, descriptionParameter){
        this.name = nameParameter;
        this.description = descriptionParameter;
        this.effortFee = 0.05;
        this.baseRate = 1500;
        
    }

    getName = function(){
        return this.name;
    }

    getDescription = function(){
        return this.description;
    }
}