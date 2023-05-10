import Image from 'next/image'
import { BookBox, BookInfo, Rating } from './styles'
import Avatar from '../../../assets/teste.jpg'
import { Star } from '@phosphor-icons/react'

/* interface BookBoxProps {
  isFull?: boolean
}

export function BookBox({ isFull }: BookBoxProps) {
  return (
    <BookBoxTeste>
      aaaaa
      <h1>Teste</h1>
      <div>de Componente</div>
      {isFull ? <h2>funcionou?</h2> : null}
    </BookBoxTeste>
  )
}
 */

interface BookBoxProps {
  type: 'big' | 'small' | 'medium'
}

interface Data {
  dataType: string
}

export function BookBoxComponent({ type }: BookBoxProps, { dataType }: Data) {
  const smallBox = type === 'small'

  const mediumBox = type === 'medium'

  const fullBox = type === 'big'

  return (
    <BookBox type={type}>
      {smallBox ? (
        <Image src={Avatar} width={64} height={94} alt="Capa do livro" />
      ) : null}
      {mediumBox ? (
        <Image src={Avatar} width={74} height={104} alt="Capa do livro" />
      ) : null}
      {fullBox ? (
        <Image src={Avatar} width={172} height={242} alt="Capa do livro" />
      ) : null}
      <BookInfo>
        <div>
          <h4>O Conde de Monte Cristo sauhsauhasuhsauashuasasuh</h4>
          <span>Alexandre Dumas</span>
        </div>
        <Rating>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </Rating>
      </BookInfo>
    </BookBox>
  )
}