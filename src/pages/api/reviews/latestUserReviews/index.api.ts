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

  const latestReviews = await prisma.rating.findMany({
    orderBy: {
      created_at: 'desc',
    },
    take: 5,
    include: {
      user: true,
      book: true,
    },
  })

  return res.status(200).json(latestReviews)
}
