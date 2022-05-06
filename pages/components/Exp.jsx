import styles from '../../styles/Exp.module.css'
import { Blogger, C, Cplusplus, CssThree, Databricks, Django, Figma, Firebase, Git, Github, Heroku, Html5, Java, Javascript, Json, Kotlin,  Mongodb, Mysql, Netlify, Nextdotjs, Nodedotjs, Postman, Python, ReactJs, Shopify,  Tableau, Vercel, Visualstudiocode, Wix, Wordpress } from "@icons-pack/react-simple-icons";

import React from 'react'

const Exp = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <div  className={styles.element}>
            <h2 className={styles.compTitle}>Cognizant Technology Solutions, India. </h2>
            <div className={styles.child}>
              <div className={styles.compRole}>Programmer Analyst Traninee Intern</div>
              <div className={styles.compTimeline}>February 2022 - Present</div>
            </div>
            <div>
              <p className={styles.compPara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eos, maiores quae perspiciatis quidem corrupti laborum nulla? Quam temporibus, obcaecati provident ipsum nihil tempora dolorum iusto exercitationem, autem, dicta dolores.
              </p>
            </div>
          </div>
          <div  className={styles.element}>
            <h2 className={styles.compTitle}>Tutorial Cup </h2>
            <div className={styles.child}>
              <div className={styles.compRole}>Technical Content Writer           </div>
              <div className={styles.compTimeline} style={{paddingLeft:"5vw",}}>April 2022 - Present</div>
            </div>
            <div>
              <p className={styles.compPara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eos, maiores quae perspiciatis quidem corrupti laborum nulla? Quam temporibus, obcaecati provident ipsum nihil tempora dolorum iusto exercitationem, autem, dicta dolores.
              </p>
            </div>
          </div>

       
        </div>







        <div className={styles.right}>
          <div className={styles.skillset} >
            <div className={styles.skills} >
              <Python color="#ffffff" title="My title" size={50} className={styles.ico} />
              <C color="#ffffff" title="My title" size={50} className={styles.ico} />
              <Javascript color="#ffffff" title="My title" size={50} className={styles.ico} />
              <Cplusplus color="#ffffff" title="My title" size={50} className={styles.ico} />
              <Kotlin color="#ffffff" title="My title" size={50} className={styles.ico} />
              <Java color="#ffffff" title="My title" size={50} className={styles.ico} />
              <Html5 color="#ffffff" title="My title" size={50} className={styles.ico} />
              <CssThree color="#ffffff" title="My title" size={50} className={styles.ico} />
             
            </div>
          </div>
          <div className={styles.skillset} >
            <div className={styles.skills} >
              <Mysql color="#ffffff" title="My title" size={50} className={styles.ico} />
              <Databricks color="#ffffff" title="My title" size={50} className={styles.ico} />
              <Mongodb color="#ffffff" title="My title" size={50} className={styles.ico} />
              <Postman color="#ffffff" title="My title" size={50} className={styles.ico} />
              <Json color="#ffffff" title="My title" size={50} className={styles.ico} />
            </div>
          </div>
          <div className={styles.skillset} >
            <div className={styles.skills} >
              <ReactJs color="#ffffff" title="My title" size={50} className={styles.ico} />
              <Nextdotjs color="#ffffff" title="My title" size={50} className={styles.ico} />
              <Django color="#ffffff" title="My title" size={50} className={styles.ico} />
              <Nodedotjs color="#ffffff" title="My title" size={50} className={styles.ico} />
            </div>
          </div>
          <div className={styles.skillset} >
            <div className={styles.skills} >
              <Vercel color="#ffffff" title="My title" size={50} className={styles.ico} />
              <Firebase color="#ffffff" title="My title" size={50} className={styles.ico} />
              <Git color="#ffffff" title="My title" size={50} className={styles.ico} />
              <Heroku color="#ffffff" title="My title" size={50} className={styles.ico} />
              <Netlify color="#ffffff" title="My title" size={50} className={styles.ico} />
              <Github color="#ffffff" title="My title" size={50} className={styles.ico} />
            </div>
          </div>
          <div className={styles.skillset} >
            <div className={styles.skills} >
              <Wordpress color="#ffffff" title="My title" size={50} className={styles.ico} />
              <Wix color="#ffffff" title="My title" size={50} className={styles.ico} />
              <Figma color="#ffffff" title="My title" size={50} className={styles.ico} />
              <Shopify color="#ffffff" title="My title" size={50} className={styles.ico} />
              <Blogger color="#ffffff" title="My title" size={50} className={styles.ico} />
              <Visualstudiocode color="#ffffff" title="My title" size={50} className={styles.ico} />
            </div>
          </div>
          <div className={styles.skillset} >
            <div className={styles.skills} >
              <Tableau color="#ffffff" title="My title" size={50} className={styles.ico} />
  
            </div>
          </div>
          


        </div>
        
    </div> 
    
  )
}

export default Exp;


