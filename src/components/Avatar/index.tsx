import AvatarExample from '../../assets/teste.jpg'
import { UserAvatar } from './styles'

interface AvatarPros {
  size: 'small' | 'medium' | 'large'
}

export function Avatar({ size }: AvatarPros) {
  return (
    <UserAvatar
      type={size}
      src={AvatarExample}
      alt="Avatar do autor"
      width={52}
    />
  )
}
