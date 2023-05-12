import Image from 'next/image'
import {
  BookReview,
  Complement,
  Rating,
  ReviewContent,
  ReviewInfo,
  ReviewText,
} from './styles'
import Avatar from '../../../assets/teste.jpg'
import { Star } from '@phosphor-icons/react'

export function Review() {
  return (
    <BookReview>
      <ReviewInfo>
        <Image src={Avatar} alt="Avatar do autor" width={52} />
        <div>
          <span>Jean Fellipe</span>
          <Complement>Hoje</Complement>
        </div>
        <Rating>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </Rating>
      </ReviewInfo>
      <ReviewContent>
        <Image src={Avatar} width={108} height={152} alt="Capa do livro" />
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
