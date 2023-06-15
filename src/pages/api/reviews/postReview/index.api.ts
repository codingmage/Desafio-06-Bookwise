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

  try {
    const { rate, description, userId, bookId } = req.body

    const hasUserReview = await prisma.rating.findFirst({
      where: {
        book_id: bookId,
        user_id: userId,
      },
    })

    if (hasUserReview) {
      await prisma.rating.update({
        where: {
          id: hasUserReview.id,
        },
        data: {
          description,
          rate,
        },
      })
      return res.status(201).end()
    }

    await prisma.rating.create({
      data: {
        description,
        rate,
        book_id: bookId,
        user_id: userId,
      },
    })
    return res.status(201).end()
  } catch (error) {
    console.error(error)
    return res.status(400).end()
  }
}
