// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const bookId = String(req.query.bookId)

  const reviews = await prisma.rating.findMany({
    where: {
      book_id: bookId,
    },
    include: {
      user: true,
    },
  })

  return res.status(200).json(reviews)
}
