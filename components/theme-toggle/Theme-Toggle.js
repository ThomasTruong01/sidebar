import { useState, useEffect } from 'react'
import Switch from "react-switch";
import styles from '../../styles/ThemeToggle.module.css'

const ThemeToggle = () => {
  const [DarkMode, setDarkMode] = useState(false)

  const handleChange = () => {
    setDarkMode(!DarkMode)

    toggleDarkMode(DarkMode)
    setDarkModeLocalStorage(DarkMode)
  }

  // Toggles the "dark-mode" class
  const toggleDarkMode = state => {
    document.querySelector(`body`).setAttribute('dark-mode', state)
  }

  // Sets localStorage state
  const setDarkModeLocalStorage = state => {
    localStorage.setItem('dark-mode', state)
  }

  useEffect(() => {
    const useDark = window.matchMedia('(prefers-color-scheme: dark)')
    setDarkMode(useDark.matches)
  }, [])

  useEffect(() => {
    const useDark = window.matchMedia('(prefers-color-scheme: dark)')
    toggleDarkMode(DarkMode)
  }, [DarkMode])
  return (
    <div className={styles.toggle}>
      <p className={styles.title}> Switch Between Light and Dark Mode </p>{' '}
      {/* <Switch onChange={handleChange} checked={DarkMode} /> */}{' '}
      <Switch
        checked={DarkMode}
        onChange={handleChange}
        offColor='#1416b8'
        onColor='#353535'
        // className="react-switch mx-auto"
        width={90}
        height={40}
        uncheckedIcon={<i className='bx bx-moon'> </i>}
        checkedIcon={<i className='bx bxs-sun'> </i>}
        id='icon-switch'
      />
    </div>
  )
}

export default ThemeToggle
