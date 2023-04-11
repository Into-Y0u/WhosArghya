import {useState} from 'react';
import styles from '../../styles/Exp.module.css';

const Exp = () => {
  const [cur1, setCur1] = useState(false);
  const [cur2, setCur2] = useState(false);

  const handleToggle1 = () => {
    setCur1(cur1 => !cur1);
  }

  const handleToggle2 = () => {
    setCur2(cur2 => !cur2);
  }

  return (
    <div className={styles.main}>
      <div className={styles.container1}>
        <h1 className={styles.containerTitle}>Experince</h1>
      </div>

      <div className={styles.container}>
        <div className={styles.company}>
            <div  className={styles.element}>
                <div className={styles.intro} >
                <div className={styles.imgBunch} >
                    <img src="/content/zoho.png" alt="Zoho" />
                </div>

                <div className={styles.titleBunch}   >
                    <h2 className={styles.compTitle}>Zoho Corporation</h2>
                    <div className={styles.child}>
                    <div className={styles.compRole}>Chennai, In</div>
                    <div className={styles.compRole}>Aug 2022 - Present</div>
                    </div>
                    <h3 className={styles.compRole2}>Member Technical Staff (Backend)</h3>
                </div>

                </div>

                <div className={styles.description}  >
                <p className={styles.compPara}>Technologies : Core Java, Struts 2 and Backend Operations ; Team - Zoho Video Platform.</p>
                <div className={cur1 ? styles.butList : styles.butListRev}>
                    <button onClick={handleToggle1} className={styles.but} >{cur1 ? "Show Less" : "Show More"}</button>
                    <ul className={cur1 ? styles.moreTrue : styles.moreFalse}  >
                      <li>Wrote and Integrated 5 new APIs to implement the newest feature “Waiting Room” in the conference that accepts requests from the joiners and notify host/co host to join in ; Handles them on the server end and executes DB operations as per use cases</li>
                      <li>
                      Fixed issue of pre-call making anomaly and improved unauthorized call detection system, speeded up the reaction 90% faster.
                      </li>
                      <li>
                      Designed and developed an API for the service team to fetch the details of all participants of an ongoing or any previously occurred conference
                      </li>
                      <li>
                      Improved system to delete "unnecessary" data from DB periodically to free up the load and optimize the space.
                      </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>

        <div className={styles.company}>
            <div  className={styles.element}>
                <div className={styles.intro} >
                <div className={styles.imgBunch} >
                    <img src="/content/cogni.png" alt="Cognizant" />
                </div>

                <div className={styles.titleBunch}   >
                    <h2 className={styles.compTitle}>Cognizant</h2>
                    <div className={styles.child}>
                    <div className={styles.compRole}>Kolkata, In</div>
                    <div className={styles.compRole}>Feb 2022 - May 2022</div>
                    </div>
                    <h3 className={styles.compRole2}>PAT Intern (Database Vis. & Norm.)</h3>
                </div>

                </div>

                <div className={styles.description}  >
                <p className={styles.compPara}>Worked as an Intern under the offer of Programming Analyst Traniee.</p>
                <div className={cur2 ? styles.butList : styles.butListRev}>
                    <button onClick={handleToggle2} className={styles.but} >{cur2 ? "Show Less" : "Show More"}</button>
                    <ul className={cur2 ? styles.moreTrue : styles.moreFalse}  >
                      <li>Domain : Database Visualization and Normalization (Cohort Topper : ICT score : 88% and descent confederate with elocution).</li>
                      <li>
                      Trained on Database Management System , Data Modeling ; Tech Stack learnt : MySql, Data Analysis and Visualization tools : QlikView, Tableau.
                      </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Exp;


