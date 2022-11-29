'use strict';

class WCARGEvaluator {
    static isAccesible(pageUrl, selectedErrors, errorMessages) {

        let mapOfErrorMessages = new Map();
        let selected = [];

        for (let errorIndex = 0; errorIndex < errorMessages.length; errorIndex++) {
            let errorEntry = errorMessages[errorIndex];
            mapOfErrorMessages.set(errorEntry.code, errorEntry.message);
        }

        let result = selectedErrors.filter((item, index) => {
            return selectedErrors.indexOf(item) === index;
        })

        for (let i = 0; i < result.length; i++) {

            let error = result[i];
            let errorSplit = error.split(".");
            let errorObject = {};

            if (errorSplit.length > 0) {
                errorSplit[0] === "WCAG2AA" ? errorObject.level = errorSplit[0].replace("WCAG2AA", "Nivel: AA") : errorObject.level = errorSplit[0].replace("WCAG2A", "Nivel: A ");

                errorObject.principle = errorSplit[1].replace("Principle", " | Principio: ");
                errorObject.guideline = errorSplit[2].replace("Guideline", " | Guia: ");
                errorObject.standard = " | Criterio: " + errorSplit[3];
                errorObject.technique = " | Técnica: " + errorSplit[4];
                errorObject.message = " | Mensaje: " + mapOfErrorMessages.get(error) + " |";
            }
        }

        for (let i = 0; i < result.length; i++) {
            let select = result[i];
            let selectedSplit = select.split(".");
            selected.push(selectedSplit[3]);
        }

        let standardFinal = selected.filter((item,index)=>{
            return selected.indexOf(item) === index;
        })

        let isAccesible;
        if (standardFinal.length > 8) {
            isAccesible = false;
        } else {
            isAccesible = true;
        }
        return isAccesible;
    }
}

module.exports = {
    "isAccesible": WCARGEvaluator.isAccesible
}    