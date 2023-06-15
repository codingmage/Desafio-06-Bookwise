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

  /*  const { userId, bookId } = req.body */

  const userId = String(req.query.userId)
  const bookId = String(req.query.bookId)

  const ownReview = await prisma.rating.findFirst({
    where: {
      book_id: bookId,
      user_id: userId,
    },
    include: {
      user: true,
    },
  })

  return res.status(200).json(ownReview)
}
