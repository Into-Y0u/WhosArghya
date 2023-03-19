import Frontpage from './components/Frontpage';
import Skills from './components/Skills';
import Exp from './components/Exp';
import Projects from './components/Projects';
import APOD from './components/APOD';
import styles from '../styles/Front.module.css';



export default function Home() {
  return (
      <>
        <Frontpage/>
        <APOD/>
        <div className={styles.gap} >
          Experience
        </div>
        <Exp/>
        <div className={styles.gap} style={{"marginTop":"10vh"}} >
          Skills
        </div>
        <Skills/>
        <div className={styles.gap} >
          Projects
        </div>
        <Projects/>
    </>
  )
}
