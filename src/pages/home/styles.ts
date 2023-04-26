import { styled } from '../../../stitches.config'

export const HomeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  height: '100vh',
})

export const ImageContainer = styled('div', {
  display: 'flex',
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',

  '@media(max-width: 600px)': {
    display: 'none',
  },

  img: {
    margin: '$4',
    alignSelf: 'center',
  },
})

export const LoginContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '$lg',
  fontWeight: '$bold',
  marginLeft: '14rem',
  width: '23rem',
  color: '$gray200',

  '@media(max-width: 600px)': {
    marginLeft: 0,
    flex: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },

  h2: {
    color: '$gray100',
  },

  span: {
    fontSize: '$md',
    fontWeight: '$regular',
  },
})

export const LoginTypeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginTop: '$4',
})

export const LoginType = styled('button', {
  all: 'unset',
  backgroundColor: '$gray600',
  padding: '$5 $6',
  maxWidth: '23.25rem',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  flexGrow: 0,
  gap: '$4',
  fontSize: '$lg',
  cursor: 'pointer',
})
