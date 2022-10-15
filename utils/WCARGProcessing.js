const wcag = require("../constants/WCARGArgentina");
const errorMessagesUtil = require("./errorMessage");
const WCARGOptions = require("../config/WCARGOptions");

class WCARGProcessing {

    static processWCAGAResults(results, error, errorMessages) {
        WCARGProcessing.iterateOverResults(results, error, errorMessages, WCARGOptions.A)
    }

    static processWCAGAAResults(results, error, errorMessages) {
        WCARGProcessing.iterateOverResults(results, error, errorMessages, WCARGOptions.AA)
    }

    static iterateOverResults(results, error, errorMessages, option) {

        results.issues.forEach(element => {

            let code = option === WCARGOptions.A ? element.code.substring(0, 36) : element.code.substring(0, 37);
            let wcagCode = wcag.containsWcag(code)
            let nivel;
            let principio;
            let criterio;
            let tecnica;
            let pauta;

            if (wcagCode) {
                error.push(element.code);

                let errorSplit = element.code.split(".")
                console.log("ERROR SPLIT" + errorSplit)

                if (errorSplit[0] === "WCAG2AA" ){
                    nivel = "| Nivel: AA |";
                }else {
                    nivel = "| Nivel: A |";
                }


                principio = errorSplit[1].replace("Principle", " | Principio: ");
                pauta = errorSplit[2].replace("Guideline", " | Pauta: ");
                criterio = " | Criterio: " + errorSplit[3];


                tecnica = " | Técnica: " ;

                for (let x = 4 ; x < errorSplit.length;x++){
                    tecnica = tecnica + errorSplit[x];
                }







                let message = {
                    code: element.code,
                    message: errorMessagesUtil.getErrorMessageByErrorCode(element.code),
                    context: element.context,
                    selector: element.selector,
                    nivel:nivel,
                    principio:principio,
                    pauta:pauta,
                    criterio:criterio,
                    tecnica:tecnica

                }

                errorMessages.push(message);
            }
        });
    }

    static processIssues(results, selectedErrors, errorMessages) {
        WCARGProcessing.processWCAGAResults(results[0], selectedErrors, errorMessages, WCARGOptions.A);
        WCARGProcessing.processWCAGAAResults(results[1], selectedErrors, errorMessages, WCARGOptions.AA);
       return WCARGProcessing.filterMessages(selectedErrors, errorMessages);
    }

    static filterMessages(errorMessages, errorMessagesByError) {

        let errorsSet = new Set();
        let newErrorMessajesArray = [];

        for (let i = 0; i < errorMessages.length; i++) {
            let em = errorMessages[i];
            if (!errorsSet.has(em)) {
                errorsSet.add(em)

                for (let ema = 0; ema < errorMessagesByError.length; ema++) {
                    if (em == errorMessagesByError[ema].code) {
                        let newEntry = {
                            code: errorMessagesByError[ema].code,
                            message: errorMessagesByError[ema].message,
                            context: errorMessagesByError[ema].context,
                            selector: errorMessagesByError[ema].selector,
                            nivel: errorMessagesByError[ema].nivel,
                            principio: errorMessagesByError[ema].principio,
                            pauta: errorMessagesByError[ema].pauta,
                            criterio: errorMessagesByError[ema].criterio,
                            tecnica: errorMessagesByError[ema].tecnica

                        }

                        console.log("NEW ENTRY*******************************************"+JSON.stringify(newEntry))
                        newErrorMessajesArray.push(newEntry);
                        break;
                    }
                }
            }
        }
        errorMessages = Array.from(errorsSet)
        errorMessagesByError = newErrorMessajesArray
        return [errorMessages,errorMessagesByError]
    }
}

module.exports = {
    "processIssues": WCARGProcessing.processIssues
}