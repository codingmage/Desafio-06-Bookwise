import {
  CloseButton,
  Content,
  Container,
  DialogLogin,
  ModalOverlay,
  NavList,
  Navbar,
  SidebarContainer,
  Description,
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
  X,
} from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import GoogleLogo from '../../assets/logos_google-icon.svg'
import GithubLogo from '../../assets/github-fill.svg'
import { useRouter } from 'next/router'
import AvatarExample from '../../assets/teste.jpg'
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
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <GoToLogin>
                  Fazer login <SignIn size={22} />
                </GoToLogin>
              </Dialog.Trigger>
              <Dialog.Portal>
                <ModalOverlay />
                <Content>
                  <Dialog.Close asChild>
                    <CloseButton>
                      <X />
                    </CloseButton>
                  </Dialog.Close>
                  <Description>
                    Faça login para deixar sua avaliação.
                  </Description>
                  <DialogLogin>
                    <Image
                      src={GoogleLogo}
                      height={32}
                      alt="Logomarca da Google"
                    />
                    Entrar com Google
                  </DialogLogin>
                  <DialogLogin>
                    <Image
                      src={GithubLogo}
                      height={32}
                      alt="Logomarca do Github"
                    />
                    Entrar com Github
                  </DialogLogin>
                </Content>
              </Dialog.Portal>
            </Dialog.Root>
          )}
        </Navbar>
      </SidebarContainer>
    </Container>
  )
}
