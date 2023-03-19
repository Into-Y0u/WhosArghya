import Link from "next/link";
import db from "../../Database.js";
import styles from "../../styles/Navbar.module.css";
import NavbarLink from "./NavbarLink.jsx";


const Navbar = () => {

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
          { db.NavbarLinks.map((ele) => (
            <NavbarLink key={ele.id} ele={ele}  />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Navbar;