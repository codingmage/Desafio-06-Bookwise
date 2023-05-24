import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'
import Sidebar from '../../components/Sidebar'
import {
  BookList,
  BookListContainer,
  Container,
  ExploreContainer,
  SearchInput,
  SearchInputContainer,
  Tag,
  TagContainer,
} from './styles'
import { BookBoxComponent } from '../../components/BookBox'
import { UserReviewForm } from '@/components/UserReviewForm'

export default function Explore() {
  /* usestate for active button */

  /* Repeating too much code. Componentize? book small/medium/large(full)? */

  return (
    <Container>
      <Sidebar />
      <ExploreContainer>
        <header>
          <h2>
            <Binoculars size={32} /> Explorar
          </h2>
        </header>
        <SearchInputContainer>
          <SearchInput placeholder="Buscar livro ou autor" />
          <MagnifyingGlass />
        </SearchInputContainer>

        <TagContainer>
          <li>
            <Tag className="activeTag">Tudo</Tag>
          </li>
          <li>
            <Tag>Tudo</Tag>
          </li>
          <li>
            <Tag>Tudo</Tag>
          </li>
          <li>
            <Tag>Tudo</Tag>
          </li>
          <li>
            <Tag>Tudo</Tag>
          </li>
          <li>
            <Tag>Tudo</Tag>
          </li>
        </TagContainer>

        <BookListContainer>
          <BookList>
            <BookBoxComponent
              type="medium"
              UserReviewForm={<UserReviewForm />}
            />
            {/*             <BookBoxComponent type="medium" />
            <BookBoxComponent type="medium" />
            <BookBoxComponent type="medium" />
            <BookBoxComponent type="medium" />
            <BookBoxComponent type="medium" />
            <BookBoxComponent type="medium" /> */}
            {/*            <BookBox>
              <Image src={Avatar} height={64} width={64} alt="Capa do livro" />
              <div>
                <div>
                  <span>O Conde de Monte Cristo</span>
                  <span>Alexandre dumas</span>
                </div>
                <span>
                  <Star /> <Star /> <Star /> <Star /> <Star />
                </span>
              </div>
            </BookBox>
            <BookBox>
              <Image src={Avatar} height={64} width={64} alt="Capa do livro" />
              <div>
                <div>
                  <span>O Conde de Monte Cristo</span>
                  <span>Alexandre dumas</span>
                </div>
                <span>
                  <Star /> <Star /> <Star /> <Star /> <Star />
                </span>
              </div>
            </BookBox>
            <BookBox>
              <Image src={Avatar} height={64} width={64} alt="Capa do livro" />
              <div>
                <div>
                  <span>O Conde de Monte Cristo</span>
                  <span>Alexandre dumas</span>
                </div>
                <span>
                  <Star /> <Star /> <Star /> <Star /> <Star />
                </span>
              </div>
            </BookBox>
            <BookBox>
              <Image src={Avatar} height={64} width={64} alt="Capa do livro" />
              <div>
                <div>
                  <span>O Conde de Monte Cristo</span>
                  <span>Alexandre dumas</span>
                </div>
                <span>
                  <Star /> <Star /> <Star /> <Star /> <Star />
                </span>
              </div>
            </BookBox>
            <BookBox>
              <Image src={Avatar} height={64} width={64} alt="Capa do livro" />
              <div>
                <div>
                  <span>O Conde de Monte Cristo</span>
                  <span>Alexandre dumas</span>
                </div>
                <span>
                  <Star /> <Star /> <Star /> <Star /> <Star />
                </span>
              </div>
            </BookBox>
            <BookBox>
              <Image src={Avatar} height={64} width={64} alt="Capa do livro" />
              <div>
                <div>
                  <span>O Conde de Monte Cristo</span>
                  <span>Alexandre dumas</span>
                </div>
                <span>
                  <Star /> <Star /> <Star /> <Star /> <Star />
                </span>
              </div>
            </BookBox> */}
          </BookList>
        </BookListContainer>
      </ExploreContainer>
    </Container>
  )
}
