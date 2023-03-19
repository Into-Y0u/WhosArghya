import {useState} from 'react';
import db from "../../Database.js";
import styles from '../../styles/Exp.module.css';
import ExpComp from './ExpComp.jsx';

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
              <ExpComp key={ele.id} ele={ele} />
            ))
          }
      </div>
  )
}
export default Exp;


