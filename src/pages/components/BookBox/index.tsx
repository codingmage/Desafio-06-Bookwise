import Image from 'next/image'
import {
  BookBox,
  BookBoxContainer,
  BookDetails,
  BookDetailsContent,
  BookInfo,
  BookTitle,
  ExtraBoxContainer,
  Rating,
  CloseButton,
  Content,
  ModalOverlay,
} from './styles'
import Avatar from '../../../assets/teste.jpg'
import { BookOpen, BookmarkSimple, Star, X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

interface BookBoxProps {
  type: 'big' | 'small' | 'medium'
}

interface Data {
  dataType: string
}

export function BookBoxComponent({ type }: BookBoxProps, { dataType }: Data) {
  const smallBox = type === 'small'

  const mediumBox = type === 'medium'

  /*   const fullBox = type === 'big' */

  return (
    <BookBoxContainer>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <BookBox type={type}>
            {smallBox ? (
              <Image src={Avatar} width={64} height={94} alt="Capa do livro" />
            ) : null}
            {mediumBox ? (
              <Image src={Avatar} width={74} height={104} alt="Capa do livro" />
            ) : null}
            <BookInfo>
              <div>
                <BookTitle>
                  O Conde de Monte Cristo Abacaxi Banana Maça
                </BookTitle>
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
        </Dialog.Trigger>
        <Dialog.Portal>
          <ModalOverlay />
          <Content>
            <Dialog.Close asChild>
              <CloseButton>
                <X />
              </CloseButton>
            </Dialog.Close>
            <BookBoxContainer>
              <BookBox type={'big'}>
                <Image
                  src={Avatar}
                  width={172}
                  height={242}
                  alt="Capa do livro"
                />
                <BookInfo>
                  <div>
                    <h3>O Conde de Monte Cristo Abacaxi Banana Maça</h3>
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
              <ExtraBoxContainer>
                <BookDetails>
                  <BookDetailsContent>
                    <BookmarkSimple size={32} />
                    <div>
                      <span>Categoria</span>
                      <span>Aventura</span>
                    </div>
                  </BookDetailsContent>
                  <BookDetailsContent>
                    <BookOpen size={32} />
                    <div>
                      <span>Páginas</span>
                      <span>638</span>
                    </div>
                  </BookDetailsContent>
                </BookDetails>
              </ExtraBoxContainer>
            </BookBoxContainer>
          </Content>
        </Dialog.Portal>
      </Dialog.Root>
    </BookBoxContainer>
  )
}
