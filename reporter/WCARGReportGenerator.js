const WCARGpdf = require("pdf-creator-node");
const WCARGfs = require("fs");
const WCARGhtml = WCARGfs.readFileSync("./reporter/report.html", "utf8");

class WCARGReportGenerator {
    static options = {
        format: "A4",
        orientation: "portrait",
        border: "20mm",
      //  header: {
      //      height: "60px",
      //      contents: '<div style="text-align: center;background-color: #31d2f2; font-size: 25px; ">WCARG - Reporte de Accesibilidad</div>'
      //  },
        footer: {
            height: "28mm",
            contents: {
               // first: 'Cover page',
               // 2: 'Second page', // Any page number is working. 1-based index
                default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
              //  last: 'Last Page'
            }
        }
    };

    static createReport (reportData, fecha){

        let  document = {
            html: WCARGhtml,
            data: {
                reportEntry: reportData,
                fecha:fecha
            },
            path: "./reporter-results/wcarg-report.pdf",
            type: "",
        };

        let isOk =false;
        WCARGpdf.
        create(document, WCARGReportGenerator.options)
            .then((res) => {
                console.log(res);
                isOk =true;
            })
            .catch((error) => {
            console.error(error);
            });

        return isOk;
    }
}

module.exports = {
    "createReport": WCARGReportGenerator.createReport
}