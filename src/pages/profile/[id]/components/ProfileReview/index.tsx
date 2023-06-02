import Image from 'next/image'
import {
  BookReview,
  Date,
  ReviewContent,
  ReviewInfo,
  ReviewBook,
} from './styles'
import AvatarExample from '../../../../../assets/teste.jpg'
import { customStyles } from '@/styles/global'
import { Rating } from '@smastrom/react-rating'

export function ProfileReview() {
  return (
    <div>
      <Date>Hoje</Date>
      <BookReview>
        <ReviewInfo>
          <Image
            src={AvatarExample}
            width={108}
            height={152}
            alt="Capa do livro"
          />
          <ReviewBook>
            <div>
              <h4>O Conde de Monte Cristo</h4>
              <span>Alexandre Dumas</span>
            </div>
            <Rating
              style={{ maxWidth: 120, flexDirection: 'row' }}
              value={4.5}
              itemStyles={customStyles}
              className="starStyle"
              readOnly
              halfFillMode="svg"
            />
          </ReviewBook>
        </ReviewInfo>
        <ReviewContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quia unde
          iusto dicta deleniti, exercitationem eveniet dolorem consequuntur
          facere, at pariatur placeat obcaecati quidem ullam qui dolore non ea
          eligendi.
        </ReviewContent>
      </BookReview>
    </div>
  )
}
