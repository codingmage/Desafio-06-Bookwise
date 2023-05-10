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
  maxWidth: '20rem',
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
      },
      medium: {
        color: '$green100',
      },
      big: {
        fontSize: '$lg',
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

  'div span': {
    color: '$gray400',
  },
})

export const Rating = styled('span', {
  color: '$purple100',
  fontSize: '$md',
})
