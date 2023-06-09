import { useSession } from 'next-auth/react'
import { UserAvatar } from './styles'
import noAvatar from '../../assets/bookwiseUser.png'

interface AvatarPros {
  size: 'small' | 'medium' | 'large'
}

export function Avatar({ size }: AvatarPros) {
  const { data: session } = useSession()

  const defineAvatar =
    session?.user.avatar_url ?? (session?.user.avatar_url || noAvatar)

  return (
    <UserAvatar
      type={size}
      src={defineAvatar}
      alt="Avatar do autor"
      height={52}
      width={52}
    />
  )
}
