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
import { FullReview } from '@/pages/home'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { User } from '@prisma/client'

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

  const { data: thisProfileReviews, isFetching } = useQuery<FullReview[]>(
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

  console.log(thisProfileReviews)

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
              <SearchInput placeholder="Buscar livro avaliado" />
              <MagnifyingGlass />
            </SearchInputContainer>
            <UserBookList>
              {isFetching ? (
                <span>Buscando...</span>
              ) : (
                thisProfileReviews?.map()
              )}
              <ProfileReview />
              <ProfileReview />
              <ProfileReview />
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

            <Image src={Rectangle} width={64} height={4} alt="" />

            <UserStatsContainer>
              <UserStats>
                <BookOpen size={36} />
                <div>
                  <b>3094</b>
                  <span>Páginas lidas</span>
                </div>
              </UserStats>
              <UserStats>
                <Books size={36} />
                <div>
                  <b>10</b>
                  <span>Livros avaliados</span>
                </div>
              </UserStats>
              <UserStats>
                <UserSVG size={36} />
                <div>
                  <b>8</b>
                  <span>Autores lidos</span>
                </div>
              </UserStats>
              <UserStats>
                <Bookmark size={36} />
                <div>
                  <b>Aventura</b>
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
