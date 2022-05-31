"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
const sendmail =  async (req,res,next) =>{
  try {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: "email-smtp.ca-central-1.amazonaws.com",
    port: 2587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "AKIARBYO3HCNLODELX7B", // generated ethereal user
      pass: "BMWV7HVhaWrgjT5uJRBQtQYn8aLenSuJpN7qeYnp7oM0", // generated ethereal password
    },
    
  });
  console.log(req.body);
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "partyoakville@aerosportsparks.ca", // sender address
    to: req.body.locationEmail, // list of receivers
    subject: req.body.subject, // Subject line
    replyTo:req.body.email,
    //text: req.message, // plain text body
    html: "<p>Event Date:" + req.body.eventDate +" "+ req.body.eventtime  + "<br/> Name:" + req.body.name +"<br/>phone:"+ req.body.phone + "<br/>" + req.body.message , // html body
  });
  console.log("after send");

res.status(200).send();

} catch (error) {
  console.log(error);
  res.status(400).send(error.message);
} 
}



module.exports = {
  sendmail,
}