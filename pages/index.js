import Frontpage from './components/Frontpage';
import About from './components/About';
import Skills from './components/Skills';
import Exp from './components/Exp';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';
import APOD from './components/APOD';
import styles from '../styles/Front.module.css';



export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar/>
      </div>
      <div className={styles.mainContent}  >
        <Frontpage/>
        <div className={styles.gap} >
          NASA APOD
        </div>
        <APOD/>
        <div className={styles.gap} >
          Experience
        </div>
        <Exp/>
        <div className={styles.gap} >
          Skills
        </div>
        <Skills/>
        <div className={styles.gap} >
          Projects
        </div>
        <Projects/>
        <div className={styles.gap} >
          Abouts
        </div>
        <About/>
      </div>
      <div className={styles.sidebar}>
        <Sidebar/>
      </div>
    </div>
  )
}
