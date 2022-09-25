const pally = require('pa11y')
const WCARGOptions = require("../config/WCARGOptions");

module.exports = class WCAGExecutor {

    constructor() {
    }

    async executeWCAG(url) {
        let resultsA = await pally(url, WCARGOptions.A)
        let resultsAA = await pally(url, WCARGOptions.AA)

        return [resultsA, resultsAA];
    }
}

