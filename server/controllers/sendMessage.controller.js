/*
*	Coded by: Solomon Paprocki (originally copied from panic.controller.js)
*	Time: Spring 2021 Semester
*	Description: This is the Send Message Button Functionality.  It will send an email to the Support Team Member.
*/

const { transport } = require('../helpers/nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');
const appDir = path.dirname(require.main.filename);
const db = require('../helpers/db');
const User = db.User;

const readHTMLFile = (path, callback) => {
  fs.readFile(path, { encoding: 'utf-8' }, (err, html) => {
    if (err) {
      callback(err);
    } else {
      callback(null, html);
    }
  })
}

function sendSendMessageEmail(req, res) {
  console.log('Send Message button pressed. Initializing response...');
  const sendMessageReasons = req.body;
  const userId = req.user.sub;

  User.findById(userId).select('-hash').then(user => {
    if (user) {
      readHTMLFile(`${appDir}\\helpers\\templates\\sendMessageEmail.html`, (err, html) => {
        const template = handlebars.compile(html);
        const replacements = {
          sendMessageReasons: sendMessageReasons,
          photoUrl: user.photoUrl,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: '999-999-9999',
          address: '901 W Starin Rd. Whitewater WI, 53593',
          link: 'http://localhost:3000/dashboard'
        };

        const htmlToSend = template(replacements);
        const mailOptions = {
          from: user.email,
          to: 'paprockisj04@uww.edu',
          subject: 'sendMessage BUTTON ALERT',
          html: htmlToSend
        };

        transport.sendMail(mailOptions, (err, info) => {
          if (err) {
            console.log(err)
            return res.status(500).json({
              error: err
            });
          } else {
            console.log(`Email sent: ${info.response}`);
            return res.status(200).json({
              message: 'Support team has been notified'
            });
          }
        });
      });
    } else {
      return res.status(404).json({ message: 'ID not found' });
    }
  }).catch(err => {
    console.log(err);
    return res.status(500).json({ error: err.message });
  });
}

module.exports = {
  sendSendMessageEmail
}