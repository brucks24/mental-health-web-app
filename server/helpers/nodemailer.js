const nodemailer = require('nodemailer');
const colors = require('colors');
const config = require('../config.json');

const transport = nodemailer.createTransport({
  service: config.service,
  auth: {
    user: config.email,
    pass: config.password
  }
});

if (transport) {
  console.log(colors.green('Nodemailer is running'));
} else {
  console.log(colors.red('Nodemailer failed to start'));
}

module.exports = {
  transport
}