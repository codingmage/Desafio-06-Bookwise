import Image from 'next/image'
import { styled } from '../../../stitches.config'

export const UserAvatar = styled(Image, {
  borderRadius: '$full',
  objectFit: 'cover',
  border: '2px solid #3e69f7',

  variants: {
    type: {
      small: {
        width: 32,
        height: 32,
      },
      medium: {
        width: 50,
        height: 50,
      },
      large: {
        width: 64,
        height: 64,
      },
    },
  },
})
