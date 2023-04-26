import {
  HomeContainer,
  ImageContainer,
  LoginContainer,
  LoginType,
  LoginTypeContainer,
} from './styles'
import Image from 'next/image'
import GoogleLogo from '../../assets/logos_google-icon.svg'
import bookwiseImage from '../../assets/bookwise.png'
import GithubLogo from '../../assets/github-fill.svg'
import Rocket from '../../assets/RocketLaunch.svg'

export default function Home() {
  return (
    <HomeContainer>
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
          <LoginType>
            <Image
              src={GoogleLogo}
              height={32}
              alt="Logomarca da empresa Google"
            />
            Entrar com Google
          </LoginType>
          <LoginType>
            <Image
              src={GithubLogo}
              height={32}
              alt="Logomarca da empresa Google"
            />
            Entrar com Github
          </LoginType>
          <LoginType>
            <Image src={Rocket} height={32} alt="Logomarca da empresa Google" />
            Acessar como visitante
          </LoginType>
        </LoginTypeContainer>
      </LoginContainer>
    </HomeContainer>
  )
}
