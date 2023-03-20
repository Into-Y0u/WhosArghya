import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import { Gmail, Linkedin,Twitter } from "@icons-pack/react-simple-icons";

const Frontpage = () => {

  const db = {
    intro : {
      hi : "Hi there!!!!",
      introduction : "This's Arghya",
      para1 : "    Currently working as a Member of Technical staff (Backend Developer) at Zoho Corporation Pvt. Ltd. I have completed my B.Tech on 2022.",
      para2 : "    Technology excites me and I am always in awe of the change it drives in the world. Love to Collaborate and Learn new Techs and enhance skills",
      connect : "Lets Connect.!🤝"
  }
  }

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
              <Link href="https://www.linkedin.com/in/arghyadev-sarkar/" passHref>
                <a href="https://www.linkedin.com/in/arghyadev-sarkar/" target="_blank">
                  <Linkedin color="#ffffff"  size={25} className={styles.ico}/>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/WhosArghya" passHref>
                <a href="https://twitter.com/WhosArghya" target="_blank">
                  <Twitter color="#ffffff"  size={25} className={styles.ico}/>
                </a>
              </Link>
            </li>
            <li>
              <Link href="mailto:7arghyadev@gmail.com" passHref>
                <a href="mailto:7arghyadev@gmail.com" target="_blank">
                  <Gmail color="#ffffff"  size={25} className={styles.ico}/>
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
