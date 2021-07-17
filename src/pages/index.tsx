import React from 'react'
import Head from 'next/head'
import { Toast } from '../components/Toast'

import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Components tests | GS-Tests</title>
        <meta name="description" content="Genegis systems app to test components" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <Toast />
      </main>
    </div>
  )
}
