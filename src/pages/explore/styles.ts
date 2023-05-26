import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  height: '100vh',
  gap: '5rem',
  overflowX: 'hidden',

  '::-webkit-scrollbar': {
    width: 10,
  },

  '::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 10px 10px green',
    border: 'solid 3px transparent',
  },

  '::-webkit-scrollbar-thumb': {
    boxShadow: 'inset 0 0 10px 10px red',
    border: 'solid 3px transparent',
  },
})

export const ExploreContainer = styled('div', {
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

export const SearchInputContainer = styled('div', {
  display: 'flex',
  border: '2px solid $gray500',
  gap: '$1',
  padding: '$2',
  width: '25rem',

  marginTop: '$4',
})

export const SearchInput = styled('input', {
  color: '$white',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&::placeholder': {
    color: '$gray400',
  },
})

export const TagContainer = styled('ul', {
  marginTop: '$6',
  textDecoration: 'none',
  listStyleType: 'none',
  display: 'flex',
  width: '80%',
  gap: '$2',
  overflowX: 'scroll',
  scrollbarWidth: 'thin',
  scrollbarColor: '#1d3791 #252e4d',

  'li .activeTag': {
    background: '$purple100',
    border: '1px solid $white',
  },
})

export const Tag = styled('button', {
  all: 'unset',
  background: '$purple200',
  borderRadius: '$lg',
  border: '1px solid $black',
  cursor: 'pointer',

  padding: '$1 $3',
  marginBottom: '$2',
})

export const BookListContainer = styled('div', {
  display: 'flex',
})

export const BookList = styled('ul', {
  listStyleType: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$4',
  marginTop: '$5',
})

export const BookBox = styled('li', {
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

  'div div': {
    display: 'flex',
    flexDirection: 'column',
  },
})
