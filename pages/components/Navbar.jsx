import Link from "next/link";
import styles from "../../styles/Navbar.module.css";


const Navbar = () => {
  const db = {
    webName : "<WhosArghya/>",
  }
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div>
          <Link href="/" passHref>
            <a className={styles.logo}>{db.webName}</a>
          </Link>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.list}>
          <li className={styles.listItem} >
              <Link href="/"  passHref>Home</Link>
          </li>

          <li className={styles.listItem} >
            <Link href="/apod"  passHref>APOD</Link>
          </li>
          <li className={styles.listItem} >
              <Link href="/exps"  passHref>Exps</Link>
          </li>
          <li className={styles.listItem} >
              <Link href="/skills"  passHref>Skills</Link>
          </li>
          <li className={styles.listItem} >
              <Link href="/projects" passHref>Projects</Link>
          </li>
        </div>
      </div>

    </div>
  )
}

export default Navbar;