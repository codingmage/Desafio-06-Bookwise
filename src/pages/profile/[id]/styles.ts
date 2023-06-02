import Link from 'next/link'
import { styled } from '../../../../stitches.config'

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
  /* justifyContent: 'space-between', */
  border: '1px solid white',
  gap: '$10',
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

export const UserDetails = styled('aside', {
  border: '1px solid black',
  padding: '$4',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '$10',
})

export const UserInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$2',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$1',
    alignItems: 'center',
  },

  span: {
    fontSize: '$sm',
    color: '$gray400',
  },
})

export const UserStatsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const UserStats = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '$1',
  gap: '$1',

  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  'div span': {
    color: '$gray400',
    fontSize: '$sm',
  },

  svg: {
    color: '$green100',
    margin: '$2',
  },
})

export const GoBack = styled(Link, {
  all: 'unset',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  marginTop: '3rem',
})
