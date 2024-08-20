const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000;

app.use(express.json());

let visitors = [];

app.post('/visit', (req, res) => {
  const { email } = req.body;
  if (email) {
    visitors.push(email);
    sendEmailNotification(email);
    res.status(200).send('Email recorded');
  } else {
    res.status(400).send('No email provided');
  }
});

function sendEmailNotification(email) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mobeen914butt@gmail.com',
      pass: 'mobeen914butt@gmail.com'
    }
  });

  let mailOptions = {
    from: 'mobeen914butt@gmail.com',
    to: 'mobeen914butt@gmail.com',
    subject: 'New Profile Visitor',
    text: `A new visitor has checked your profile: ${email}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
