import styles from '../../styles/Nav.module.css'

const NavItems = ({ item, active }) => {
  return (
    <li className={`${styles.nav_items} ${active}`}>
      <i className={`bx ${item.className}`}></i>
      <span>{item.text}</span>
    </li>
  )
}

export default NavItems
