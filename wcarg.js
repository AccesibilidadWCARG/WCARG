const WCARGEvaluator = require("./utils/WCARGEvaluator.js");
const WCARGExecutor = require("./utils/WCARGExecutor")
const WCARGProcessing = require("./utils/WCARGProcessing");
const WCARGMailer = require("./mailer/WCARGMailer");
const WCARGReportGenerator = require("./reporter/WCARGReportGenerator")


async function run() {
    let urlsList = process.argv[2];
    let emailto = process.argv[3];
    //let email ="gonza.a.fuentes@gmail.com;rlema.1989@gmail.com";
    let urls = urlsList.split(",");
    //let emailto = emailList.split(";");

    let report = [];

    for (let urlIndex = 0; urlIndex < urls.length; urlIndex++) {
        let selectedErrors = [];
        let errorMessages = [];
        let url = urls[urlIndex];
        let wcagExecutor =  new WCARGExecutor();
        let issues =  await  wcagExecutor.executeWCAG(url)
        let results = WCARGProcessing.processIssues(issues,selectedErrors,errorMessages);
        let isAccesible = WCARGEvaluator.isAccesible(url, results[0], results[1]);

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

    await WCARGReportGenerator.createReport(report, dateString);


    //setTimeout(() => {  console.log("Generando Reporte report!"); }, 30000);

    await WCARGMailer.sendEmail(dateString,emailto)

    // Iterar sobre variabel report y verificar si algun sitio NO es accesible
    // Si el sitio no es accesible, retornar 1 y parar el pipeline y hacer que falle.

}


run();
