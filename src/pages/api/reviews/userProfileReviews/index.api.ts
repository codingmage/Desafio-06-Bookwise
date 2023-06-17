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

  const userId = String(req.query.userId)

  const reviews = await prisma.rating.findMany({
    where: {
      user_id: userId,
    },
    include: {
      book: {
        include: {
          categories: {
            include: {
              category: true,
            },
          },
        },
      },
    },
    orderBy: {
      created_at: 'desc',
    },
  })

  /*   const categoryNames = reviews.map((categories) => {
    return categories.book.categories.map((c) => {
      return c.category.name
    })
  })

  for (const categoryArray of categoryNames) {
    for (const category of categoryArray) {
    }
  }
 */
  return res.status(200).json(reviews)
}
