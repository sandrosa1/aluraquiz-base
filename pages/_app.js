import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Averia Serif Libre', cursive;
    font-weight:700;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Copas Quiz</title>
          <meta name="title" content="Copas Quiz"/>
          <meta name="description" content="Um super quiz para testar seu conhecimento e copas do mundo."/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://historias-das-copas-git-main.sandrosa1.vercel.app/"/>
          <meta property="og:title" content="Copas Quiz"/>
          <meta property="og:description" content="Um super quiz para testar seu conhecimento e copas do mundo."/>
          <meta property="og:image" content=""/>
          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://historias-das-copas-git-main.sandrosa1.vercel.app/"/>
          <meta property="twitter:title" content="Copas Quiz"/>
          <meta property="twitter:description" content="Um super quiz para testar seu conhecimento e copas do mundo."/>
          <meta property="twitter:image" content=""/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet"></link>
        </Head>
      <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
