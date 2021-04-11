class seller{
    constructor(name, commission){
        this.id;
        this.first_name = name;
        this.last_name;
        this.email;
        this.gender;
        this.commission = commission;

    }

    getCommission = function(){
        return this.commission;
    }

    getName = function(){
        return this.first_name;
    }
}