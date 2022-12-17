import styles from '../../styles/Nav.module.css'
import NavItems from './NavItems'

const NavList = ({ navParam }) => {
  const navItems = navParam.items

  return (
    <>
      <div className={styles.nav_title}>{navParam.title}</div>
      <ul>
        {navItems.map((item, idx) => {
          const active = idx === 0 ? `${styles.active}` : ''
          return <NavItems key={idx} item={item} active={active} />
        })}
      </ul>
    </>
  )
}

export default NavList
