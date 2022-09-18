import React from 'react'
import styles from '../styles/status-color.module.css'

const Header = () => {
  return (
    <header>
      <div className={styles.statuscontainer}>
        <div className={styles.statuscolor}>
          <div className={styles.statuscolor1}></div>
          <p>Published</p>
        </div>

        <div className={styles.statuscolor}>
          <div className={styles.statuscolor2}></div>
          <p>Scheduled</p>
        </div>

        <div className={styles.statuscolor}>
          <div className={styles.statuscolor3}></div>
          <p>Need Approval</p>
        </div>

        <div className={styles.statuscolor}>
          <div className={styles.statuscolor4}></div>
          <p>Error</p>
        </div>

        <div className={styles.statuscolor}>
          <div className={styles.statuscolor5}></div>
          <p>Notes</p>
        </div>
      </div>
    </header>
  )
}

export default Header
