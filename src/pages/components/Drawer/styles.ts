import { DialogContent, DialogOverlay } from '@radix-ui/react-dialog'
import { styled } from '../../../../stitches.config'

export const ModalOverlay = styled(DialogOverlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  backgroundColor: 'hsla(0, 0%, 0%, 0.439)',
})

export const CloseButton = styled('button', {
  all: 'unset',
  position: 'absolute',
  top: 10,
  right: 10,
  color: '$gray400',
  cursor: 'pointer',
})

export const Content = styled(DialogContent, {
  backgroundColor: '$gray700',
  borderRadius: 6,
  boxShadow: '10 5 5 black',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: 450,
  maxHeight: '85vh',
  padding: '$10',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray200',

  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})
