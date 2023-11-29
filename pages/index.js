import Frontpage from './components/Frontpage';
import Skills from './components/Skills';
import Exp from './components/Exp';
import Projects from './components/Projects';
import APOD from './components/APOD';
import styles from '../styles/Front.module.css';
import Spotify from './components/Spotify';



export default function Home() {
  return (
      <>
        <Frontpage/>
        <APOD/>
        <Exp/>
        <Skills/>
        <Projects/>
        <Spotify/>

    </>
  )
}
