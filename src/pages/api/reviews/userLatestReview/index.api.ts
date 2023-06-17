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

  const thisUserId = String(req.query.userId)

  const userLatestReview = await prisma.rating.findFirst({
    where: {
      user_id: thisUserId,
    },

    orderBy: {
      created_at: 'desc',
    },
    include: {
      user: true,
      book: true,
    },
  })

  return res.status(200).json(userLatestReview)
}
