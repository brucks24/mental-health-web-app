import HttpStatus from 'http-status-codes';
import nodemailer from 'nodemailer';

export function sendPanic(req, res) {
    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "763a1145ed6ff9",
          pass: "590d7a828893fa"
        }
      });

    const mailOptions = {
        from: 'guitar423@gmail.com',
        to: 'butlerja23@uww.edu',
        subject: '(TEST) PANIC BUTTON HAS BEEN PRESSED',
        text: `Someone has clicked the panic button`
    }

    transport.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            });
        } else {
            console.log(`Email sent: ${info.response}`);
            res.status(HttpStatus.OK).json({
                info: info.response
            });
        }
    });
}