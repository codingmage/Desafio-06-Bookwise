import Image from 'next/image'
import {
  BookBox,
  BookBoxContainer,
  BookDetails,
  BookDetailsContent,
  BookInfo,
  BookTitle,
  ExtraBoxContainer,
  CloseButton,
  Content,
  ModalOverlay,
  ReviewHead,
  ReviewList,
  GoToLogin,
  Description,
  DialogLogin,
  LoginContent,
  StarContainer,
} from './styles'
import AvatarExample from '../../assets/teste.jpg'
import { BookOpen, BookmarkSimple, X } from '@phosphor-icons/react'
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
import { Rating as StarComponent } from '@smastrom/react-rating'
import { customStyles } from '@/styles/global'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

interface BookBoxProps {
  type: 'big' | 'small' | 'medium'
  UserReviewForm: ReactNode
  bookCover: string
  bookTitle: string
  bookAuthor: string
  bookCategory: string
  bookPage: number
  thisBookId: string
}

export function BookBoxComponent({
  type,
  UserReviewForm,
  bookAuthor,
  bookCover,
  bookTitle,
  bookCategory,
  bookPage,
  thisBookId,
}: BookBoxProps) {
  const smallBox = type === 'small'

  const mediumBox = type === 'medium'

  const isLoggedIn = true

  const { data: bookAverageRating } = useQuery<number>(
    [thisBookId],
    async () => {
      const { data } = await api.get('/averageRating', {
        params: {
          bookId: thisBookId,
        },
      })
      return data
    },
  )

  return (
    <BookBoxContainer>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <BookBox type={type}>
            {smallBox ? (
              <Image
                src={bookCover}
                width={64}
                height={94}
                alt="Capa do livro"
              />
            ) : null}
            {mediumBox ? (
              <Image
                src={bookCover}
                width={74}
                height={104}
                alt="Capa do livro"
              />
            ) : null}
            <BookInfo>
              <div>
                <BookTitle>{bookTitle}</BookTitle>
                <span>{bookAuthor}</span>
              </div>
              <StarContainer>
                <StarComponent
                  style={{ maxWidth: 120 }}
                  value={bookAverageRating ?? (bookAverageRating || 0)}
                  itemStyles={customStyles}
                  className="starStyle"
                  readOnly
                  halfFillMode="svg"
                />
              </StarContainer>
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
                  <StarComponent
                    style={{ maxWidth: 240, flexDirection: 'row' }}
                    value={bookAverageRating ?? (bookAverageRating || 0)}
                    itemStyles={customStyles}
                    className="starStyle"
                    readOnly
                    halfFillMode="svg"
                  />
                </BookInfo>
              </BookBox>
              <ExtraBoxContainer>
                <BookDetails>
                  <BookDetailsContent>
                    <BookmarkSimple size={32} />
                    <div>
                      <span>Categoria</span>
                      <span>{bookCategory}</span>
                    </div>
                  </BookDetailsContent>
                  <BookDetailsContent>
                    <BookOpen size={32} />
                    <div>
                      <span>Páginas</span>
                      <span>{bookPage}</span>
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
                  <StarComponent
                    style={{ maxWidth: 120, flexDirection: 'row' }}
                    value={4.5}
                    itemStyles={customStyles}
                    className="starStyle"
                    readOnly
                    halfFillMode="svg"
                  />
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
                  <StarComponent
                    style={{ maxWidth: 120, flexDirection: 'row' }}
                    value={4.5}
                    itemStyles={customStyles}
                    className="starStyle"
                    readOnly
                    halfFillMode="svg"
                  />
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
                  <StarComponent
                    style={{ maxWidth: 120, flexDirection: 'row' }}
                    value={4.5}
                    itemStyles={customStyles}
                    className="starStyle"
                    readOnly
                    halfFillMode="svg"
                  />
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
                  <StarComponent
                    style={{ maxWidth: 120, flexDirection: 'row' }}
                    value={4.5}
                    itemStyles={customStyles}
                    className="starStyle"
                    readOnly
                    halfFillMode="svg"
                  />
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
