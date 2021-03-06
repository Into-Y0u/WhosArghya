import styles from '../../styles/Exp.module.css'
import { Blogger, C, Cplusplus, CssThree, Databricks, Django, Figma, Firebase, Git, Github, Heroku, Html5, Java, Javascript, Json, Kotlin,  Linux,  Mongodb, Mysql, Netlify, Nextdotjs, Nodedotjs, Postman, Python, ReactJs, Shopify,  Tableau, Vercel, Visualstudiocode, Wix, Wordpress } from "@icons-pack/react-simple-icons";

import React from 'react'

const Exp = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <div  className={styles.element}>
            <h2 className={styles.compTitle}>Cognizant Technology Solutions, India. </h2>
            <div className={styles.child}>
              <div className={styles.compRole}>Programmer Analyst Traninee Intern</div>
              <div className={styles.compRole}>Feb 2022 - May 2022</div>
            </div>
            <div>
              <p className={styles.compPara}>Joined Cognizant as an Intern in CDB Database Visualisation and Normalisation Domain. Mostly Data Organise and Data analysis related training we have got here. Learnt a lot abut industry level softwares and works. 
              </p>
            </div>
          </div>
          <div  className={styles.element}>
            <h2 className={styles.compTitle}>Tutorial Cup </h2>
            <div className={styles.child}>
              <div className={styles.compRole}>Technical Content Writer           </div>
              <div className={styles.compRole}>April 2022 - May 2022</div>
            </div>
            <div>
              <p className={styles.compPara}>Technical Content Writing, Mostly Leetcode solve and explanation writing. I am comfortable with Python on solving leetcode. But I am learing Java for this , As at least 2 language explanantion/solve is mandatory here.
              </p>
            </div>
          </div>

       
        </div>







        <div className={styles.right}>
          <div className={styles.skillset} >
            <div className={styles.skills} >
              <Python color="#ffffff"  size={40} className={styles.ico} />
              <C color="#ffffff"  size={40} className={styles.ico} />
              <Javascript color="#ffffff"  size={40} className={styles.ico} />
              <Cplusplus color="#ffffff"  size={40} className={styles.ico} />
              <Kotlin color="#ffffff"  size={40} className={styles.ico} />
              <Java color="#ffffff"  size={40} className={styles.ico} />
              <Html5 color="#ffffff"  size={40} className={styles.ico} />
              <CssThree color="#ffffff"  size={40} className={styles.ico} />
             
            </div>
          </div>
          <div className={styles.skillset} >
            <div className={styles.skills} >
              <Mysql color="#ffffff"  size={40} className={styles.ico} />
              <Databricks color="#ffffff"  size={40} className={styles.ico} />
              <Mongodb color="#ffffff"  size={40} className={styles.ico} />
              <Postman color="#ffffff"  size={40} className={styles.ico} />
              <Json color="#ffffff"  size={40} className={styles.ico} />
            </div>
          </div>
          <div className={styles.skillset} >
            <div className={styles.skills} >
              <ReactJs color="#ffffff"  size={40} className={styles.ico} />
              <Nextdotjs color="#ffffff"  size={40} className={styles.ico} />
              <Django color="#ffffff"  size={40} className={styles.ico} />
              <Nodedotjs color="#ffffff"  size={40} className={styles.ico} />
            </div>
          </div>
          <div className={styles.skillset} >
            <div className={styles.skills} >
              <Vercel color="#ffffff"  size={40} className={styles.ico} />
              <Firebase color="#ffffff"  size={40} className={styles.ico} />
              <Git color="#ffffff"  size={40} className={styles.ico} />
              <Heroku color="#ffffff"  size={40} className={styles.ico} />
              <Netlify color="#ffffff"  size={40} className={styles.ico} />
              <Github color="#ffffff"  size={40} className={styles.ico} />
            </div>
          </div>
          <div className={styles.skillset} >
            <div className={styles.skills} >
              <Wordpress color="#ffffff"  size={40} className={styles.ico} />
              <Wix color="#ffffff"  size={40} className={styles.ico} />
              <Figma color="#ffffff"  size={40} className={styles.ico} />
              <Shopify color="#ffffff"  size={40} className={styles.ico} />
              <Blogger color="#ffffff"  size={40} className={styles.ico} />
              <Visualstudiocode color="#ffffff"  size={40} className={styles.ico} />
            </div>
          </div>
          <div className={styles.skillset} >
            <div className={styles.skills} >
              <Tableau color="#ffffff"  size={40} className={styles.ico} />
              <Linux color="#ffffff"  size={40} className={styles.ico} />
  
            </div>
          </div>
          


        </div>
        
    </div> 
    
  )
}

export default Exp;


