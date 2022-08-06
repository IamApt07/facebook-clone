// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
)
 {
  fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data) =>{
    if(err){
      res.status(500).json({error: "No Such Blog Found"})
    }
    console.log(req.query.slug)
    res.status(200).json(JSON.parse(data))
  })
  
}
