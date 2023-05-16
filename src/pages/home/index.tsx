import {
  PopularHeader,
  BookReview,
  Container,
  HomeContainer,
  MainFeed,
  MostPopular,
  MostRecent,
  ReviewContent,
  ReviewInfo,
  Complement,
  Rating,
} from './styles'
import Image from 'next/image'
/* import Link from 'next/link' */
import { CaretRight, ChartLineUp, Star } from '@phosphor-icons/react'
import Sidebar from '../../components/Sidebar'
import Avatar from '../../assets/teste.jpg'
import { BookBoxComponent } from '../../components/BookBox'
import { Review } from '@/components/Review'

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
            <BookBoxComponent type="medium" />
            <BookBoxComponent type="medium" />
            <BookBoxComponent type="medium" />
            <BookBoxComponent type="medium" />
            <BookBoxComponent type="medium" />
          </MostPopular>
        </MainFeed>
      </HomeContainer>
    </Container>
  )
}
