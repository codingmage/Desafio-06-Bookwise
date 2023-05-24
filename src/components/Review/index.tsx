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
import AvatarExample from '../../assets/teste.jpg'
import { customStyles } from '@/styles/global'
import { Rating } from '@smastrom/react-rating'

export function Review() {
  return (
    <BookReview>
      <ReviewInfo>
        <Avatar size="medium" />
        <div>
          <span>Jean Fellipe</span>
          <Complement>Hoje</Complement>
        </div>
        <StarContainer>
          <Rating
            style={{ maxWidth: 120 }}
            value={4.5}
            itemStyles={customStyles}
            className="starStyle"
            readOnly
            halfFillMode="svg"
          />
        </StarContainer>
      </ReviewInfo>
      <ReviewContent>
        <Image
          src={AvatarExample}
          width={108}
          height={152}
          alt="Capa do livro"
        />
        <ReviewText>
          <div>
            <h4>O Conde de Monte Cristo</h4>
            <span>Alexandre Dumas</span>
          </div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe vel
          provident beatae at mollitia, tenetur corrupti accusantium, rerum ut
          neque perspiciatis, eligendi blanditiis iusto adipisci. Maxime et non
          ab dignissimos!
        </ReviewText>
      </ReviewContent>
    </BookReview>
  )
}
