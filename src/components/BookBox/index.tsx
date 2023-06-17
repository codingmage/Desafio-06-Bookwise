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
  StarContainer,
  UserRatingStart,
  ReadTag,
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
import { Rating as StarComponent } from '@smastrom/react-rating'
import { customStyles } from '@/styles/global'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { CategoriesOnBooks, Category, Rating, User } from '@prisma/client'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from '../Avatar'
import { useSession } from 'next-auth/react'

export interface ExtendedCategory extends CategoriesOnBooks {
  category: Category
}

export interface RatingWithUser extends Rating {
  user: User
}

interface BookBoxProps {
  type: 'big' | 'small' | 'medium'
  UserReviewForm: ReactNode
  UserAuthSignIn: ReactNode
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
  UserAuthSignIn,
  bookAuthor,
  bookCover,
  bookTitle,
  bookCategory,
  bookPage,
  thisBookId,
}: BookBoxProps) {
  const smallBox = type === 'small'

  const mediumBox = type === 'medium'

  const session = useSession()

  const isLoggedIn = session.data?.user!

  const loggedInUserId = session.data?.user.id

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

  const { data: pastUserReview } = useQuery<RatingWithUser>(
    [bookReviews],
    async () => {
      const { data } = await api.get('/reviews/userOwnReview', {
        params: {
          bookId: thisBookId,
          userId: loggedInUserId,
        },
      })
      return data
    },
  )

  const hasPastReview = pastUserReview

  const tags = bookCategory.map((tag) => {
    return tag.category.name
  })

  const formattedTags = tags.join(', ')

  return (
    <BookBoxContainer>
      <div> {hasPastReview ? <ReadTag>LIDO</ReadTag> : null}</div>
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
                {hasPastReview ? (
                  <div>
                    <UserRatingStart>Sua avaliação:</UserRatingStart>
                    <BookReview key={pastUserReview.id}>
                      <ReviewInfo>
                        <Avatar
                          image={session.data?.user.avatar_url || null}
                          size="medium"
                        />
                        <div>
                          <span>{pastUserReview.user.name}</span>
                          <Complement>
                            {formatDistanceToNow(
                              new Date(pastUserReview.created_at),
                              {
                                addSuffix: true,
                                locale: ptBR,
                              },
                            )}
                          </Complement>
                        </div>
                        <StarComponent
                          style={{ maxWidth: 120, flexDirection: 'row' }}
                          value={pastUserReview.rate}
                          itemStyles={customStyles}
                          className="starStyle"
                          readOnly
                          halfFillMode="svg"
                        />
                      </ReviewInfo>
                      <ReviewContent>
                        <ReviewText>{pastUserReview.description}</ReviewText>
                      </ReviewContent>
                    </BookReview>
                  </div>
                ) : null}
                <h4>Avaliações</h4>
                {UserReviewForm}
              </div>
            ) : (
              <ReviewHead>
                <h4>Avaliações</h4>
                {UserAuthSignIn}
              </ReviewHead>
            )}
            <ReviewList>
              {bookReviews?.map((oneReview) => {
                const reviewAuthor = oneReview.user
                const reviewDate = new Date(oneReview.created_at)
                return (
                  <BookReview key={oneReview.id}>
                    <ReviewInfo>
                      <Avatar image={reviewAuthor.avatar_url} size="medium" />
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
