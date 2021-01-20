import '../styles/index.css'
import 'aos/dist/aos.css'
import Head from 'next/head'
import {ThemeProvider} from 'next-themes'
import * as React from 'react'
import Layout from '../components/Layout'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({Component, pageProps}) {
  React.useEffect(() => {
    document
      .querySelector(':root')
      .style.setProperty('--vh', window.innerHeight / 100 + 'px')
    window.addEventListener(
      'resize',
      () => {
        document
          .querySelector(':root')
          .style.setProperty('--vh', window.innerHeight / 100 + 'px')
      },
      {
        passive: true,
      },
    )
  }, [])
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
