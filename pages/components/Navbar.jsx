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
          <li className={styles.listItem} onClick={() => router.push('/exppage')}  >Skills/Exps</li>
          <li className={styles.listItem} onClick={() => router.push('/projectspage')} >Projects</li>
          <li className={styles.listItem} onClick={() => router.push('/aboutpage')} >Abouts</li>
          <li className={styles.listItem} onClick={() => router.push('/contactpage')} >Contacts</li>

        </div>
      </div>
  

    </div>
  )
}

export default Navbar