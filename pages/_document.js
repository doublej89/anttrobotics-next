import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <div id='login-popup'></div>
        <Script src="/js/jquery-3.5.1.min.js"></Script>
        <Script src="/js/plugins.js"></Script>
        <Script src="/js/main.js"></Script>
      </body>
    </Html>
  )
}