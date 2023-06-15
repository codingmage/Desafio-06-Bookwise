import { UserAvatar } from './styles'
import noAvatar from '../../assets/bookwiseUser.png'
import { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'

interface AvatarPros {
  size: 'small' | 'medium' | 'large'
  image: string | null
}

export function Avatar({ size, image }: AvatarPros) {
  const [avatar, setUserAvatar] = useState<string | StaticImageData>(noAvatar)

  useEffect(() => {
    const hasAvatar = image !== null

    if (hasAvatar) {
      setUserAvatar(image)
    } else {
      setUserAvatar(noAvatar)
    }
  }, [image])

  return (
    <UserAvatar
      type={size}
      src={avatar}
      alt="Avatar do autor"
      height={52}
      width={52}
    />
  )
}
