import React from 'react'
import styles from '../styles/navbar.module.css'
import Logo from '../public/images/logo.svg'
import Icon1 from '../public/images/icon1.svg'
import Icon2 from '../public/images/icon2.svg'
import Icon3 from '../public/images/icon3.svg'
import Icon4 from '../public/images/icon4.svg'
import Icon5 from '../public/images/icon5.svg'
import Icon6 from '../public/images/icon6.svg'

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.menucontainer}>
        <div className={styles.navlogo}>
          <div className={styles.icons}>
            <div className={styles.iconcontainer}>
              <Icon1 />
            </div>
            <div className={styles.iconcontainer}>
              <div className={styles.greennotf}>
                <span>99</span>
              </div>
              <Icon2 />
            </div>
            <div className={styles.iconcontainer}>
              <Icon3 />
            </div>
            <div className={styles.iconcontainer}>
              <Icon4 />
            </div>
            <div className={styles.iconcontainer}>
              <Icon5 />
            </div>
            <div className={styles.iconcontainer}>
              <Icon6 />
            </div>
          </div>
        </div>
        <div className={styles.navmenu}></div>
      </div>
    </div>
  )
}

export default NavBar
