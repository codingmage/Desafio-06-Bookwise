import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  height: '100vh',
  gap: '5rem',
})

export const HomeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h2: {
    marginTop: '3rem',
    display: 'flex',
    alignItems: 'center',
    lineHeight: '$base',
    gap: '$2',

    svg: {
      color: '$green100',
    },
  },
})

export const MainFeed = styled('main', {
  marginTop: '3rem',
  fontSize: '$sm',
  display: 'flex',
  gap: '5rem',
})

export const MostRecent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '38rem',
  gap: '$3',
})

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

export const MostPopular = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

export const PopularHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  lineHeight: '$short',

  a: {
    textDecoration: 'none',
  },

  button: {
    all: 'unset',
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    fontWeight: '$bold',
    color: '$purple100',
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

export const UserLatestDiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})
