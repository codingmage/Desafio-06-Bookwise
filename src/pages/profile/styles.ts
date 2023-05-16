import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  height: '100vh',
  gap: '5rem',
})

export const ProfileContainer = styled('div', {
  display: 'flex',
  width: '80%',
  height: '100%',
  flexDirection: 'column',
  border: '1px solid red',

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

  marginTop: '$4',
  marginBottom: '$6',
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

export const ProfileContent = styled('main', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  border: '1px solid white',
})

export const UserBooks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 2,
  maxWidth: '39rem',
})

export const UserBookList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',

  gap: '$6',
})

export const UserDetails = styled('div', {})
