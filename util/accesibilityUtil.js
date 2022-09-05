'use strict';


function isAccesible(pageUrl,selectedErrors,mapOfErrorMessages) {
    //console.log("Cantidad repetidas  " + selectedErrors)

    let result = selectedErrors.filter((item,index)=>{
    return selectedErrors.indexOf(item) === index;
    })

    console.log("Los errores de accesibilidad encontrados son:  ")

    for (let i = 0; i < result.length; i++) {

        let error = result[i];
        let errorSplit = error.split(".");
        let errorObject = {};


        if(errorSplit.length > 0 ){
            errorSplit[0] === "WCAG2AA"? errorObject.nivel     = errorSplit[0].replace("WCAG2AA","Nivel: AA"):errorObject.nivel     = errorSplit[0].replace("WCAG2A","Nivel: A ");

            errorObject.principio = errorSplit[1].replace("Principle"," | Principio: ");
            errorObject.guia      = errorSplit[2].replace("Guideline"," | Guia: ");
            errorObject.criterio  =  " | Criterio: " + errorSplit[3];
            errorObject.tecnica   =  " | Técnica: " + errorSplit[4];
            errorObject.message   =  " | Mensaje: " + mapOfErrorMessages.get(error)  + " |";
        }
        console.log(errorObject.nivel  + " "+ errorObject.principio  + " "+ errorObject.guia  + " "+ errorObject.criterio + " "+ errorObject.tecnica +" + "+ errorObject.message);
    } 

    if (result.length > 8){
            console.log(pageUrl + " NO ES ACCESIBLE")
    }
    else {
            console.log(pageUrl + " ES ACCESIBLE")
    }      
}




module.exports = {
        "isAccesible":isAccesible
}    