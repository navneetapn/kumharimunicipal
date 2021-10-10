import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Homepage from './homepage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kumhari Nagar Palika</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Header />
      <Homepage />
      <Footer />
    </>
  )
}
