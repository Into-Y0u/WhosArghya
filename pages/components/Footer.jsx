import styles from "../../styles/Footer.module.css"
import { useRouter } from "next/router";
import Link from "next/link";
import { Codeforces, Github, Hackerrank, Leetcode, Linkedin, Medium, Twitter } from "@icons-pack/react-simple-icons";

const Footer = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <li>
          <Link href="https://boat-clone-eta.vercel.app/" passHref>
            <a href="google.com" target="_blank">
              <Linkedin color="#00ffff"  size={30} className={styles.ico}/>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://boat-clone-eta.vercel.app/" passHref>
            <a href="google.com" target="_blank">
              <Twitter color="#00ffff"  size={30} className={styles.ico}/>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://boat-clone-eta.vercel.app/" passHref>
            <a href="google.com" target="_blank">
              <Github color="#00ffff"  size={30} className={styles.ico}/>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://boat-clone-eta.vercel.app/" passHref>
            <a href="google.com" target="_blank">
              <Hackerrank color="#00ffff"  size={30} className={styles.ico}/>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://boat-clone-eta.vercel.app/" passHref>
            <a href="google.com" target="_blank">
              <Codeforces color="#00ffff"  size={30} className={styles.ico}/>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://boat-clone-eta.vercel.app/" passHref>
            <a href="google.com" target="_blank">
              <Medium color="#00ffff"  size={30} className={styles.ico}/>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://boat-clone-eta.vercel.app/" passHref>
            <a href="google.com" target="_blank">
              <Leetcode color="#00ffff"  size={30} className={styles.ico}/>
            </a>
          </Link>
        </li>


      </div>
    </div>
  )
}

export default Footer;