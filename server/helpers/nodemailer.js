const nodemailer = require('nodemailer');
const colors = require('colors');
const config = require('../config.json');

//YOU NEED TO HAVE service, email, and password SET UP IN THE CONFIG FILE FOR NODEMAILER TO WORK!

const transport = nodemailer.createTransport({
  service: config.service,
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: config.email,
    pass: config.password
  }
});

transport.set('oauth2_provision_cb', (user, renew, callback)=>{
  let accessToken = userTokens[user];
  if(!accessToken){
      return callback(new Error('Unknown user'));
  }else{
      return callback(null, accessToken);
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