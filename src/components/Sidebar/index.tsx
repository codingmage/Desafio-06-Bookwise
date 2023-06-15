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
import { useSession, signOut } from 'next-auth/react'

export default function Sidebar() {
  const { data: session } = useSession()

  const router = useRouter()

  /*   const ownAvatar =
    session?.user.avatar_url ?? (session?.user.avatar_url || noAvatar) */

  /*   const replace = router.pathname.split('/profile/').pop()

  const userId = session?.user.id

  const sameUser = userId === replace */

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

            {session && (
              <li
                className={router.pathname === '/profile/[id]' ? 'active' : ''}
              >
                <Link href={`/profile/[id]`} as={`/profile/${session.user.id}`}>
                  <User size={24} />
                  Perfil
                </Link>
              </li>
            )}
          </NavList>
          {session ? (
            <LoggedInUser>
              <Avatar image={session.user.avatar_url} size="small" />
              <span>{session?.user?.name}</span>
              <button onClick={() => signOut()}>
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
