import {
  PopularHeader,
  Container,
  HomeContainer,
  MainFeed,
  MostPopular,
  MostRecent,
} from './styles'
/* import Link from 'next/link' */
import { CaretRight, ChartLineUp } from '@phosphor-icons/react'
import Sidebar from '../../components/Sidebar'
import { BookBoxComponent } from '../../components/BookBox'
import { Review } from '@/components/Review'
import { BookData } from '../explore/index.page'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { UserReviewForm } from '@/components/UserReviewForm'
import Link from 'next/link'
import { Book, Rating, User } from '@prisma/client'

/* import { useSession } from 'next-auth/react' */

export interface FullReview extends Rating {
  user: User
  book: Book
}

export default function Home() {
  // use navlink / link?
  // radix or mui for components
  // ver ignite feed pro comentário?

  /*   const isLoggedIn = false */

  /*   const { data: session } = useSession() */

  const { data: lastReviews } = useQuery<FullReview[]>(
    ['ratings'],
    async () => {
      const { data } = await api.get('/reviews/latestUserReviews')
      return data
    },
  )

  const { data: popularWithUsers, isLoading } = useQuery<BookData[]>(
    ['books'],
    async () => {
      const { data } = await api.get('/books/popularBooks')
      return data.popularBooks
    },
  )

  return (
    <Container>
      <Sidebar />
      <HomeContainer>
        <h2>
          <ChartLineUp size={32} /> Início
        </h2>
        <MainFeed>
          <MostRecent>
            {/* {isLoggedIn ? <span>Sua última leitura</span> : null} */}
            <span>Avaliações mais recentes</span>
            {lastReviews?.map((singleReview) => {
              return <Review key={singleReview.id} oneReview={singleReview} />
            })}
            {/* clamplines or react-show-more-text for read more */}
          </MostRecent>
          <MostPopular>
            <PopularHeader>
              <span>Livros populares</span>
              <Link href={'/explore'}>
                <button>
                  Ver todos <CaretRight />
                </button>
              </Link>
            </PopularHeader>
            {isLoading && <p>Loading...</p>}

            {popularWithUsers?.map((books) => (
              <BookBoxComponent
                key={books.id}
                type="medium"
                bookAuthor={books.author}
                bookCategory={books.categories}
                bookCover={books.cover_url}
                bookPage={books.total_pages}
                bookTitle={books.name}
                thisBookId={books.id}
                UserReviewForm={<UserReviewForm thisBookId={books.id} />}
              />
            ))}

            {/* <BookBoxComponent
              type="medium"
              UserReviewForm={<UserReviewForm />}
            />
            <BookBoxComponent
              type="medium"
              UserReviewForm={<UserReviewForm />}
            />
            <BookBoxComponent
              type="medium"
              UserReviewForm={<UserReviewForm />}
            />
            <BookBoxComponent
              type="medium"
              UserReviewForm={<UserReviewForm />}
            />
            <BookBoxComponent
              type="medium"
              UserReviewForm={<UserReviewForm />}
            /> */}
          </MostPopular>
        </MainFeed>
      </HomeContainer>
    </Container>
  )
}
