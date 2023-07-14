// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  
  let ok;
  const body = req.body;
  if(req.method === 'POST')
  {
      
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
  
  

  res.status(200).json({response : { rep : ok , Emai : body.Email , phone : body.Phone_number , pakk : body.Pack  , mess : body.Message  }})
}
