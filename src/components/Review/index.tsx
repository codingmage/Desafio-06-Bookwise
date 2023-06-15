import Image from 'next/image'
import {
  BookReview,
  Complement,
  ReviewContent,
  ReviewInfo,
  ReviewText,
  StarContainer,
} from './styles'
import { Avatar } from '../Avatar'
import { customStyles } from '@/styles/global'
import { Rating } from '@smastrom/react-rating'
import { FullReview } from '@/pages/home'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import ClampLines from 'react-clamp-lines'
import Link from 'next/link'

interface FullReviewProps {
  oneReview: FullReview
}

export function Review({ oneReview }: FullReviewProps) {
  const reviewAuthor = oneReview.user

  const formattedDate = new Date(oneReview.created_at)

  const reviewBook = oneReview.book

  return (
    <BookReview>
      <ReviewInfo>
        <Avatar image={reviewAuthor.avatar_url} size="medium" />
        <div>
          <Link href={`/profile/${reviewAuthor.id}`}>
            <span>{reviewAuthor.name}</span>
          </Link>
          <Complement>
            {formatDistanceToNow(formattedDate, {
              addSuffix: true,
              locale: ptBR,
            })}
          </Complement>
        </div>
        <StarContainer>
          <Rating
            style={{ maxWidth: 120 }}
            value={oneReview.rate}
            itemStyles={customStyles}
            className="starStyle"
            readOnly
            halfFillMode="svg"
          />
        </StarContainer>
      </ReviewInfo>
      <ReviewContent>
        <Image
          src={reviewBook.cover_url}
          width={108}
          height={152}
          alt="Capa do livro"
        />
        <ReviewText>
          <div>
            <h4>{reviewBook.name}</h4>
            <span>{reviewBook.author}</span>
          </div>
          <ClampLines
            text={oneReview.description}
            id="default"
            lines={2}
            buttons={true}
            ellipsis="..."
            className="clamped"
            moreText="Ver mais"
            lessText="Ver menos"
          />
          {/*           {oneReview.description} */}
        </ReviewText>
      </ReviewContent>
    </BookReview>
  )
}
