import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, ModalOverlay } from './styles'
import { X } from '@phosphor-icons/react'

export function Drawer({ children }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild></Dialog.Trigger>
      <Dialog.Portal>
        <ModalOverlay />
        <Content>
          <Dialog.Close asChild>
            <CloseButton>
              <X />
            </CloseButton>
          </Dialog.Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
