/*
Definimos dos objetos, uno llamado ANUNCIO y otro llamado CAMPAÑA

Siguiendo la lógica definida para el simulador de costos de publidades en redes.

ANUNCIO: (socialMediaAd)
- Nomnbre del anuncio o publicidad
- plataforma donde se mostrará o red social
- valor de creación del anuncio

Se pueden crear y modificar su valor

CAMPAÑA (campaign)
- publidad a difundir (ad) -> mas adelante pueden ser mas de una.
- Segmentación de clientes (si / no)
- duración en dias
- presupuesto de la campaña
- porcentaje de CPC
- porcentaje de CPM

Se puede crear, modificar sus valores, calcular el valor de la campana
Se crea con una distribucion 50 y 50entre CPC y CPM

VENDEDOR (seller)
- nombre
- comision

Se puede crear y ajustar la comision

CONTRATO (contract)
- campana acordada
- vendedor de la campana
- impuesto
- valor final del contrato

Se puede crear, agregar una campana, un vendedor y calcular su valor final


Para definir el costo final de la campana, es necesario definir el valor 
de la publicadad y el costo de la campana en la red social definida
y el vendedor para conocer su comision;
con esos datos se calcula el valor final

*/
 

function initialize(){
    // Info necesaria
    campaignTypeLoaderbyArc();
    //campaignTypeLoader();
    advertisingLoader();
    //sellerLoader();
    sellerLoaderFromAPI();
    // Cargamos primera seccion
    loadQuoteScreen();
}

function startQuote(){
    // Cargamos los componentes de la pantalla
    addQuoteComponent();
    // Creamos la campania
    newCampaign()
}

function addItemQuote(){
    // obtengo datos de la pantalla > json
    getAdvertisingItem();
    // agrego al array de cotizacion temporal
    //addTemporalItemQuote(itemQuote);
    addItem();
    // agrego item a pantalla
    additemCampaignScreen();
    //loadingItemCampaig();
    showQuoteTotalScreen();
}

function quote(){
    saveQuote();
    // Pasamos los Items a definitivos
    //itemConfirmation();
    // Cremos la campania y se calcula su valor
    //newCampaignQuote(selectedCampaignOnScreen(), selectedSellerOnScreen());
    // Mostramos el valor de la cotizacion
    //showQuoteTotalScreen();
}
