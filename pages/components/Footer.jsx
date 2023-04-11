import styles from "../../styles/Footer.module.css"
import { useRouter } from "next/router";
import Link from "next/link";
import { Codeforces, Geeksforgeeks, Github, Gmail, Hackerrank, Leetcode, Linkedin, Medium, Twitter } from "@icons-pack/react-simple-icons";

const Footer = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <li>
          <Link href="https://www.linkedin.com/in/arghyadev-sarkar/" passHref>
            <a href="https://www.linkedin.com/in/arghyadev-sarkar/" target="_blank">
              <Linkedin color="#00ffff"  size={30} className={styles.ico}/>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/WhosArghya" passHref>
            <a href="https://twitter.com/WhosArghya" target="_blank">
              <Twitter color="#00ffff"  size={30} className={styles.ico}/>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/Into-Y0u" passHref>
            <a href="https://github.com/Into-Y0u" target="_blank">
              <Github color="#00ffff"  size={30} className={styles.ico}/>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.hackerrank.com/Into_You" passHref>
            <a href="https://www.hackerrank.com/Into_You" target="_blank">
              <Hackerrank color="#00ffff"  size={30} className={styles.ico}/>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://auth.geeksforgeeks.org/user/7arghyadev" passHref>
            <a href="https://auth.geeksforgeeks.org/user/7arghyadev" target="_blank">
              <Geeksforgeeks color="#00ffff"  size={30} className={styles.ico}/>
            </a>
          </Link>
        </li>
        <li>
          <Link href="mailto:7arghyadev@gmail.com" passHref>
            <a href="mailto:7arghyadev@gmail.com" target="_blank">
              <Gmail color="#00ffff"  size={30} className={styles.ico}/>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://leetcode.com/Into_You/" passHref>
            <a href="https://leetcode.com/Into_You/" target="_blank">
              <Leetcode color="#00ffff"  size={30} className={styles.ico}/>
            </a>
          </Link>
        </li>


      </div>
    </div>
  )
}

export default Footer;