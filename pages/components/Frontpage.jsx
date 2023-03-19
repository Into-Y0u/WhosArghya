import styles from '../../styles/Home.module.css';
import db from "../../Database.js";
import Link from 'next/link';
import { Codeforces, Github, Gmail, Hackerrank, Leetcode, Linkedin, Medium, Twitter } from "@icons-pack/react-simple-icons";

const Frontpage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <h2>
            {db.intro.hi}
          </h2>
          <h3>{db.intro.introduction}</h3>
          <p>{db.intro.para1}
            <br />
            <br />
            {db.intro.para2}
.</p>
          <p>{db.intro.connect}</p> 
          <ul className={styles.list}>
            <li>
              <Link href="https://boat-clone-eta.vercel.app/" passHref>
                <a href="" target="_blank">
                  <Linkedin color="#ffffff"  size={20} className={styles.ico}/>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://boat-clone-eta.vercel.app/" passHref>
                <a href="" target="_blank">
                  <Twitter color="#ffffff"  size={20} className={styles.ico}/>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://boat-clone-eta.vercel.app/" passHref>
                <a href="" target="_blank">
                  <Gmail color="#ffffff"  size={20} className={styles.ico}/>
                </a>
              </Link>
            </li>
          </ul>
          <a href= "content/Arghyadev_Sarkar_Resume.pdf" download>
              <button>
                    Resume
              </button>  
          </a>

        </div>
        <div className={styles.right}>
          <img className={styles.img} src="content/giphy (1).gif" alt=""  />
        </div> 
    </div>
  )
}

export default Frontpage
