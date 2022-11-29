const WCARGEvaluator = require("./utils/WCARGEvaluator.js");
const WCARGExecutor = require("./utils/WCARGExecutor")
const WCARGProcessing = require("./utils/WCARGProcessing");
const WCARGMailer = require("./mailer/WCARGMailer");
const WCARGReportGenerator = require("./reporter/WCARGReportGenerator")


async function run() {
    let urlsList = process.argv[2];
    let emailpipeline = process.argv[3];
    let urls = urlsList.split(",");
    let report = [];


    for (const url of urls) {
        let selectedErrors = [];
        let errorMessages = [];
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
    await WCARGMailer.sendEmail(dateString,emailpipeline)
}

run();
