import styles from '../../styles/SideBarLogo.module.css'

const Logo = ({Expand}) => {
    return (
        <div className={styles.logo} aria-expanded={Expand}>
            <svg stroke="var(--button-color)" fill="none" className={styles.logo} viewBox="0 0 100 100" width="35">
                <path d='m 40 5 h -30 a 1 1 0 0 0 0 10 h 30 a 0 0 0 0 0 10 -10 h 30 a 1 1 0 1 1 0 10 h -30 v 60 a 1 1 0 0 1 -10 0 v -50'
                      className={styles.line1}
                      strokeWidth='3'
                      strokeLinecap='round'
                      strokeLinejoin='round'/>
                <path d='m 55 20 h -30 a 1 1 0 0 0 0 10 h 30 a 0 0 0 0 0 10 -10 h 30 a 1 1 0 1 1 0 10 h -30 v 60 a 1 1 0 0 1 -10 0 v -50'
                      className={styles.line2}
                      strokeWidth='3'
                      strokeLinecap='round'
                      strokeLinejoin='round'/>
            </svg>
            <h3>Thomas Truong</h3>
        </div>
    )
}

export default Logo
