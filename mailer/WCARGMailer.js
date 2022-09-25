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

static sendEmail = async (emailOptions) => {
    let emailTransporter = await WCARGMailer.createTransporter();
    await emailTransporter.sendMail(emailOptions);
};
/*
sendEmail({
    subject: "Test",
    text: "I am sending an email from nodemailer!",
    to: "put_email_of_the_recipient",
    from: process.env.EMAIL
});*/

}

module.exports = {
 "sendEmail": WCARGMailer.sendEmail
}