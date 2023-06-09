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
import { Book, Category } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

export default function Explore() {
  /* usestate for active button */

  /* Repeating too much code. Componentize? book small/medium/large(full)? */

  // guardar cache quando mudar categoria

  const [selectedCategory, setSelectedCategory] = useState<String>('all')

  const { data: categories } = useQuery<Category[]>(
    ['categories'],
    async () => {
      const { data } = await api.get('/categories')
      return data?.categories
    },
  )

  const { data: books, isLoading } = useQuery<Book[]>(
    ['books', selectedCategory],
    async () => {
      const { data } = await api.get('/books', {
        params: {
          category: selectedCategory,
        },
      })
      return data.books
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
          <li>
            <Tag
              key={'all'}
              className="activeTag"
              onClick={() => setSelectedCategory('all')}
            >
              Tudo
            </Tag>
          </li>
          {categories?.map((category) => (
            <li key={category.id}>
              <Tag onClick={() => setSelectedCategory(category.id)}>
                {category.name}
              </Tag>
            </li>
          ))}
        </TagContainer>

        <BookListContainer>
          <BookList>
            {isLoading && <p>Loading...</p>}

            {books?.map((taggedBooks) => (
              <BookBoxComponent
                key={taggedBooks.id}
                type="medium"
                bookAuthor={taggedBooks.author}
                bookCategory={taggedBooks.summary}
                bookCover={taggedBooks.cover_url}
                bookPage={taggedBooks.total_pages}
                bookTitle={taggedBooks.name}
                thisBookId={taggedBooks.id}
                UserReviewForm={<UserReviewForm />}
              />
            ))}
          </BookList>
        </BookListContainer>
      </ExploreContainer>
    </Container>
  )
}
