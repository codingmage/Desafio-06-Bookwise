import {
  DialogContent,
  DialogDescription,
  DialogOverlay,
} from '@radix-ui/react-dialog'
import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  height: '100vh',
})

export const SidebarContainer = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  boxSizing: 'border-box',
  margin: '$3',
  borderRadius: 20,
  backgroundImage: `linear-gradient(180deg, #2a3a66 0%, #232345 100%)`,
  paddingTop: '$10',
  paddingBottom: '$2',
  filter: 'drop-shadow(0px 2px 3px #000000)',
  width: '14.5rem',
})

export const Navbar = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '$10',
  border: '1px solid black',
  flex: 'auto',

  button: {},
})

export const NavList = styled('ul', {
  listStyleType: 'none',
  marginTop: '$10',
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'flex-start',
  /* border: '1px solid blue', */

  li: {
    borderLeft: '4px solid transparent',
    boxSizing: 'border-box',
  },

  '.active': {
    borderLeft: '4px solid #c3bbfa',
  },

  a: {
    textDecoration: 'none',
    color: '$gray100',
    /* border: '1px solid green', */
    padding: '$2',
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
    textShadow: '0px 1px 2px #000000',
  },
})

export const ModalOverlay = styled(DialogOverlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  backgroundColor: 'hsla(0, 0%, 0%, 0.439)',
})

export const Content = styled(DialogContent, {
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

export const CloseButton = styled('button', {
  all: 'unset',
  position: 'absolute',
  top: 10,
  right: 10,
  color: '$gray400',
  cursor: 'pointer',
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

export const GoToLogin = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
  cursor: 'pointer',

  svg: {
    color: '$green100',
  },
})

export const LoggedInUser = styled('span', {
  display: 'flex',
  fontSize: '$sm',
  minWidth: '10rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',

  img: {
    borderRadius: '$full',
  },

  button: {
    all: 'unset',
    display: 'flex',
    cursor: 'pointer',
    lineHeight: '$short',
    color: '#cc4343',
  },
})
