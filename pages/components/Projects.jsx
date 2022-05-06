import styles from '../../styles/Project.module.css'
import { C, CssThree, Firebase, Github, Googlechrome, Heroku, Html5, Javascript, Linkedin, Mozilla, Mysql, Nextdotjs, Opera, Postman, Python, ReactJs } from "@icons-pack/react-simple-icons";
import Link from 'next/link';
import db from '../../Database';

const Projects = () => {
  return (
    <div className={styles.container}>
      {db.projs.map((pro ) => (
        <div className={styles.left}>
          <div  className={styles.element}>
            <h2 className={styles.compTitle}>{pro.projTitle}</h2>
            <div className={styles.tech}  > 
              <Nextdotjs color="#00ffff" title="Next.JS" size={30} className={styles.ico} />
              <CssThree color="#00ffff" title="CSS" size={30} className={styles.ico} />
              <Firebase color="#00ffff" title="Firebase" size={30} className={styles.ico} />
              <ReactJs color="#00ffff" title="Firebase" size={30} className={styles.ico} />

            </div>
            
            <div className={styles.child}>
              <div className={styles.compRole}>
                <Link href="https://flaviocopes.com/nextjs-open-link-new-window/" passHref>
                  <a target="_blank"><Googlechrome  color="#ffffff" title="Deployed Link" size={35} className={styles.ico}/></a>
                </Link>
              </div>

              <div className={styles.compRole}>
              <Link href="https://flaviocopes.com/nextjs-open-link-new-window/" passHref>
                  <a target="_blank"><Github  color="#ffffff" title="Github Repo" size={35} className={styles.ico} /></a>
                </Link>
              </div>
            </div>
            <div>
              <p className={styles.compPara}>{pro.projDesc}
              </p>
            </div>
          </div>
        </div>

      ))}

    </div> 
    
  )
}

export default Projects;