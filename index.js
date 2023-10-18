import "dotenv/config";
import { log } from "node:console";
import { createTransport } from "nodemailer";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const mailServer = createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.FROM_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

log("email send start");

mailServer.sendMail(
  {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: "new msg",
    html: `
    <html>
    <head>
    <style>
    .text{
        color:red;
    }
    </style>
    </head>
    <body>
    <h1 class="text">Amila</h1>
    <img src="https://images.pexels.com/photos/1029208/pexels-photo-1029208.jpeg" alt="image" />
    </body>
    </html>
    `,
    attachments: [
      {
        filename: "amila.txt",
        path: join(__dirname, "amila.txt"),
      },
    ],
  },
  (err, infor) => {
    if (err) {
      log("can not send the email");
    } else {
      log("email sent");
    }
  }
);

log("email send end");
