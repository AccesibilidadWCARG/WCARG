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

            if (wcagCode) {
                error.push(element.code);
                let message = {
                    code: element.code,
                    message: errorMessagesUtil.getErrorMessageByErrorCode(element.code)
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
                            message: errorMessagesByError[ema].message
                        }
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