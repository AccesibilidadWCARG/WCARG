const accesibility = require("./utils/accesibility.js");
const wcag = require("./constants/WCARGArgentina");
const errorMessages = require("./utils/errorMessage");
const WCAGExecutor = require("./utils/WCAGExecutor")
const WCARGProcessing = require("./utils/WCARGProcessing");
const WCARGMailer = require("./mailer/WCARGMailer");




async function run() {
    let urlsList = process.argv[2];
    let urls = urlsList.split(",");

    let results = []

    for (let urlIndex = 0; urlIndex < urls.length; urlIndex++) {
        let selectedErrors = [];
        let errorMessages = [];
        let url = urls[urlIndex];
        let wcagExecutor =  new WCAGExecutor();
        let issues =  await  wcagExecutor.executeWCAG(url)

        WCARGProcessing.processIssues(issues,selectedErrors,errorMessages);
        let isAccesible = accesibility.isAccesible(url, selectedErrors, errorMessages);

        let result = {
            url: url,
            isAccesible:isAccesible,
            selectedErrors: selectedErrors,
            errorMessages: errorMessages
        }

        results.push(result)
    }

    await WCARGMailer.sendEmail({
        subject: "WCARG | Resultados de Accesibilidad Web",
        text: JSON.stringify(results),
        to: "gonza.a.fuentes@gmail.com;rlema.1989@gmail.com",
        from: process.env.EMAIL
    })
    //Enviar email aca
}


run();
