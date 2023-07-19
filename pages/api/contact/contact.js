

export default function handler(req, res) {
  
    let nodemailer = require('nodemailer');
    let ok;
    console.log(process.env.NODEMAILER_EMAIL);
    console.log(process.env.NODEMAILER_PW);
    const data = req.body;
    const message = {
      from: process.env.NODEMAILER_EMAIL,
      to: 'marmamohamed@gmail.com',
      subject: data.Email,
      text: data.Message,
      html: `<div>EMAIL : ${data.Email}</div>
      <div>TELE : ${data.Phone_number}</div>
      <div>PACK : ${data.Pack}</div>
      <div>MESSAGE : ${data.Message}</div>`,
    };


    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
    });

    
    if (req.method === 'POST') {
      transporter.sendMail(message, function(err, info) {
  
        if (err) {
          res.status(404).json({
              error: `Connection refused at ${err.address}`
          });
        } else {
          res.status(250).json({
              success: `Message delivered to ${info.accepted}`
          });
        }
      });


        console.log(data.Email);
        console.log(data.Phone_number);
        console.log(data.Pack);
        console.log(data.Message);
    }
    
  
        
  
    
    
    
  
    res.status(200).json({response : { rep : ok , Emai : data.Email , phone : data.Phone_number , pakk : data.Pack  , mess : data.Message  }})
  }
  