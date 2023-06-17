import Image from 'next/image'
import {
  BookReview,
  ReviewDate,
  ReviewContent,
  ReviewInfo,
  ReviewBook,
} from './styles'
import { customStyles } from '@/styles/global'
import { Rating as StarComponent } from '@smastrom/react-rating'
import { Book, Rating } from '@prisma/client'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface FullProfileReview extends Rating {
  book: Book
}

interface ProfileReviewProps {
  oneProfileReview: FullProfileReview
}

export function ProfileReview({ oneProfileReview }: ProfileReviewProps) {
  const reviewDate = new Date(oneProfileReview.created_at)

  const reviewBook = oneProfileReview.book

  return (
    <div>
      <ReviewDate>
        {format(reviewDate, 'PPP', {
          locale: ptBR,
        })}
      </ReviewDate>
      <BookReview>
        <ReviewInfo>
          <Image
            src={reviewBook.cover_url}
            width={108}
            height={152}
            alt="Capa do livro"
          />
          <ReviewBook>
            <div>
              <h4>{reviewBook.name}</h4>
              <span>{reviewBook.author}</span>
            </div>
            <StarComponent
              style={{ maxWidth: 120, flexDirection: 'row' }}
              value={oneProfileReview.rate}
              itemStyles={customStyles}
              className="starStyle"
              readOnly
              halfFillMode="svg"
            />
          </ReviewBook>
        </ReviewInfo>
        <ReviewContent>{oneProfileReview.description}</ReviewContent>
      </BookReview>
    </div>
  )
}
