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
import { api } from '@/lib/axios'
import { Category } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'

export default function Explore() {
  /* usestate for active button */

  /* Repeating too much code. Componentize? book small/medium/large(full)? */

  const { data: categories } = useQuery<Category[]>(
    ['categories'],
    async () => {
      const { data } = await api.get('/categories')
      return data?.categories ?? []
    },
  )

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
          {categories?.map((category) => (
            <li key={category.id}>
              <Tag>{category.name}</Tag>
            </li>
          ))}
          <li>
            <Tag className="activeTag">Tudo</Tag>
          </li>
        </TagContainer>

        <BookListContainer>
          <BookList>
            <BookBoxComponent
              type="medium"
              UserReviewForm={<UserReviewForm />}
            />
          </BookList>
        </BookListContainer>
      </ExploreContainer>
    </Container>
  )
}
