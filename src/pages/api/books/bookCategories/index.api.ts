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

  const singleBookId = String(req.query.singleBookId)

  const bookCategories = await prisma.categoriesOnBooks.findMany({
    where: {
      book_id: singleBookId,
    },
    include: {
      category: true,
    },
  })

  return res.status(201).json({ bookCategories })
}
