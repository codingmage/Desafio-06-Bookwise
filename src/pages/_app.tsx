import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${Nunito}`}>
      {/* <div className={`${Nunito.variable}`}> */}
      <Component {...pageProps} />
    </div>
  )
}
