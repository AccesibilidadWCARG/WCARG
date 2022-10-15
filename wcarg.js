const accesibility = require("./utils/WCARGEvaluator.js");
const WCAGExecutor = require("./utils/WCAGExecutor")
const WCARGProcessing = require("./utils/WCARGProcessing");
const WCARGMailer = require("./mailer/WCARGMailer");
const WCARGReportGenerator = require("./reporter/WCARGReportGenerator")


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

    let date = new Date();
    let dateString =  date.toLocaleDateString() + " " + date.toLocaleTimeString();

    let isGenerated = WCARGReportGenerator.createReport(report, dateString);
    setTimeout(() => {  console.log("Generando Reporte report!"); }, 10000);

    await WCARGMailer.sendEmail(dateString)

    // Iterar sobre variabel report y verificar si algun sitio NO es accesible
    // Si el sitio no es accesible, retornar 1 y parar el pipeline y hacer que falle.

}


run();
