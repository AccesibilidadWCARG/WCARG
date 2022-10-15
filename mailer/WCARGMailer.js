require("dotenv").config();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

class WCARGMailer {

static OAuth2 = google.auth.OAuth2;

static  createTransporter = async () => {

    const oauth2Client = new WCARGMailer.OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN
    });

    const accessToken = await new Promise((resolve, reject) => {
        oauth2Client.getAccessToken((err, token) => {
          try {
              if (err) {
                  console.log("Error porque no se puudo crear el token: " + err)
                  reject("Failed to create access token :(");
              }
              resolve(token);
          }
          catch (e){
              console.log("ERROR WCAG MAILER" + e)
          }


        });
    });

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: process.env.EMAIL,
            accessToken,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN
        }
    });

    return transporter;
};

static sendEmail = async (dateString) => {
    let emailTransporter = await WCARGMailer.createTransporter();
    let fechaOriginal = dateString ;
    let stringFecha  = dateString.replaceAll("/","_").replaceAll(" ","_").replaceAll(":","_")

    await emailTransporter.sendMail({
        subject: "WCARG | Resultados de Accesibilidad Web",
        text: "Reporte  de Accesibilidad Web con fecha  "  + fechaOriginal,
        to: "gonza.a.fuentes@gmail.com;rlema.1989@gmail.com",
        from: process.env.EMAIL,
        attachments: [{
            filename: 'reporte-accesibilidad.pdf',
            path: './reporter-results/wcarg-report-'+stringFecha+'.pdf',
            contentType: 'application/pdf'
        }],
    });
};
}

module.exports = {
 "sendEmail": WCARGMailer.sendEmail
}