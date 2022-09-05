const pally = require('pa11y')
const isAccesible = require("./util/accesibilityUtil.js")
const wcag = require("./util/wcagArgentina")
const errorMessages = require("./util/errorMessageUtil")

var text = process.argv[2];

//let text = "https://www.eventbrite.com/ ,https://www.musimundo.com/";
const myArray = text.split(",");


const optionsAA = {
        standard: 'WCAG2AA',
        includeNotices: false,
        includeWarnings: false,
        wait: 3000,
        log: {
                debug: console.log,
                error: console.error,
                info: console.log
        }
};

const optionsA = {
        standard: 'WCAG2A',
        includeNotices: false,
        includeWarnings: false,
        wait: 3000,
        log: {
                debug: console.log,
                error: console.error,
                info: console.log
        }
};

async function run() {

let selectedErrors = [];
let mapOfErrors = new Map();
let mapOfErrorMessages = new Map();

for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i])       
        var URL = myArray[i];

const resultsAA = await pally (URL,optionsAA);
const resultsA = await pally (URL,optionsA);

resultsAA.issues.forEach(element => {
        let code = element.code.substring(0,37);
        let wcagCode = wcag.containsWcag(code)
        if (wcagCode){
                selectedErrors.push(element.code);
                mapOfErrorMessages.set(element.code,errorMessages.getErrorMessageByErrorCode(element.code));
        }
});

resultsA.issues.forEach(element => {
        let code = element.code.substring(0,36);
        let wcagCode = wcag.containsWcag(code);
        if ( wcagCode){
                selectedErrors.push(element.code);
                mapOfErrorMessages.set(element.code,errorMessages.getErrorMessageByErrorCode(element.code));
        }
});

let pageUrl  = resultsAA.pageUrl;
console.log(pageUrl)

isAccesible.isAccesible(pageUrl,selectedErrors,mapOfErrorMessages);

}

}



run();
