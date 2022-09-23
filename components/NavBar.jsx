import React from 'react'
import styles from '../styles/navbar.module.css'
import Logo from '../public/images/logo.svg'
import Icon1 from '../public/images/icon1.svg'
import Icon2 from '../public/images/icon2.svg'
import Icon3 from '../public/images/icon3.svg'
import Icon4 from '../public/images/icon4.svg'
import Icon5 from '../public/images/icon5.svg'
import Icon6 from '../public/images/icon6.svg'

import Engage from '../public/images/engage.svg'
import Listen from '../public/images/listen.svg'
import Notification from '../public/images/notification.svg'
import Publish from '../public/images/publish.svg'
import Summary from '../public/images/summary.svg'
import Report from '../public/images/report.svg'
import Cross from '../public/images/cross.svg'
import Line from '../public/images/line.svg'

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
              <div className={styles.active}></div>
            </div>
            <div className={styles.iconcontainer}>
              <Icon5 />
            </div>
            <div className={styles.iconcontainer}>
              <Icon6 />
            </div>
          </div>
        </div>

        <div className={styles.navmenu}>
          <div className={styles.notificationcontainer}>
            <Notification className={styles.menuicons} />
            <p>NOTIFICATIONS</p>
            <div className={styles.notification}>
              <span>29</span>
            </div>
          </div>
          <div className={styles.menu}>
            <Summary className={styles.menuicons} />
            <p>SUMMARY</p>
            <Cross className={styles.cross} />
          </div>
          <div>
            <div id={styles.chosen} className={styles.menuchosen}>
              <Publish className={styles.menuicons} />
              <p>PUBLISH</p>
              <Line className={styles.cross} />
            </div>
            <div className={styles.triangledown}></div>
            <div className={styles.accordioncontainer}>
              <ul className={styles.accordion}>
                <li className={styles.acc}>Compose</li>
                <li className={styles.acc}>Feed</li>
              </ul>
            </div>
          </div>
          <div className={styles.menu}>
            <Engage className={styles.menuicons} />
            <p>ENGAGE</p>
            <Cross className={styles.cross} />
          </div>
          <div className={styles.menu}>
            <Listen className={styles.menuicons} />
            <p> LISTEN</p>
            <Cross className={styles.cross} />
          </div>
          <div className={styles.menu}>
            <Report className={styles.menuicons} />
            <p>REPORT</p>
            <Cross className={styles.cross} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
