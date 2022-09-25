const accesibility = require("./utils/WCARGEvaluator.js");
const WCAGExecutor = require("./utils/WCAGExecutor")
const WCARGProcessing = require("./utils/WCARGProcessing");
const WCARGMailer = require("./mailer/WCARGMailer");
const WCARGReporter = require("./reporter/WCARReporter")


async function run() {
    let urlsList = process.argv[2];
    let urls = urlsList.split(",");

    let report = [];

    for (let urlIndex = 0; urlIndex < urls.length; urlIndex++) {
        let selectedErrors = [];
        let errorMessages = [];
        let url = urls[urlIndex];
        let wcagExecutor =  new WCAGExecutor();
        let issues =  await  wcagExecutor.executeWCAG(url)

        let results = WCARGProcessing.processIssues(issues,selectedErrors,errorMessages);
        let isAccesible = accesibility.isAccesible(url, results[0], results[1]);

        let reportEntry = {
            url: url,
            isAccesible:isAccesible,
            selectedErrors: results[0],
            errorMessages: results[1]
        }
        report.push(reportEntry)
    }

    await WCARGMailer.sendEmail({
        subject: "WCARG | Resultados de Accesibilidad Web",
        html: JSON.stringify(WCARGReporter.createHTML(report)),
        to: "gonza.a.fuentes@gmail.com",
        from: process.env.EMAIL
    })
    //Enviar email aca
}


run();
