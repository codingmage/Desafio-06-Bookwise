import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  Description,
  DialogLogin,
  GoToLogin,
  LoginContent,
  ModalOverlay,
} from './styles'
import { X } from '@phosphor-icons/react'
import Image from 'next/image'
import GoogleLogo from '../../assets/logos_google-icon.svg'
import GithubLogo from '../../assets/github-fill.svg'

export function UserAuthSignIn() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <GoToLogin>
          <span>Avaliar</span>
        </GoToLogin>
      </Dialog.Trigger>
      <Dialog.Portal>
        <ModalOverlay />
        <LoginContent>
          <Dialog.Close asChild>
            <CloseButton>
              <X />
            </CloseButton>
          </Dialog.Close>
          <Description>Faça login para deixar sua avaliação.</Description>
          <DialogLogin>
            <Image src={GoogleLogo} height={32} alt="Logomarca da Google" />
            Entrar com Google
          </DialogLogin>
          <DialogLogin>
            <Image src={GithubLogo} height={32} alt="Logomarca do Github" />
            Entrar com Github
          </DialogLogin>
        </LoginContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
