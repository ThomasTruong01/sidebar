import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SideBar from '../components/SideBar/Sidebar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SideBar</title>
        <meta name="description" content="Sidebar Component" />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </Head>

      <SideBar />
      <main className={styles.main}>
      </main>
    </div>
  )
}
