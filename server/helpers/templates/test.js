const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');

const readHTMLFile = (path, callback) => {
  fs.readFile(path, { encoding: 'utf-8' }, (err, html) => {
    if (err) {
      callback(err);
    } else {
      callback(null, html);
    }
  })
}

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'guitar423@gmail.com',
    pass: 'ifmqvdpskethfqok'
  }
});

readHTMLFile(`${__dirname}\\test.html`, (err, html) => {
  const template = handlebars.compile(html);
  const replacements = {
    photoUrl: 'https://res.cloudinary.com/stuathsuccess/image/upload/v1620187318/Jack_Butler_wl0esw.jpg',
    firstName: 'Jack',
    lastName: 'Butler',
    email: 'guitar423@gmail.com',
    phone: '608-338-3302',
    address: '901 W Starin Rd. Whitewater WI, 53593',
    link: 'http://localhost:3000/dashboard'
  };

  const htmlToSend = template(replacements);
  const mailOptions = {
    from: 'guitar423@gmail.com',
    to: 'butlerja23@uww.edu',
    subject: 'PANIC BUTTON ALERT',
    html: htmlToSend
  };

  transport.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      console.log('Email sent');
    }
  });
});