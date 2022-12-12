import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SideBar from '../components/SideBar/Sidebar'
import Switch from "react-switch"
import { useState, useEffect } from 'react'


export default function Home() {
  const [DarkMode, setDarkMode] = useState(false)

  const handleChange = () => {
    setDarkMode(!DarkMode);

    toggleDarkMode(DarkMode);
    setDarkModeLocalStorage(DarkMode);
  }


// MediaQueryList object

// Toggles the "dark-mode" class
const toggleDarkMode = (state) => {
  document.querySelector(`body`).setAttribute('dark-mode',state);
}

// Sets localStorage state
const setDarkModeLocalStorage = (state) => {
  localStorage.setItem("dark-mode", state);
}

useEffect(() => {
  const useDark = window.matchMedia("(prefers-color-scheme: dark)");
}, [])

useEffect(() => {
  const useDark = window.matchMedia("(prefers-color-scheme: dark)");
  let darkModeState = useDark.matches;
  toggleDarkMode(DarkMode);
}, [DarkMode])

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
        <div className={styles.card}>
          <p className={styles.title}>Switch Between Light and Dark Mode</p>
          {/* <Switch onChange={handleChange} checked={DarkMode} /> */}
          <Switch
                checked={DarkMode}
                onChange={handleChange}
                offColor="#1416b8"
                onColor="#353535"
                // className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <i className='bx bx-moon' ></i>
                }
                checkedIcon={
                  <i className='bx bxs-sun' ></i>
                }
                id="icon-switch"
              />
        </div>
      </main>
    </div>
  )
}
