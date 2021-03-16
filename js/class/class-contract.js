class contract{
    constructor(campaign, seller){
        this.campaign = campaign;
        this.seller = seller;
        this.tax = 0.21;
        this.finalCost = 0;
    }

    PreviousCostCalculation = function(){
        // el valor final del contrato dependera de la duracion de la campania
        // el valor de la publicacion, la comision del vendedor y el presupuesto de la campana
        var duractioFactor = 0;
        var durationLocal = 0;
        var finalCostLocal = 0;

        durationLocal = parseInt(this.campaign.getDuratio());
        if(durationLocal <= 7){
            duractioFactor = 1
        }
        else if ((durationLocal > 7) && (durationLocal <= 15)){
            duractioFactor = 1.3;
        }
        else if ((durationLocal > 15) && (durationLocal <= 30)){
            duractioFactor = 1.7
        }
        else{
            duractioFactor = 0;
        }
        
        finalCostLocal = (duractioFactor * parseInt(this.campaign.getBudget()));
        finalCostLocal = finalCostLocal + (finalCostLocal * this.seller.getCommission());
        return finalCostLocal;
    }

    setFinalCost = function(cost){
        this.finalCost = cost;
    }
}