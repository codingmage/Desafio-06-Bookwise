import {
  PopularHeader,
  Container,
  HomeContainer,
  MainFeed,
  MostPopular,
  MostRecent,
  /* UserLatestDiv, */
} from './styles'
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
import { UserAuthSignIn } from '@/components/UserAuthSignIn'
/* import { useSession } from 'next-auth/react' */

export interface FullReview extends Rating {
  user: User
  book: Book
}

export default function Home() {
  /*   const { data: session } = useSession()

  const isLoggedIn = session?.user!

  const loggedInUserId = session?.user.id */

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

  /*   const { data: userLatestReview } = useQuery<FullReview>(
    ['lastUserRating'],
    async () => {
      const { data } = await api.get('/reviews/userLatestReview', {
        params: {
          userId: loggedInUserId,
        },
      })
      return data || null
    },
  ) */

  return (
    <Container>
      <Sidebar />
      <HomeContainer>
        <h2>
          <ChartLineUp size={32} /> Início
        </h2>
        <MainFeed>
          <MostRecent>
            {/*             {userLatestReview ? (
              <UserLatestDiv>
                <span>Sua última leitura</span>
                <Review
                  key={userLatestReview.id}
                  oneReview={userLatestReview}
                />
              </UserLatestDiv>
            ) : null} */}
            <span>Avaliações mais recentes</span>
            {lastReviews?.map((singleReview) => {
              return <Review key={singleReview.id} oneReview={singleReview} />
            })}
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
                UserAuthSignIn={<UserAuthSignIn />}
              />
            ))}
          </MostPopular>
        </MainFeed>
      </HomeContainer>
    </Container>
  )
}
