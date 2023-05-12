import { DialogContent, DialogOverlay } from '@radix-ui/react-dialog'
import { styled } from '../../../../stitches.config'

export const BookBoxTeste = styled('div', {
  fontWeight: '$bold',

  h1: {
    color: '$black',
  },

  variants: {
    size: {
      small: {
        fontSize: 30,
        backgroundColor: '$green100',
      },
      large: {
        fontSize: 60,
        backgroundColor: '$purple100',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export const BookBox = styled('div', {
  backgroundColor: '$gray600',
  borderRadius: '$md',
  border: '1px solid $black',
  padding: '$6',

  display: 'flex',
  gap: '$4',

  img: {
    borderRadius: '$sm',
  },

  variants: {
    type: {
      small: {
        color: '$green300',
        width: '18rem',
      },
      medium: {
        color: '$green100',
        width: '19rem',
      },
      big: {
        height: '16rem',
        border: 'none',
      },
    },
  },

  defaultVariants: {
    type: 'small',
  },
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },

  'div span': {
    color: '$gray400',
  },
})

export const BookTitle = styled('h4', {
  display: '-webkit-box',
  '-webkit-line-clamp': 2,
  '-webkit-box-orient': 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

export const Rating = styled('span', {
  color: '$purple100',
  fontSize: '$md',
})

export const ExtraBoxContainer = styled('div', {
  padding: '$1',
  margin: 'auto 4rem',
})

export const BookDetails = styled('footer', {
  display: 'flex',
  justifyContent: 'space-around',
  borderTop: '1px solid $green100',
  marginTop: '$2',
})

export const BookDetailsContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$6',

  svg: {
    color: '$green100',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$1',
  },

  'div span': {
    fontWeight: '$bold',
  },

  'div span:first-of-type': {
    color: '$gray300',
    fontSize: '$sm',
    fontWeight: '$regular',
  },
})

export const BookBoxContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray600',
  borderRadius: '$md',
})

export const ModalOverlay = styled(DialogOverlay, {
  position: 'sticky',
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
  position: 'absolute',
  top: '0',
  right: '0',
  /* transform: 'translate(-50%, -50%)', */
  width: '40vw',
  height: '100vh',
  padding: '$10',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray200',

  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  overflowY: 'auto',
})
