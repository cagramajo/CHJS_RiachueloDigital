class seller{
    constructor(name, commission){
        this.name = name;
        this.commission = commission;
    }

    getCommission = function(){
        return this.commission;
    }

    getName = function(){
        return this.name;
    }
}