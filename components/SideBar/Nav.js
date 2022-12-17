import { Fragment, useEffect } from 'react'
import styles from '../../styles/Nav.module.css'
import NavList from './NavList'

const Nav = ({ Expand }) => {
  const navParams = [
    {
      title: 'Management',
      items: [
        {
          text: 'Dashboard',
          className: 'bxs-dashboard'
        },
        {
          text: 'Analytics',
          className: 'bxs-bar-chart-alt-2'
        },
        {
          text: 'Wallet',
          className: 'bxs-wallet'
        },
        {
          text: 'Notifications',
          className: 'bxs-bell'
        },
        {
          text: 'Setting',
          className: 'bxs-dashboard'
        }
      ]
    },
    {
      title: 'Support',
      items: [
        {
          text: 'Get Help',
          className: 'bxs-help-circle'
        },
        {
          text: 'Send Feedback',
          className: 'bxs-message-dots'
        }
      ]
    }
  ]
  const addEventListener = () => {
    const navItems = document.querySelectorAll(`.${styles.nav_items}`)

    navItems.forEach(navItem => {
      navItem.addEventListener('click', () => {
        navItems.forEach(navItem => {
          navItem.classList.remove(`${styles.active}`)
        })
        navItem.classList.add(`${styles.active}`)
      })
    })
  }
 
  useEffect(() => {
    addEventListener()
  }, [])

  return (
    <nav className={styles.nav} aria-expanded={Expand}>
      {navParams.map((item, idx) => {
        return (
          <Fragment key={idx} >
            <NavList navParam={item} />
            {idx + 1 !== navParams.length ? <hr /> : null}
          </Fragment>
        )
      })}
    </nav>
  )
}

export default Nav
