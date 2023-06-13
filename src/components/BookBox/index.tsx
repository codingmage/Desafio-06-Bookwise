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
import { CategoriesOnBooks, Category, Rating, User } from '@prisma/client'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export interface ExtendedCategory extends CategoriesOnBooks {
  category: Category
}

export interface RatingWithUser extends Rating {
  user: User
}

interface BookBoxProps {
  type: 'big' | 'small' | 'medium'
  UserReviewForm: ReactNode
  bookCover: string
  bookTitle: string
  bookAuthor: string
  bookCategory: ExtendedCategory[]
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
      const { data } = await api.get('/books/averageRating', {
        params: {
          bookId: thisBookId,
        },
      })
      return data
    },
  )

  const { data: bookReviews } = useQuery<RatingWithUser[]>(
    [thisBookId, bookTitle],
    async () => {
      const { data } = await api.get('/reviews/bookReviews', {
        params: {
          bookId: thisBookId,
        },
      })
      return data
    },
  )

  const tags = bookCategory.map((tag) => {
    return tag.category.name
  })

  const formattedTags = tags.join(', ')

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
                  src={bookCover}
                  width={172}
                  height={242}
                  alt="Capa do livro"
                />
                <BookInfo>
                  <div>
                    <h3>{bookTitle}</h3>
                    <span>{bookAuthor}</span>
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
                    <BookmarkSimple size={42} />
                    <div>
                      <span>Categorias</span>
                      <span>{formattedTags}</span>
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
              {bookReviews?.map((oneReview) => {
                const reviewAuthor = oneReview.user
                const reviewDate = new Date(oneReview.created_at)
                return (
                  <BookReview key={oneReview.id}>
                    <ReviewInfo>
                      <Image
                        src={reviewAuthor.avatar_url!}
                        alt="Avatar do autor"
                        width={52}
                        height={52}
                      />
                      <div>
                        <span>{reviewAuthor.name}</span>
                        <Complement>
                          {formatDistanceToNow(reviewDate, {
                            addSuffix: true,
                            locale: ptBR,
                          })}
                        </Complement>
                      </div>
                      <StarComponent
                        style={{ maxWidth: 120, flexDirection: 'row' }}
                        value={oneReview.rate}
                        itemStyles={customStyles}
                        className="starStyle"
                        readOnly
                        halfFillMode="svg"
                      />
                    </ReviewInfo>
                    <ReviewContent>
                      <ReviewText>{oneReview.description}</ReviewText>
                    </ReviewContent>
                  </BookReview>
                )
              })}
            </ReviewList>
          </Content>
        </Dialog.Portal>
      </Dialog.Root>
    </BookBoxContainer>
  )
}
