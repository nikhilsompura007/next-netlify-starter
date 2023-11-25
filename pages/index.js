import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to StringValidation API Service!" />
        <p className="description">
          Validate your user input and secure your site.
        </p>
        <a href='/tools'> Cross Site Script validation</a>
      </main>

      <Footer />
    </div>
  )
}
