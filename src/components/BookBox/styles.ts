import {
  DialogContent,
  DialogDescription,
  DialogOverlay,
} from '@radix-ui/react-dialog'
import { styled } from '../../../stitches.config'

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

export const ReviewHead = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})

export const ReviewList = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '$2',
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
  position: 'fixed',
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

export const LoginContent = styled(DialogContent, {
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

export const GoToLogin = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
  cursor: 'pointer',

  span: {
    color: '$purple100',
  },

  svg: {
    color: '$green100',
  },
})

export const DialogLogin = styled('button', {
  all: 'unset',
  backgroundColor: '$gray600',
  padding: '$3 $4',
  maxWidth: '23.25rem',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  flexGrow: 0,
  gap: '$4',
  fontSize: '$lg',
  fontWeight: '$bold',
  cursor: 'pointer',
})

export const Description = styled(DialogDescription, {
  alignSelf: 'center',
  marginBottom: '$3',
})

export const FormContainer = styled('div', {
  backgroundColor: '$gray600',
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  padding: '$6',
  borderRadius: '$md',
  border: '1px solid $black',
  marginTop: '$4',
})

export const FormHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '$4',

  div: {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
  },

  'div span': {
    fontSize: '$md',
    fontFamily: '$default',
  },
})

export const UserReviewText = styled('textarea', {
  backgroundColor: '$gray800',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray700',
  fontSize: '$md',
  fontFamily: '$default',
  color: '$white',
  resize: 'none',
  minHeight: 80,
  height: '10rem',

  '&:focus': {
    outline: 0,
    borderColor: '$green100',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export const FormButtonContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '$2',
  marginTop: '$2',
})

export const FormButton = styled('button', {
  all: 'unset',
  backgroundColor: '$gray500',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid $black',
  borderRadius: '$sm',
  padding: '$2',

  '&:hover': {
    backgroundColor: '#3f5399',
  },

  variants: {
    buttonType: {
      cancel: {
        color: '$black',
      },
      confirm: {
        color: '$green100',
      },
    },
  },
})
