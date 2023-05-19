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
import { UserReviewForm } from '@/components/UserReviewForm'
import { BookRating } from '@/components/StarRating'

export default function Home() {
  // use navlink / link?
  // radix or mui for components
  // ver ignite feed pro comentário?

  /*   const isLoggedIn = false */

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
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            {/* clamplines or react-show-more-text for read more */}
          </MostRecent>
          <MostPopular>
            <PopularHeader>
              <span>Livros populares</span>
              <button>
                Ver todos <CaretRight />
              </button>
            </PopularHeader>
            <BookBoxComponent
              type="medium"
              UserReviewForm={<UserReviewForm />}
              StarRating={<BookRating />}
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
            />
          </MostPopular>
        </MainFeed>
      </HomeContainer>
    </Container>
  )
}
