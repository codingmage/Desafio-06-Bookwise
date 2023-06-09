import { RoundedStar } from '@smastrom/react-rating'
import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    fontFamily: '$default',
  },

  body: {
    backgroundColor: '#161a29',
    color: 'White',
    '-webkit-font-smoothing': 'antialiased',
  },
})

export const customStyles = {
  itemShapes: RoundedStar,
  activeFillColor: '#8381D9',
  inactiveFillColor: '#c6c5eb',
}
