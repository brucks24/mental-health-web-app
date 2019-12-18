require('dotenv').config();
import nodemailer from 'nodemailer';

export function sendPanic(req, res) {
    console.log('---', req.body);
    var transport = nodemailer.createTransport({
        service: process.env.SERVICE,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })

    const mailOptions = {
        from: `[CRITICAL] UWW SAS <${process.env.EMAIL}>`,
        to: 'butlerja23@uww.edu',
        subject: '(TEST) PANIC BUTTON HAS BEEN PRESSED',
        text: `${req.body.name} has clicked the panic button`,
    }

    transport.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
            res.status(500).json({
                error: err
            });
        } else {
            console.log(`Email sent: ${info.response}`);
            res.status(200).json({
                info: info.response
            });
        }
    });
}