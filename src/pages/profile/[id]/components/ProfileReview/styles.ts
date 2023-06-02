import { styled } from '../../../../../../stitches.config'

export const BookReview = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray600',
  padding: '$6',
  borderRadius: '$md',
  border: '1px solid $black',
  flexGrow: 2,
  marginTop: '$3',
  marginBottom: '$2',

  '&:hover': {
    border: '1px solid $purple100',
  },

  gap: '$5',
})

export const ReviewInfo = styled('header', {
  display: 'flex',
  gap: '$5',

  img: {
    borderRadius: '$sm',
  },
})

export const Date = styled('span', {
  fontSize: '$sm',
  color: '$gray400',
})

export const ReviewContent = styled('div', {
  display: 'flex',
  gap: '$5',
  textAlign: 'justify',
  color: '$gray300',
})

export const ReviewBook = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '$4',
  textAlign: 'justify',

  div: {
    display: 'flex',
    flexDirection: 'column',

    span: {
      fontSize: '$sm',
      color: '$gray400',
    },
  },
})

export const Rating = styled('span', {
  color: '$purple100',
  fontSize: '$md',
})
