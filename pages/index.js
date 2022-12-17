import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SideBar from '../components/SideBar/Sidebar'
import ToggleTheme from '../components/theme-toggle/Theme-Toggle.js'



export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>SideBar</title>
        <meta name="description" content="Sidebar Component" />
        <link rel="icon" href="/TTLogo.ico" />
      </Head>

      <SideBar />
      <main className={styles.main}>
        <div className={styles.card}>
          <ToggleTheme />
        </div>
          
      </main>
    </div>
  )
}
