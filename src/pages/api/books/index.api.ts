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

  const categoryId = String(req.query.category)

  const books = await prisma.book.findMany({
    where: {
      categories: {
        some: {
          categoryId,
        },
      },
    },
    include: {
      categories: {
        include: {
          category: true,
        },
      },
      ratings: {
        include: {
          user: true,
        },
      },
    },
    /*     include: {
      categories: true,
    }, */
  })

  return res.status(200).json({ books })
}
