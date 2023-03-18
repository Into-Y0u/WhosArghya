import styles from "../../styles/Navbar.module.css"
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <a className={styles.logo} onClick={() => router.push('/')} >WhosArghya??</a>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.list}>
          <li className={styles.listItem} onClick={() => router.push('/')} >Home</li>
          <li className={styles.listItem} onClick={() => router.push('/apod')} >Apod</li>
          <li className={styles.listItem} onClick={() => router.push('/exppage')}  >Experince</li>
          <li className={styles.listItem} onClick={() => router.push('/skills')}  >Skills</li>
          <li className={styles.listItem} onClick={() => router.push('/projectspage')} >Projects</li>
        </div>
      </div>
  

    </div>
  )
}

export default Navbar