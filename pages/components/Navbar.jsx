import styles from "../../styles/Navbar.module.css"
import { useRouter } from "next/router";
import {  Arduino, C, CssThree, Django,  Expertsexchange,  Expressvpn,  Firebase, Firefox, Github,  Homeadvisor,  Html5, Javascript, Materialui,  Netlify, Nextdotjs, Python, Qubesos, Quest, ReactJs, Skillshare, Skyliner, Socketdotio, Stripe, Themoviedatabase, Vercel, Wordpress } from "@icons-pack/react-simple-icons";
import Link from 'next/link';

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
          <li className={styles.listItem} onClick={() => router.push('/')}><Homeadvisor color="#00ffff"  size={30} className={styles.ico}/> </li>
          <li className={styles.listItem} onClick={() => router.push('/apod')} ><Qubesos color="#00ffff"  size={30} className={styles.ico}/> </li>
          <li className={styles.listItem} onClick={() => router.push('/exppage')}  ><Expressvpn color="#00ffff"  size={30} className={styles.ico}/> </li>
          <li className={styles.listItem} onClick={() => router.push('/skills')}  ><Expertsexchange color="#00ffff"  size={30} className={styles.ico}/> </li>
          <li className={styles.listItem} onClick={() => router.push('/projectspage')} ><Skyliner color="#00ffff"  size={30} className={styles.ico}/> </li>
        </div>
      </div>
  

    </div>
  )
}

export default Navbar