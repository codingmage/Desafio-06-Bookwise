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
} from './styles'
import bookwiseLogo from '../../../assets/BookwiseLogo.svg'
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
import GoogleLogo from '../../../assets/logos_google-icon.svg'
import GithubLogo from '../../../assets/github-fill.svg'
import { useRouter } from 'next/router'

export default function Sidebar() {
  const isLoggedIn = false

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
            <li>
              <Link href="/">
                <ChartLineUp />
                Início
              </Link>
            </li>
            <li>
              <Link href="/about">
                <Binoculars />
                Explorar
              </Link>
            </li>

            {isLoggedIn && (
              <li>
                <Link href="/blog/hello-world">
                  <User />
                  Perfil
                </Link>
              </li>
            )}
          </NavList>
          {isLoggedIn ? (
            <span>
              Nome do usuário
              <button>
                <SignOut fill="red" />
              </button>
            </span>
          ) : (
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button>
                  Fazer login <SignIn />
                </button>
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
