import { MagnifyingGlass, User } from '@phosphor-icons/react'
import Sidebar from '../../components/Sidebar'
import {
  Container,
  ProfileContainer,
  ProfileContent,
  SearchInput,
  SearchInputContainer,
  UserBookList,
  UserBooks,
  UserDetails,
} from './styles'
import { Avatar } from '@/components/Avatar'
import { ProfileReview } from './components/ProfileReview'

export default function Profile() {
  /* usestate for active button */

  /* Repeating too much code. Componentize? book small/medium/large(full)? */

  return (
    <Container>
      <Sidebar />
      <ProfileContainer>
        <header>
          <h2>
            <User size={32} /> Perfil
          </h2>
        </header>
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
            <Avatar size="large" />
          </UserDetails>
        </ProfileContent>
      </ProfileContainer>
    </Container>
  )
}
