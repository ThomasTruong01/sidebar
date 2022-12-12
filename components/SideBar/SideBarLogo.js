import styles from '../../styles/SideBarLogo.module.css'
const Logo = ({Expand}) => {
    return (
        <div className={styles.logo} aria-expanded={Expand}>
            <img src='./IMG_2882.jpeg' />
            <h3>Thomas Truong</h3>
        </div>
    )
}

export default Logo
