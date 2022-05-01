// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await fetch('https://c9u9pjcti3.execute-api.us-east-1.amazonaws.com/Prod/hello/')
  const users = await response.json()
  users as JSON
  res.status(200).json(users)
}
