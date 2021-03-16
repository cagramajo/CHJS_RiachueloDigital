class campaignType{
    constructor(nameParameter, descriptionParameter){
        this.name = nameParameter;
        this.description = descriptionParameter;
    }

    getName = function(){
        return this.name;
    }

    getDescription = function(){
        return this.description;
    }
}