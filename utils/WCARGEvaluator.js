'use strict';

class WCARGEvaluator {
    static isAccesible(pageUrl, selectedErrors, errorMessages) {
        //console.log("Cantidad repetidas  " + selectedErrors)

        let mapOfErrorMessages = new Map();
        let seleccionados = [];

        for (let errorIndex = 0; errorIndex < errorMessages.length; errorIndex++) {
            let errorEntry = errorMessages[errorIndex];
            mapOfErrorMessages.set(errorEntry.code, errorEntry.message);
        }


        let result = selectedErrors.filter((item, index) => {
            return selectedErrors.indexOf(item) === index;
        })

       // console.log("Los errores de accesibilidad encontrados son:  ")

        for (let i = 0; i < result.length; i++) {

            let error = result[i];
            let errorSplit = error.split(".");
            let errorObject = {};


            if (errorSplit.length > 0) {
                errorSplit[0] === "WCAG2AA" ? errorObject.nivel = errorSplit[0].replace("WCAG2AA", "Nivel: AA") : errorObject.nivel = errorSplit[0].replace("WCAG2A", "Nivel: A ");

                errorObject.principio = errorSplit[1].replace("Principle", " | Principio: ");
                errorObject.guia = errorSplit[2].replace("Guideline", " | Guia: ");
                errorObject.criterio = " | Criterio: " + errorSplit[3];
                errorObject.tecnica = " | Técnica: " + errorSplit[4];
                errorObject.message = " | Mensaje: " + mapOfErrorMessages.get(error) + " |";
            }
          //  console.log(errorObject.nivel + " " + errorObject.principio + " " + errorObject.guia + " " + errorObject.criterio + " " + errorObject.tecnica + " + " + errorObject.message);
        }

        for (let i = 0; i < result.length; i++) {
            let select = result[i];
            let seleccionadosSplit = select.split(".");
            seleccionados.push(seleccionadosSplit[3]);
        }

        let criteriosfinal = seleccionados.filter((item,index)=>{
            return seleccionados.indexOf(item) === index;
        })

        console.log(criteriosfinal)

        console.log(result)

        let isAccesible;
        if (criteriosfinal.length > 8) {
          //  console.log(pageUrl + " NO ES ACCESIBLE")
            isAccesible = false;
        } else {
          //  console.log(pageUrl + " ES ACCESIBLE")
            isAccesible = true;
        }

        return isAccesible;
    }
}

module.exports = {
    "isAccesible": WCARGEvaluator.isAccesible
}    