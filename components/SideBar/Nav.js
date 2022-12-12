import styles from '../../styles/Nav.module.css'
import { useEffect } from 'react';

const Nav = ({Expand}) => {
    const addEventListener = () => {
        const navItems = document.querySelectorAll(`.${styles.nav_items}`);

        navItems.forEach(navItem => {
            navItem.addEventListener('click', () => {
                navItems.forEach(navItem => {
                    navItem.classList.remove(`${styles.active}`);
                })
                navItem.classList.add(`${styles.active}`);
            })
        });

    }
    useEffect(() => {
        addEventListener()
    }, [])
    
    return (
        <nav className={styles.nav} aria-expanded={Expand}>
            <div className={styles.nav_title}>
                Management
            </div>
            <ul>
                <li className={`${styles.nav_items} ${styles.active}`}>
                    <i className='bx bxs-dashboard'></i>
                    <span>Dashbboard</span>
                </li>
                <li className={styles.nav_items}>
                    <i className='bx bxs-bar-chart-alt-2'></i>
                    <span>Analytics</span>
                </li>
                <li className={styles.nav_items}>
                    <i className='bx bxs-wallet'></i>
                    <span>Wallet</span>
                </li>
                <li className={styles.nav_items}>
                    <i className='bx bxs-bell'></i>
                    <span>Notifications</span>
                </li>
                <li className={styles.nav_items}>
                    <i className='bx bxs-cog'></i>
                    <span>Settings</span>
                </li>
            </ul>
            <hr />
            <div className={styles.nav_title}>
                Support
            </div>
            <ul>
                <li className={`${styles.nav_items}`}>
                    <i className='bx bxs-help-circle' ></i>
                    <span>Get Help</span>
                </li>
                <li className={styles.nav_items}>
                    <i className='bx bxs-message-dots'></i>
                    <span>Send Feedback</span>
                </li>

            </ul>
        </nav>

    )
}

export default Nav
