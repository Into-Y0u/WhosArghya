import Frontpage from './components/Frontpage';
import About from './components/About';
import Exp from './components/Exp';
import Contact from './components/Contact';
import Projects from './components/Projects';
import styles from '../styles/Front.module.css';



export default function Home() {
  return (
    <>
      <Frontpage/>
      <div className={styles.gap} >
        Exp and Skills
      </div>
      <Exp/>
      <div className={styles.gap} >
        Projects
      </div>
      <Projects/>
      <div className={styles.gap} >
        Abouts
      </div>
      <About/>
      <div className={styles.gap} >
        Contact Me
      </div>
      <Contact/>
    </>
  )
}
