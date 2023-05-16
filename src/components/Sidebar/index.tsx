import {
  Container,
  NavList,
  Navbar,
  SidebarContainer,
  GoToLogin,
  LoggedInUser,
} from './styles'
import bookwiseLogo from '../../assets/BookwiseLogo.svg'
import Image from 'next/image'
import Link from 'next/link'
import {
  Binoculars,
  ChartLineUp,
  SignIn,
  SignOut,
  User,
} from '@phosphor-icons/react'
import { useRouter } from 'next/router'
import { Avatar } from '../Avatar'

export default function Sidebar() {
  const isLoggedIn = true

  // use navlink / link?
  // radix or mui for components

  const router = useRouter()

  return (
    <Container>
      <SidebarContainer>
        <Image
          src={bookwiseLogo}
          quality={100}
          width={140}
          priority
          alt="Logo do site."
        />
        <Navbar>
          <NavList>
            <li className={router.pathname === '/' ? 'active' : ''}>
              <Link href="/">
                <ChartLineUp size={24} />
                Início
              </Link>
            </li>
            <li className={router.pathname === '/explore' ? 'active' : ''}>
              <Link href="/explore">
                <Binoculars size={24} />
                Explorar
              </Link>
            </li>

            {isLoggedIn && (
              <li className={router.pathname === '/profile' ? 'active' : ''}>
                <Link href="/profile">
                  <User size={24} />
                  Perfil
                </Link>
              </li>
            )}
          </NavList>
          {isLoggedIn ? (
            <LoggedInUser>
              <Avatar size="small" />
              <span>Jean Fellipe</span>
              <button>
                <SignOut size={24} />
              </button>
            </LoggedInUser>
          ) : (
            <GoToLogin href={'/login'}>
              Fazer login <SignIn size={22} />
            </GoToLogin>
          )}
        </Navbar>
      </SidebarContainer>
    </Container>
  )
}
