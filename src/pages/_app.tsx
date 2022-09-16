import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ThemeProviderProxy: any = ThemeProvider

const theme = {
  color: 'red'
}

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProviderProxy theme={theme}>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProviderProxy>
  )
}

export default App
