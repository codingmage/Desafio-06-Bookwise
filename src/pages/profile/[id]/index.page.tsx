import {
  BookOpen,
  Bookmark,
  Books,
  CaretLeft,
  MagnifyingGlass,
  User as UserSVG,
} from '@phosphor-icons/react'
import Sidebar from '../../../components/Sidebar'
import {
  Container,
  GoBack,
  Loading,
  ProfileContainer,
  ProfileContent,
  SearchInput,
  SearchInputContainer,
  UserBookList,
  UserBooks,
  UserDetails,
  UserInfo,
  UserStats,
  UserStatsContainer,
} from './styles'
import { Avatar } from '@/components/Avatar'
import { ProfileReview } from './components/ProfileReview'
import Image from 'next/image'
import Rectangle from '../../../assets/Rectangle.svg'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { Book, CategoriesOnBooks, Category, Rating, User } from '@prisma/client'
import { useEffect, useState } from 'react'

interface FullCategory extends CategoriesOnBooks {
  category: Category
}

interface BookWithCategories extends Book {
  categories: FullCategory[]
}

interface FullProfileReview extends Rating {
  user: User
  book: BookWithCategories
}

export default function Profile() {
  const router = useRouter()

  const userId = String(router.query.id)

  const session = useSession()

  const loggedInUser = session.data?.user.id === userId

  const { data: thisUser } = useQuery<User>([userId], async () => {
    const { data } = await api.get('/user', {
      params: {
        userId,
      },
    })
    return data
  })

  const { data: thisProfileReviews, isLoading } = useQuery<FullProfileReview[]>(
    ['userReviews', userId],
    async () => {
      const { data } = await api.get('/reviews/userProfileReviews', {
        params: {
          userId,
        },
      })
      return data
    },
  )

  const [totalPages, setTotalPages] = useState<number>(0)

  useEffect(() => {
    if (thisProfileReviews!) {
      const pagesArray = thisProfileReviews?.map(
        (pages) => pages.book.total_pages,
      )

      const total = pagesArray?.reduce(
        (pages, totalPages) => pages + totalPages,
        0,
      )

      setTotalPages(total)
    }
  }, [thisProfileReviews])

  const totalBooks = new Set(thisProfileReviews).size

  const authorArray = thisProfileReviews?.map((author) => author.book.author)

  const totalAuthors = new Set(authorArray).size

  const [categoriesList, setCategoriesList] = useState<string[]>([])

  useEffect(() => {
    if (thisProfileReviews!) {
      const categoriesOnBooksArray = thisProfileReviews?.map((categories) =>
        categories.book.categories.map((category) => {
          return category.category.name
        }),
      )
      for (const categoryArray of categoriesOnBooksArray) {
        for (const category of categoryArray) {
          setCategoriesList((oldArray) => [...oldArray, category])
        }
      }
    }
  }, [thisProfileReviews])

  const [userTopCategory, setUserTopCategory] = useState<string>('')

  function topCategory(array: string[]) {
    const frequency = {} as any
    let maxCategory = array[0]
    let maxCount = 1

    for (let i = 0; i < array.length; i++) {
      const oneCategory = array[i]
      if (frequency[oneCategory]) {
        frequency[oneCategory]++
      } else {
        frequency[oneCategory] = 1
      }
      if (frequency[oneCategory] > maxCount) {
        maxCategory = oneCategory
        maxCount = frequency[oneCategory]
      }
    }

    setUserTopCategory(maxCategory)
  }

  useEffect(() => {
    if (categoriesList.length > 0) {
      topCategory(categoriesList)
    }
  }, [categoriesList])

  const [filteredBooks, setFilteredBooks] = useState<FullProfileReview[]>([])
  const [profileSearchInput, setProfileSearchInput] = useState<String>('')

  useEffect(() => {
    if (thisProfileReviews!) {
      const filteredProfileBooks = thisProfileReviews?.filter((profileBook) => {
        return (
          profileBook.book.name
            .toLowerCase()
            .includes(profileSearchInput.toLowerCase()) ||
          profileBook.book.author
            .toLowerCase()
            .includes(profileSearchInput.toLowerCase())
        )
      })
      setFilteredBooks(filteredProfileBooks)
    }
  }, [profileSearchInput, thisProfileReviews])

  console.log(filteredBooks.length)

  return (
    <Container>
      <Sidebar />
      <ProfileContainer>
        {loggedInUser ? (
          <header>
            <h2>
              <UserSVG size={32} /> Perfil
            </h2>
          </header>
        ) : (
          <div>
            <GoBack href={'/'}>
              <CaretLeft size={24} /> Voltar
            </GoBack>
          </div>
        )}
        <ProfileContent>
          <UserBooks>
            <SearchInputContainer>
              <SearchInput
                placeholder="Buscar livro avaliado"
                onChange={(e) => setProfileSearchInput(e.target.value)}
              />
              <MagnifyingGlass />
            </SearchInputContainer>
            <UserBookList>
              {isLoading && <Loading>Loading...</Loading>}

              {profileSearchInput.length > 1
                ? filteredBooks?.map((oneProfileReview) => {
                    return (
                      <ProfileReview
                        key={oneProfileReview.id}
                        oneProfileReview={oneProfileReview}
                      />
                    )
                  })
                : thisProfileReviews?.map((oneProfileReview) => {
                    return (
                      <ProfileReview
                        key={oneProfileReview.id}
                        oneProfileReview={oneProfileReview}
                      />
                    )
                  })}
            </UserBookList>
          </UserBooks>
          <UserDetails>
            <UserInfo>
              <Avatar
                image={thisUser?.avatar_url! ? thisUser?.avatar_url : null}
                size="large"
              />
              <div>
                <h3>{thisUser?.name}</h3>
                <span>
                  Membro desde {new Date(thisUser?.created_at!).getFullYear()}
                </span>
              </div>
            </UserInfo>

            <Image src={Rectangle} width={64} height={6} alt="" />

            <UserStatsContainer>
              <UserStats>
                <BookOpen size={36} />
                <div>
                  <b>{totalPages}</b>
                  <span>Páginas lidas</span>
                </div>
              </UserStats>
              <UserStats>
                <Books size={36} />
                <div>
                  <b>{totalBooks}</b>
                  {totalBooks === 1 ? (
                    <span>Livro avaliado</span>
                  ) : (
                    <span>Livros avaliados</span>
                  )}
                </div>
              </UserStats>
              <UserStats>
                <UserSVG size={36} />
                <div>
                  <b>{totalAuthors}</b>
                  {totalAuthors === 1 ? (
                    <span>Autor lido</span>
                  ) : (
                    <span>Autores lidos</span>
                  )}
                </div>
              </UserStats>
              <UserStats>
                <Bookmark size={36} />
                <div>
                  <b>{userTopCategory}</b>
                  <span>Categoria mais lida</span>
                </div>
              </UserStats>
            </UserStatsContainer>
          </UserDetails>
        </ProfileContent>
      </ProfileContainer>
    </Container>
  )
}
