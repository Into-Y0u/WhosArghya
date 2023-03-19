import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

import React from 'react'

const NavbarLink = ({ ele}) => {
  return (
    <>
        <li className={styles.listItem} >
            <Link href={ele.path}  passHref>{ele.name}</Link>
        </li>
    </>
  )
}

export default NavbarLink