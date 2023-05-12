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
  width: '19rem',
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
        width: '33rem',
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
