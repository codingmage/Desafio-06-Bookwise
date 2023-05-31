import {
  WelcomeContainer,
  ImageContainer,
  LoginContainer,
  LoginType,
  LoginTypeContainer,
} from './styles'
import Image from 'next/image'
import GoogleLogo from '../../assets/logos_google-icon.svg'
import GithubLogo from '../../assets/github-fill.svg'
import bookwiseImage from '../../assets/bookwise.png'
import Rocket from '../../assets/RocketLaunch.svg'
import { signIn } from 'next-auth/react'

export default function Login() {
  return (
    <WelcomeContainer>
      <ImageContainer>
        <Image
          src={bookwiseImage}
          quality={100}
          height={810}
          width={580}
          priority
          alt="Logo do site sobre uma imagem de uma pessoa lendo um livro."
        />
      </ImageContainer>
      <LoginContainer>
        <h2>Boas vindas!</h2>
        <span>Faça seu login ou acesse como visitante.</span>
        <LoginTypeContainer>
          <LoginType
            as={'button'}
            onClick={() => signIn('google', { callbackUrl: '/' })}
          >
            <Image src={GoogleLogo} height={32} alt="Logomarca da Google" />
            Entrar com Google
          </LoginType>
          <LoginType
            as={'button'}
            onClick={() => signIn('github', { callbackUrl: '/' })}
          >
            <Image src={GithubLogo} height={32} alt="Logomarca do Github" />
            Entrar com Github
          </LoginType>
          <LoginType href={'/'}>
            <Image src={Rocket} height={32} alt="Um foguete" />
            Acessar como visitante
          </LoginType>
        </LoginTypeContainer>
      </LoginContainer>
    </WelcomeContainer>
  )
}
