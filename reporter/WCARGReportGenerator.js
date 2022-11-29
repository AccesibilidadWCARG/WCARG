const WCARGpdf = require("pdf-creator-node");
const WCARGfs = require("fs");
const WCARGhtml = WCARGfs.readFileSync("./reporter/report.html", "utf8");
const bitmap = WCARGfs.readFileSync(__dirname+ "\\wcarg.jpg");
const logo = bitmap.toString('base64');

class WCARGReportGenerator {
    static options = {
        format: "A4",
        orientation: "portrait",
        border: "20mm",
        footer: {
            height: "28mm",
            contents: {
                default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>',
            }
        }
    };

    static  getDocumentProperties = async (reportData,date) => {
        let dateStart = date ;
        let stringDate  = date.replaceAll("/","_").replaceAll(" ","_").replaceAll(":","_")
        let  document = {
            html: WCARGhtml,
            data: {
                reportEntry: reportData,
                date:dateStart,
                logo: logo
            },
            path: "./reporter-results/wcarg-report-"+stringDate+".pdf",
            type: "",
        };

       return document;
    };
    static createReport = async (reportData,date) => {
        let document = await WCARGReportGenerator.getDocumentProperties(reportData,date);

        let isOk = false;
       await  WCARGpdf.
        create(document, WCARGReportGenerator.options)
            .then((res) => {
                isOk =true;
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

module.exports = {
    "createReport": WCARGReportGenerator.createReport
}