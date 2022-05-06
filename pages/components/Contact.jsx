import styles from '../../styles/Contact.module.css'
import { Blogger, C, Codeforces, Cplusplus, CssThree, Databricks, Django, Facebook, Figma, Firebase, Git, Github, Gmail, Hackerrank, Heroku, Html5, Java, Javascript, Json, Kotlin, Leetcode, Linkedin, Mongodb, Mysql, Netlify, Nextdotjs, Nodedotjs, Postman, Python, ReactJs, Shopify, Sqlite, Tableau, Telegram, Twitter, Vercel, Visualstudiocode, Whatsapp, Wix, Wordpress, Youtube } from "@icons-pack/react-simple-icons";
import Link from 'next/link';

import React from 'react'

const Contact = () => {
  return (
    <div className={styles.container}  >

        <div className={styles.left}>
          <div  className={styles.element}>
            <img className={styles.img} src="content/seeYou.gif" alt=""  />
          </div>

       
        </div>

        <div className={styles.right}>
          <div className={styles.skillset} >
            <div className={styles.skills} >
              <Link href="https://flaviocopes.com/nextjs-open-link-new-window/" passHref>
                  <a target="_blank"><Linkedin color="#ffffff" title="My title" size={50} className={styles.ico} /></a>
              </Link>
              <Link href="https://flaviocopes.com/nextjs-open-link-new-window/" passHref>
                  <a target="_blank"><Gmail color="#ffffff" title="My title" size={50} className={styles.ico} /></a>
              </Link>
              <Link href="https://flaviocopes.com/nextjs-open-link-new-window/" passHref>
                  <a target="_blank"><Twitter color="#ffffff" title="My title" size={50} className={styles.ico} /></a>
              </Link>
            </div>
          </div>
          <div className={styles.skillset} >
            <div className={styles.skills} >
              <Link href="https://flaviocopes.com/nextjs-open-link-new-window/" passHref>
                  <a target="_blank"><Github color="#ffffff" title="My title" size={50} className={styles.ico} /></a>
              </Link>
              <Link href="https://flaviocopes.com/nextjs-open-link-new-window/" passHref>
                  <a target="_blank"><Leetcode color="#ffffff" title="My title" size={50} className={styles.ico} /></a>
              </Link>
              <Link href="https://flaviocopes.com/nextjs-open-link-new-window/" passHref>
                  <a target="_blank"><Hackerrank color="#ffffff" title="My title" size={50} className={styles.ico} /></a>
              </Link>
              <Link href="https://flaviocopes.com/nextjs-open-link-new-window/" passHref>
                  <a target="_blank"><Codeforces color="#ffffff" title="My title" size={50} className={styles.ico} /></a>
              </Link>
            </div>
          </div>

        </div>
        
    </div> 
    
  )
}

export default Contact;


