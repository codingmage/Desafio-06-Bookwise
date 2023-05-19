import { styled } from '../../../stitches.config'

export const Rating = styled('span', {
  color: '$purple100',
  fontSize: '$md',
})

export const FormContainer = styled('div', {
  backgroundColor: '$gray600',
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  padding: '$6',
  borderRadius: '$md',
  border: '1px solid $black',
  marginTop: '$4',
})

export const FormHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '$4',

  div: {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
  },

  'div span': {
    fontSize: '$md',
    fontFamily: '$default',
  },
})

export const UserReviewText = styled('textarea', {
  backgroundColor: '$gray800',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray700',
  fontSize: '$md',
  fontFamily: '$default',
  color: '$white',
  resize: 'none',
  minHeight: 80,
  height: '10rem',

  '&:focus': {
    outline: 0,
    borderColor: '$green100',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export const FormButtonContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '$2',
  marginTop: '$2',
})

export const FormButton = styled('button', {
  all: 'unset',
  backgroundColor: '$gray500',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid $black',
  borderRadius: '$sm',
  padding: '$2',

  '&:hover': {
    backgroundColor: '#3f5399',
  },

  variants: {
    buttonType: {
      cancel: {
        color: '$black',
      },
      confirm: {
        color: '$green100',
      },
    },
  },
})
