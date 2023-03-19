import {useState} from 'react';
import db from "../../Database.js";
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
      <div className={styles.container}>
          {
            db.exps.map((ele) => (
              <div className={styles.company}>
                <div  className={styles.element}>
                  <div className={styles.intro} >
                    <div className={styles.imgBunch} >
                      <img src={ele.compImg} alt={ele.compImgAlt} />
                    </div>

                    <div className={styles.titleBunch}   >
                      <h2 className={styles.compTitle}>{ele.compName}</h2>
                      <div className={styles.child}>
                        <div className={styles.compRole}>{ele.compPlace}</div>
                        <div className={styles.compRole}>{ele.compTimeLine}</div>
                      </div>
                      <h3 className={styles.compRole2}>{ele.compRole}</h3>
                    </div>

                  </div>

                  <div className={styles.description}  >
                    <p className={styles.compPara}>{ele.compIntroPara}</p>
                    <div className={cur1 ? styles.butList : styles.butListRev}>
                      <button onClick={handleToggle1} className={styles.but} >{cur1 ? "Show Less" : "Show More"}</button>
                      <ul className={cur1 ? styles.moreTrue : styles.moreFalse}  >
                        {ele.compPara.map((arrEle) => (
                          <li>{arrEle}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
      </div>
  )
}
export default Exp;


