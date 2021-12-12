import type { NextPage } from 'next'
import Head from 'next/head'
import SitesListSection from '../components/SitesListSection/SitesListSection'
import styles from '../components/PageWrapper/PageWrapper.module.css'
import PageWrapper from '../components/PageWrapper/PageWrapper'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Website Speedtests</title>
        <meta name="description" content="Speedtest comparison for websites" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <h1>
          Website speedtest comparison!
        </h1>
        <SitesListSection></SitesListSection>
      </PageWrapper>
    </div>
  )
}

export default Home