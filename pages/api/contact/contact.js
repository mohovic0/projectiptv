

export default function handler(req, res) {
  
    let nodemailer = require('nodemailer');
    //let ok;
    //console.log(process.env.NODEMAILER_EMAIL);
    //console.log(process.env.NODEMAILER_PW);
    const data = req.body;
    const message = {
      from: process.env.NODEMAILER_EMAIL,
      to: process.env.NODEMAILER_EMAIL,
      subject: data.Email,
      text: data.Message,
      html: `<div><h2>Nom : ${data.Full_name}</h2></div>
      <div><h2>EMAIL : ${data.Email}</h2></div>
      <div><h2>TELE : ${data.Phone_number}</h2></div>
      <div><h2>DEVICE_APP : ${data.Device_app}</h2></div>
      <div><h2>PACK : ${data.Pack}</h2></div>
      <div><h2>DEVICE_MAC : ${data.Device_mac}</h2></div>
      <div><h2>VOD_LANGUAGE : ${data.Vod_langue}</h2></div>
      <div><h2>PAYMENT_METHOD : ${data.Payment}</h2></div>
      <div><h2>MESSAGE : ${data.Message}</h2></div>`,
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
         
          //ok = "error";
        } else {
          res.status(250).json({
              success: `Message delivered to ${info.accepted}`
          });
          //ok = "success";
         
        }
      });


        console.log(data.Email);
        console.log(data.Phone_number);
        console.log(data.Pack);
        console.log(data.Message);
        
        //console.log(ok);
    }
    
  
        
  
    
    
    
  
    //res.status(200).json({response : { rep : ok , Emai : data.Email , phone : data.Phone_number , pakk : data.Pack  , mess : data.Message  }})
  }
  