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


// definimos una publicidad estandar para la simulacion

var miAanuncio //= new campaign("Prueba", "Facebook", 23);
var miCampania;
var miPresupuesto = 0;
var nombreCamania = "";
var miSegmentacion = 0; // asumimos que no hay segmentacion
var miDuracion = 0;
var miValorPrevio = 0;
var miContrato;
var nombreVendedor = "";
var comisionVendedor = 0;
var idVendedorSeleccionado = 0;


var campaignTypeParameterArray = [];
var sellerParameterArray = [];
var advertisingParameterArray = [];

/**
// Datos para el alta de vendedores
alert("vamos a cargar los vendedores al sistema, para finalizar, ingresa Salir");
nombreVendedor = prompt("Igresa el nombre del vendedor");
nombreVendedor = nombreVendedor.trim().toUpperCase();
while (nombreVendedor != "SALIR"){
    comisionVendedor = prompt("Ingresa la comision de " + nombreVendedor);
    if (validadorComision(comisionVendedor)){
        cargarVendedor(vendedores, nombreVendedor, comisionVendedor);    }
    else{
        alert("La comision es superior a la maxima permitda")
    }
    nombreVendedor = prompt("Igresa el nombre del vendedor");
    nombreVendedor = nombreVendedor.trim().toUpperCase();
}

// Ordenamos los vendedores 
vendedores = ordenarAlfabeticamenteVendedores(vendedores);

// Solicitamos los datos para crear una campana

alert("Vamos a solicitarte algunos datos para definir el valor total de tu campana");
nombreCamania = prompt("Ingresa el nombre de la campania: ");
miDuracion = parseInt(prompt("Ingresa la duracion en dias de la campania: "));
miPresupuesto = parseInt(prompt("Ingresa el presupuesto que destinarias a la campania: "));

// creamos la campania
miCampania = new campaign(miAanuncio, miSegmentacion, miDuracion, miPresupuesto);
//console.log(miCampania);

// seleccionamos el vendor
do {
    idVendedorSeleccionado = parseInt(prompt("Indica el ID de tu vendedor " + listarVendedores(vendedores)));    
} while (idVendedorSeleccionado > vendedores.length);

// creamos un presupuesto de contrato
miContrato = new contract(miCampania, vendedores[idVendedorSeleccionado]);
//console.log(miContrato);

// calculamos el valor del contrato
miValorPrevio = miContrato.PreviousCostCalculation();

// Mostramos el valor previo

if(miValorPrevio == 0){
    console.log("No podemos presupuestar esta campana");
}
else{
    console.log("El valor de tu campana sera de: " + miValorPrevio);
}
**/
 

function initialize(){
    // Info necesaria
    campaignTypeLoader();
    advertisingLoader();
    sellerLoader();
    // Cargamos primera seccion
    loadQuoteScreen();
}

// Iniciar la cotizacion
function startQuote(){
    addQuoteComponent();
}

//agregar item a la cotizacion
function addItemQuote(){
    // obtengo datos de la pantalla > json
    var itemQuote = getAdvertisingItem();
    // agrego al array de cotizacion temporal
    addTemporalItemQuote(itemQuote);
    // agrego item a pantalla
    additemCampaignScreen(itemQuote);
}

//calcular la cotizacion
function quote(){
    //Llamamos a getQuote() en function.js 
    getQuote();
}
