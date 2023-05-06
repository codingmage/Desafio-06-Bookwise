import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '#161a29',
    color: 'White',
    '-webkit-font-smoothing': 'antialiased',
  },
})
