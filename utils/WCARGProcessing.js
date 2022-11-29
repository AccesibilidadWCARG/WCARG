const wcag = require("../constants/WCARGArgentina");
const errorMessagesUtil = require("./WCARGErrorMessage");
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
            let level;
            let principle;
            let standard;
            let technique;
            let guideline;

            if (wcagCode) {
                error.push(element.code);

                let errorSplit = element.code.split(".")

                if (errorSplit[0] === "WCAG2AA" ){
                    level = "| Nivel: AA |";
                }else {
                    level = "| Nivel: A |";
                }

                principle = errorSplit[1].replace("Principle", " | Principio: ");
                guideline = errorSplit[2].replace("Guideline", " | Pauta: ");
                standard = " | Criterio: " + errorSplit[3];
                technique = " | Técnica: " ;

                for (let x = 4 ; x < errorSplit.length;x++){
                    technique = technique + errorSplit[x];
                }

                let messageString = errorMessagesUtil.getErrorMessageByErrorCode(element.code,element.message);

                if (messageString.includes("\"{{id}}\"")){
                    messageString = messageString.replaceAll("\"{{id}}\"",element.selector)
                }

                if (messageString.includes("tiene una relación de contraste de {{valor}}:1")){
                    let index = element.message.lastIndexOf(":1");
                    let value =  element.message.substring(index-5,index);
                    messageString = messageString.replaceAll("{{valor}}",value);
                }

                let message = {
                    code: element.code,
                    message:messageString,
                    context: element.context,
                    selector: element.selector,
                    level:level,
                    principle:principle,
                    guideline:guideline,
                    standard:standard,
                    technique:technique
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

        errorMessages = errorMessages.filter((value, index, self) =>
                index === self.findIndex((t) => (
                    t.context === value.context && t.selector === value.selector
                ))
        )

        errorMessagesByError = errorMessagesByError.filter((value, index, self) =>
                index === self.findIndex((t) => (
                    t.context === value.context && t.selector === value.selector
                ))
        )

        return [errorMessages,errorMessagesByError]
    }
}

module.exports = {
    "processIssues": WCARGProcessing.processIssues
}