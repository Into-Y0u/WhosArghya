import styles from "../../styles/Sidebar.module.css";

import React from 'react'

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.list}>
          <li className={styles.listItem} onClick={() => router.push('/')} >LinkedIn</li>
          <li className={styles.listItem} onClick={() => router.push('/exppage')}  >Leetcode</li>
          <li className={styles.listItem} onClick={() => router.push('/projectspage')} >Youtube</li>
          <li className={styles.listItem} onClick={() => router.push('/memes')} >Instagram</li>

        </div>
      </div>
  

    </div>
  )
}

export default Sidebar