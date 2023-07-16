import { mailOptions,transporter } from "@/config/nodemailer";



export default async function handler(req, res) {
  

    let ok;
    const body = req.body;
    if(req.method === 'POST')
    {

        try {

          await transporter.sendMail({
            ...mailOptions,
            subject : body.Message,
            text : "this is a test string",
            html : "<h1>text title </h1> <p>somme body text </p>"
          })
          //res.status(200).json({ success : true})
          
        } catch (error) {
          console.log(error);
          res.status(400).json({message : error.message})
        }
        
        if(body.Phone_number != '' && body.Email != '')
        {
            ok = "succes"
        }else {
          ok = "error"
        }
  
        console.log(body.Email);
        console.log(body.Phone_number);
        console.log(body.Pack);
        console.log(body.Message);
  
    }
    
    
  
    //res.status(200).json({response : { rep : ok , Emai : body.Email , phone : body.Phone_number , pakk : body.Pack  , mess : body.Message  }})
  }
  