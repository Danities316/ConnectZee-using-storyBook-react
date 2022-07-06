// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { detectContentType } from "next/dist/server/image-optimizer";

export default async function handler(req, res) {
  // console.log("req", req.method); => returns GET


  if(req.method === 'GET'){
  const response = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/post?`,
  {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`
      },
    }
  );

  // converting the data to a json
  const { records } = await response.json();

  const posts = records.map((records) => {
    return {
      id: records.id,
      ...records.fields,
    };
  });

  res.status(200).json({ posts });
  return;
};

if(req.method === 'POST'){
  const { post }  = JSON.parse(req.body);
  
  const data = {
    records: [
      {
        fields: {
          post,
          date: new Date().toISOString()
        }
      }
    ]
  }
  const response = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/post?`,
  {
      method: 'POST',    
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
  );
    console.log('response', response);
  res.status(20).json({ response });
  return;
}

}
