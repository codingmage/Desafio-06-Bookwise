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
import { BookBoxComponent, ExtendedCategory } from '../../components/BookBox'
import { UserReviewForm } from '@/components/UserReviewForm'
import { api } from '@/lib/axios'
import { Book, Category } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { UserAuthSignIn } from '@/components/UserAuthSignIn'

export interface BookData extends Book {
  categories: ExtendedCategory[]
}

export default function Explore() {
  // guardar cache quando mudar categoria / https://stackoverflow.com/questions/72642027/reactquery-make-refetch-with-old-data

  const [selectedCategory, setSelectedCategory] = useState<String>('all')
  const [searchInput, setSearchInput] = useState<String>('')
  const [filteredBooks, setFilteredBooks] = useState<BookData[]>([])

  const { data: categories } = useQuery<Category[]>(
    ['categories'],
    async () => {
      const { data } = await api.get('/books/categories')
      return data.categories
    },
  )

  const { data: books, isLoading } = useQuery<BookData[]>(
    ['books', selectedCategory],
    async () => {
      if (selectedCategory === 'all') {
        const { data } = await api.get('/books/allBooks')
        return data.allBooks
      } else {
        const { data } = await api.get('/books/filteredBooks', {
          params: {
            category: selectedCategory,
          },
        })
        return data.books
      }
    },
  )

  useEffect(() => {
    const filteredSearchBooks = books?.filter((book) => {
      return (
        book.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        book.author.toLowerCase().includes(searchInput.toLowerCase())
      )
    })
    setFilteredBooks(filteredSearchBooks!)
  }, [books, searchInput])

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
          <SearchInput
            placeholder="Buscar livro ou autor"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <MagnifyingGlass />
        </SearchInputContainer>

        <TagContainer>
          <li>
            <Tag
              key={'all'}
              className={selectedCategory === 'all' ? 'activeTag' : ''}
              onClick={() => setSelectedCategory('all')}
            >
              Tudo
            </Tag>
          </li>
          {categories?.map((category) => (
            <li key={category.id}>
              <Tag
                className={selectedCategory === category.id ? 'activeTag' : ''}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Tag>
            </li>
          ))}
        </TagContainer>

        <BookListContainer>
          <BookList>
            {isLoading && <p>Loading...</p>}

            {searchInput.length > 1
              ? filteredBooks?.map((taggedBooks) => (
                  <BookBoxComponent
                    key={taggedBooks.id}
                    type="medium"
                    bookAuthor={taggedBooks.author}
                    bookCategory={taggedBooks.categories}
                    bookCover={taggedBooks.cover_url}
                    bookPage={taggedBooks.total_pages}
                    bookTitle={taggedBooks.name}
                    thisBookId={taggedBooks.id}
                    UserReviewForm={
                      <UserReviewForm thisBookId={taggedBooks.id} />
                    }
                    UserAuthSignIn={<UserAuthSignIn />}
                  />
                ))
              : books?.map((taggedBooks) => (
                  <BookBoxComponent
                    key={taggedBooks.id}
                    type="medium"
                    bookAuthor={taggedBooks.author}
                    bookCategory={taggedBooks.categories}
                    bookCover={taggedBooks.cover_url}
                    bookPage={taggedBooks.total_pages}
                    bookTitle={taggedBooks.name}
                    thisBookId={taggedBooks.id}
                    UserReviewForm={
                      <UserReviewForm thisBookId={taggedBooks.id} />
                    }
                    UserAuthSignIn={<UserAuthSignIn />}
                  />
                ))}
          </BookList>
        </BookListContainer>
      </ExploreContainer>
    </Container>
  )
}
