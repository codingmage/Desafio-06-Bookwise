// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { rate, description, user, book } = req.body

  const rating = await prisma.rating.create({
    data: {
      description,
      rate,
      user,
      book,
    },
  })

  return res.status(201).json(rating)
}
