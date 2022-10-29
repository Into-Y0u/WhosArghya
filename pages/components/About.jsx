import styles from '../../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <div  className={styles.element}>
            <h2 className={styles.compTitle}>Cooch Behar Government Engineering College</h2>
            <div className={styles.child}>
              <div className={styles.compRole}>B.Tech on Electrical Engineering</div>
              <div className={styles.compTimeline}>August 2018 - July 2022</div>
            </div>
            <div className={styles.child}>
              <div className={styles.compRole} style ={{fontSize:"15px"}} >CGPA : 8.80</div>
            </div>
          </div>
          <div  className={styles.element}>
            <h2 className={styles.compTitle}>Purba Barasat Adarsha Bidyapeeth</h2>
            <div className={styles.child}>
              <div className={styles.compRole}>Science Stream ( PCM + CompSc )</div>
              <div className={styles.compTimeline}>- March 2017</div>
            </div>
            <div className={styles.child}>
              <div className={styles.compRole} style ={{fontSize:"15px"}} >Percentage : 74%</div>
            </div>
          </div>
       
        </div>


        {/* Currently serving as an intern at Cognizant Technology Solutions , India as Database Visualization and Normalization domain . */}
        <div className={styles.right}> 
          Hello!! , <br/> This is Arghya .<br/> I have completed my Bachelors on Electrical Engineering in 2022 . 
          <br/>
          <br/>
          Technology excites me and I am always in awe of the change it drives in the world. Certain skills that I have worked with include Data Structures and Algorithms (Py + cpp), Web Development (NodeJs, MySQL , ReactJs, Nodejs) and Machine Learning Enthusiast (Python). And what I might lack in skills I make up for with my determination to learn.
          <br/>
          <br/>
          Outside of tech, I am a Movie lover, an amateur EDM Producer and have spent my college days nurturing a lot of side hobbies along with studies
          


        </div>
    </div>
  )
}

export default About
