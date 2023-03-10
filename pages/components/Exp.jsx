import styles from '../../styles/Exp.module.css'
import { Blogger, C, Cplusplus, CssThree, Databricks, Django, Figma, Firebase, Git, Github, Heroku, Html5, Java, Javascript, Json, Kotlin,  Linux,  Mongodb, Mysql, Netlify, Nextdotjs, Nodedotjs, Postman, Python, ReactJs, Shopify,  Tableau, Vercel, Visualstudiocode, Wix, Wordpress } from "@icons-pack/react-simple-icons";

import {useState} from 'react';

const Exp = () => {
  const [cur, setCur] = useState(false);

  const handleToggle = () => {
    setCur(cur => !cur);
  }
  return (
    <>

      <div className={styles.container}>
          <div className={styles.left}>
  {/* Company details  */}
            <div  className={styles.element}>

              <div className={styles.intro} >
                <div className={styles.imgBunch} >
                  <img src="content/zoho.png" alt="gu" />
                </div>
                <div className={styles.titleBunch}   >
                  <h2 className={styles.compTitle}>Zoho Corporation Pvt. Ltd.</h2>
                  <div className={styles.child}>
                    <div className={styles.compLoc}>Chennai, In</div>
                    <div className={styles.compRole}>Aug 2022 - Present</div>
                  </div>
                  <h3 className={styles.compRole}>Member Technical Staff</h3>
                </div>
              </div>

              <div>
                <p className={styles.compPara}>Working in Backend on Product "Zoho Video Platform" 
                </p>
                <button onClick={handleToggle} >Click for more</button>
                <ul className={cur ? styles.moreTrue : styles.moreFalse}  >
                  <li>
                    ahbdsabid 1
                  </li>
                  <li>
                    ahbdsabid 2
                  </li>
                  <li>
                    ahbdsabid 3
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.right} >

          </div>
      </div>


      <div className={styles.container}>
        <div className={styles.left}  >

        </div>
        <div className={styles.right}>
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
      </div>
    </div>







        {/* // <div className={styles.right}>
        //   <div className={styles.skillset} >
        //     <div className={styles.skills} >
        //       <Python color="#ffffff"  size={40} className={styles.ico} />
        //       <C color="#ffffff"  size={40} className={styles.ico} />
        //       <Javascript color="#ffffff"  size={40} className={styles.ico} />
        //       <Cplusplus color="#ffffff"  size={40} className={styles.ico} />
        //       <Kotlin color="#ffffff"  size={40} className={styles.ico} />
        //       <Java color="#ffffff"  size={40} className={styles.ico} />
        //       <Html5 color="#ffffff"  size={40} className={styles.ico} />
        //       <CssThree color="#ffffff"  size={40} className={styles.ico} />
             
        //     </div>
        //   </div>
        //   <div className={styles.skillset} >
        //     <div className={styles.skills} >
        //       <Mysql color="#ffffff"  size={40} className={styles.ico} />
        //       <Databricks color="#ffffff"  size={40} className={styles.ico} />
        //       <Mongodb color="#ffffff"  size={40} className={styles.ico} />
        //       <Postman color="#ffffff"  size={40} className={styles.ico} />
        //       <Json color="#ffffff"  size={40} className={styles.ico} />
        //     </div>
        //   </div>
        //   <div className={styles.skillset} >
        //     <div className={styles.skills} >
        //       <ReactJs color="#ffffff"  size={40} className={styles.ico} />
        //       <Nextdotjs color="#ffffff"  size={40} className={styles.ico} />
        //       <Django color="#ffffff"  size={40} className={styles.ico} />
        //       <Nodedotjs color="#ffffff"  size={40} className={styles.ico} />
        //     </div>
        //   </div>
        //   <div className={styles.skillset} >
        //     <div className={styles.skills} >
        //       <Vercel color="#ffffff"  size={40} className={styles.ico} />
        //       <Firebase color="#ffffff"  size={40} className={styles.ico} />
        //       <Git color="#ffffff"  size={40} className={styles.ico} />
        //       <Heroku color="#ffffff"  size={40} className={styles.ico} />
        //       <Netlify color="#ffffff"  size={40} className={styles.ico} />
        //       <Github color="#ffffff"  size={40} className={styles.ico} />
        //     </div>
        //   </div>
        //   <div className={styles.skillset} >
        //     <div className={styles.skills} >
        //       <Wordpress color="#ffffff"  size={40} className={styles.ico} />
        //       <Wix color="#ffffff"  size={40} className={styles.ico} />
        //       <Figma color="#ffffff"  size={40} className={styles.ico} />
        //       <Shopify color="#ffffff"  size={40} className={styles.ico} />
        //       <Blogger color="#ffffff"  size={40} className={styles.ico} />
        //       <Visualstudiocode color="#ffffff"  size={40} className={styles.ico} />
        //     </div>
        //   </div>
        //   <div className={styles.skillset} >
        //     <div className={styles.skills} >
        //       <Tableau color="#ffffff"  size={40} className={styles.ico} />
        //       <Linux color="#ffffff"  size={40} className={styles.ico} />
  
        //     </div>
        //   </div>
          


        // </div> */}
        
    </> 
    
  )
}

export default Exp;


