import styles from "../../styles/Sidebar.module.css";

import React from 'react';
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.list}>
          <li className={styles.listItem} onClick={() => router.push('https://www.linkedin.com/in/arghyadev-sarkar/')}>
            <img src="content/IconPack/linkedin.png" alt="LinkedIn" />
          </li>
          <li className={styles.listItem} onClick={() => router.push('/exppage')}>
            <img src="content/IconPack/leetcode.png" alt="Leetcode" />
          </li>
          <li className={styles.listItem} onClick={() => router.push('/projectspage')} >
          <img src="content/IconPack/gmail.png" alt="Gmail"/>
          </li>
          <li className={styles.listItem} onClick={() => router.push('/memes')} >
          <img src="content/IconPack/twitter.png" alt="Twitter"/></li>
          <li className={styles.listItem} onClick={() => router.push('/memes')} >
          <img src="content/IconPack/github.png" alt="Github"/></li>
          <li className={styles.listItem} onClick={() => router.push('/memes')} >
          <img src="content/IconPack/hackerrank.png" alt="HackerRank"/></li>

        </div>
      </div>
  

    </div>
  )
}

export default Sidebar