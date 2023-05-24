import { styled } from '../../../stitches.config'

export const BookReview = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray600',
  padding: '$6',
  borderRadius: '$md',
  border: '1px solid $black',
  flexGrow: 2,

  '&:hover': {
    border: '1px solid $purple100',
  },
})

export const ReviewInfo = styled('header', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  marginBottom: '$5',

  img: {
    borderRadius: '$full',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '2',
    gap: '$1',
  },
})

export const Complement = styled('span', {
  fontSize: '$sm',
  color: '$gray400',
})

export const ReviewContent = styled('div', {
  display: 'flex',
  gap: '$5',

  img: {
    borderRadius: '$sm',
  },
})

export const ReviewText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
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

export const StarContainer = styled('div', {
  maxWidth: 'fit-content',

  '.starStyle': {
    display: 'flex',
    flexDirection: 'row',
    gap: '$1',
  },
})
