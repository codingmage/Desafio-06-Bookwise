import {
  BookBox,
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
  Review,
  BookInfo,
  Rating,
} from './styles'
import Image from 'next/image'
import Link from 'next/link'
import { CaretRight, ChartLineUp, Star } from '@phosphor-icons/react'
import Sidebar from '../components/Sidebar'
import Avatar from '../../assets/teste.jpg'

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
            <BookReview>
              <ReviewInfo>
                <Image src={Avatar} alt="Avatar do autor" width={52} />
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
                <Image
                  src={Avatar}
                  width={108}
                  height={152}
                  alt="Capa do livro"
                />
                <Review>
                  <div>
                    <h4>O Conde de Monte Cristo</h4>
                    <span>Alexandre Dumas</span>
                  </div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe vel provident beatae at mollitia, tenetur corrupti
                  accusantium, rerum ut neque perspiciatis, eligendi blanditiis
                  iusto adipisci. Maxime et non ab dignissimos!
                </Review>
              </ReviewContent>
            </BookReview>
            <BookReview>
              <ReviewInfo>
                <Image src={Avatar} alt="Avatar do autor" width={52} />
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
                <Image
                  src={Avatar}
                  width={108}
                  height={152}
                  alt="Capa do livro"
                />
                <Review>
                  <div>
                    <h4>O Conde de Monte Cristo</h4>
                    <span>Alexandre Dumas</span>
                  </div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe vel provident beatae at mollitia, tenetur corrupti
                  accusantium, rerum ut neque perspiciatis, eligendi blanditiis
                  iusto adipisci. Maxime et non ab dignissimos!
                </Review>
              </ReviewContent>
            </BookReview>
            <BookReview>
              <ReviewInfo>
                <Image src={Avatar} alt="Avatar do autor" width={52} />
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
                <Image
                  src={Avatar}
                  width={108}
                  height={152}
                  alt="Capa do livro"
                />
                <Review>
                  <div>
                    <h4>O Conde de Monte Cristo</h4>
                    <span>Alexandre Dumas</span>
                  </div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe vel provident beatae at mollitia, tenetur corrupti
                  accusantium, rerum ut neque perspiciatis, eligendi blanditiis
                  iusto adipisci. Maxime et non ab dignissimos!
                </Review>
              </ReviewContent>
            </BookReview>
            <BookReview>
              <ReviewInfo>
                <Image src={Avatar} alt="Avatar do autor" width={52} />
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
                <Image
                  src={Avatar}
                  width={108}
                  height={152}
                  alt="Capa do livro"
                />
                <Review>
                  <div>
                    <h4>O Conde de Monte Cristo</h4>
                    <span>Alexandre Dumas</span>
                  </div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe vel provident beatae at mollitia, tenetur corrupti
                  accusantium, rerum ut neque perspiciatis, eligendi blanditiis
                  iusto adipisci. Maxime et non ab dignissimos!
                </Review>
              </ReviewContent>
            </BookReview>
            {/* clamplines or react-show-more-text for read more */}
          </MostRecent>
          <MostPopular>
            <PopularHeader>
              <span>Livros populares</span>
              <button>
                Ver todos <CaretRight />
              </button>
            </PopularHeader>

            <BookBox>
              <Image src={Avatar} width={64} height={94} alt="Capa do livro" />
              <BookInfo>
                <div>
                  <h4>O Conde de Monte Cristo</h4>
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
            <BookBox>
              <Image src={Avatar} width={64} height={94} alt="Capa do livro" />
              <BookInfo>
                <div>
                  <h4>O Conde de Monte Cristo</h4>
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
            <BookBox>
              <Image src={Avatar} width={64} height={94} alt="Capa do livro" />
              <BookInfo>
                <div>
                  <h4>O Conde de Monte Cristo</h4>
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
            <BookBox>
              <Image src={Avatar} width={64} height={94} alt="Capa do livro" />
              <BookInfo>
                <div>
                  <h4>O Conde de Monte Cristo</h4>
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
          </MostPopular>
        </MainFeed>
      </HomeContainer>
    </Container>
  )
}
