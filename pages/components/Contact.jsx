import styles from '../../styles/Contact.module.css'
import { Codeforces,Github, Gmail, Hackerrank, Leetcode, Linkedin, Twitter } from "@icons-pack/react-simple-icons";
import Link from 'next/link';


const Contact = () => {
  return (
    <div className={styles.container}  >

        <div className={styles.left}>
          <div  className={styles.element}>
            <img className={styles.img} src="content/seeYou.gif" alt=""  />
          </div>

       
        </div>

        <div className={styles.right}>
          <div className={styles.skillset} >
            <div className={styles.skills} >
              <Link href="https://www.linkedin.com/in/arghyadev-sarkar/" passHref>
                  <a target="_blank"><Linkedin color="#ffffff" title="My title" size={40} className={styles.ico} /></a>
              </Link>
              <Link href="mailto:7arghyadev@gmail.com" passHref>
                  <a target="_blank"><Gmail color="#ffffff" title="My title" size={40} className={styles.ico} /></a>
              </Link>
              <Link href="https://twitter.com/WhosArghya" passHref>
                  <a target="_blank"><Twitter color="#ffffff" title="My title" size={40} className={styles.ico} /></a>
              </Link>
            </div>
          </div>
          <div className={styles.skillset} >
            <div className={styles.skills} >
              <Link href="https://github.com/Into-Y0u" passHref>
                  <a target="_blank"><Github color="#ffffff" title="My title" size={40} className={styles.ico} /></a>
              </Link>
              <Link href="https://leetcode.com/Into_You/" passHref>
                  <a target="_blank"><Leetcode color="#ffffff" title="My title" size={40} className={styles.ico} /></a>
              </Link>
              <Link href="https://www.hackerrank.com/Into_You?" passHref>
                  <a target="_blank"><Hackerrank color="#ffffff" title="My title" size={40} className={styles.ico} /></a>
              </Link>
              <Link href="https://codeforces.com/profile/Into_You" passHref>
                  <a target="_blank"><Codeforces color="#ffffff" title="My title" size={40} className={styles.ico} /></a>
              </Link>
            </div>
          </div>

        </div>
        
    </div> 
    
  )
}

export default Contact;


