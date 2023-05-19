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
  ReviewHead,
  ReviewList,
  GoToLogin,
  Description,
  DialogLogin,
  LoginContent,
} from './styles'
import AvatarExample from '../../assets/teste.jpg'
import { BookOpen, BookmarkSimple, Star, X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import {
  BookReview,
  Complement,
  ReviewContent,
  ReviewInfo,
  ReviewText,
} from '../Review/styles'
import GoogleLogo from '../../assets/logos_google-icon.svg'
import GithubLogo from '../../assets/github-fill.svg'
import { BookRating } from '../StarRating'

interface BookBoxProps {
  type: 'big' | 'small' | 'medium'
  UserReviewForm: ReactNode
  StarRating: ReactNode
}

export function BookBoxComponent({
  type,
  UserReviewForm,
  StarRating,
}: BookBoxProps) {
  const smallBox = type === 'small'

  const mediumBox = type === 'medium'

  /*   const fullBox = type === 'big' */

  const isLoggedIn = true

  return (
    <BookBoxContainer>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <BookBox type={type}>
            {smallBox ? (
              <Image
                src={AvatarExample}
                width={64}
                height={94}
                alt="Capa do livro"
              />
            ) : null}
            {mediumBox ? (
              <Image
                src={AvatarExample}
                width={74}
                height={104}
                alt="Capa do livro"
              />
            ) : null}
            <BookInfo>
              <div>
                <BookTitle>
                  O Conde de Monte Cristo Abacaxi Banana Maça
                </BookTitle>
                <span>Alexandre Dumas</span>
              </div>
              <Rating>{StarRating}</Rating>
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
                  src={AvatarExample}
                  width={172}
                  height={242}
                  alt="Capa do livro"
                />
                <BookInfo>
                  <div>
                    <h3>O Conde de Monte Cristo Abacaxi Banana Maça</h3>
                    <span>Alexandre Dumas</span>
                  </div>
                  {/*                   <Rating>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </Rating> */}
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

            {isLoggedIn ? (
              <div>
                <h4>Avaliações</h4>
                {UserReviewForm}
              </div>
            ) : (
              <ReviewHead>
                <h4>Avaliações</h4>
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <GoToLogin>
                      <span>Avaliar</span>
                    </GoToLogin>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <ModalOverlay />
                    <LoginContent>
                      <Dialog.Close asChild>
                        <CloseButton>
                          <X />
                        </CloseButton>
                      </Dialog.Close>
                      <Description>
                        Faça login para deixar sua avaliação.
                      </Description>
                      <DialogLogin>
                        <Image
                          src={GoogleLogo}
                          height={32}
                          alt="Logomarca da Google"
                        />
                        Entrar com Google
                      </DialogLogin>
                      <DialogLogin>
                        <Image
                          src={GithubLogo}
                          height={32}
                          alt="Logomarca do Github"
                        />
                        Entrar com Github
                      </DialogLogin>
                    </LoginContent>
                  </Dialog.Portal>
                </Dialog.Root>
              </ReviewHead>
            )}
            <ReviewList>
              <BookReview>
                <ReviewInfo>
                  <Image src={AvatarExample} alt="Avatar do autor" width={52} />
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
                  <ReviewText>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe vel provident beatae at mollitia, tenetur corrupti
                    accusantium, rerum ut neque perspiciatis, eligendi
                    blanditiis iusto adipisci. Maxime et non ab dignissimos!
                  </ReviewText>
                </ReviewContent>
              </BookReview>
              <BookReview>
                <ReviewInfo>
                  <Image src={AvatarExample} alt="Avatar do autor" width={52} />
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
                  <ReviewText>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe vel provident beatae at mollitia, tenetur corrupti
                    accusantium, rerum ut neque perspiciatis, eligendi
                    blanditiis iusto adipisci. Maxime et non ab dignissimos!
                  </ReviewText>
                </ReviewContent>
              </BookReview>
              <BookReview>
                <ReviewInfo>
                  <Image src={AvatarExample} alt="Avatar do autor" width={52} />
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
                  <ReviewText>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe vel provident beatae at mollitia, tenetur corrupti
                    accusantium, rerum ut neque perspiciatis, eligendi
                    blanditiis iusto adipisci. Maxime et non ab dignissimos!
                  </ReviewText>
                </ReviewContent>
              </BookReview>
              <BookReview>
                <ReviewInfo>
                  <Image src={AvatarExample} alt="Avatar do autor" width={52} />
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
                  <ReviewText>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe vel provident beatae at mollitia, tenetur corrupti
                    accusantium, rerum ut neque perspiciatis, eligendi
                    blanditiis iusto adipisci. Maxime et non ab dignissimos!
                  </ReviewText>
                </ReviewContent>
              </BookReview>
            </ReviewList>
          </Content>
        </Dialog.Portal>
      </Dialog.Root>
    </BookBoxContainer>
  )
}
