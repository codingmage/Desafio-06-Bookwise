import {
  BookOpen,
  Bookmark,
  Books,
  CaretLeft,
  MagnifyingGlass,
  User,
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

export default function Profile() {
  /* const router = useRouter() */

  /* const userId = String(router.query.id) */

  const isLoggedIn = false

  return (
    <Container>
      <Sidebar />
      <ProfileContainer>
        {isLoggedIn ? (
          <header>
            <h2>
              <User size={32} /> Perfil
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
              <ProfileReview />
              <ProfileReview />
              <ProfileReview />
            </UserBookList>
          </UserBooks>
          <UserDetails>
            <UserInfo>
              <Avatar size="large" />
              <div>
                <h3>Jean Fellipe</h3>
                <span>Membro desde 2022</span>
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
                <User size={36} />
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
