import styles from '../../styles/Project.module.css'
import {  Arduino, C, CssThree, Django,  Firebase, Firefox, Github,  Html5, Javascript, Materialui,  Netlify, Nextdotjs, Python, ReactJs, Stripe, Themoviedatabase, Vercel, Wordpress } from "@icons-pack/react-simple-icons";
import Link from 'next/link';
import db from "../../Database.js";


const Projects = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
        {/* part -1  */}
          <div  className={styles.element}>
            <h2 className={styles.compTitle}>
              <Link href="https://boat-clone-eta.vercel.app/" passHref>
                <a target="_blank">boAt-Clone</a>
              </Link>
            </h2>
            <div className={styles.tech} > 
              <Nextdotjs color="#00ffff"  size={30} className={styles.ico}/>
              <Javascript color="#00ffff"  size={30} className={styles.ico}/>
              <Stripe color="#00ffff"  size={30} className={styles.ico}/>
              <CssThree color="#00ffff"  size={30} className={styles.ico}/>
            </div>
            <div className={styles.child}>
              <div className={styles.compRole}>
                <Link href="https://github.com/Into-Y0u/boAt-Clone" passHref>
                  <a target="_blank"><Github color="#ffffff"  size={30} className={styles.ico}/></a>
                </Link>
              </div>
              <div className={styles.compRole} >
                <Link href="https://boat-clone-eta.vercel.app/" passHref>
                  <a target="_blank"><Firefox color="#f2f924"  size={30} className={styles.ico}/></a>
                </Link>
              </div>
            </div>
            <div>
              <p className={styles.compPara}>
              Boat Clone is Ecommerce Web app similar to leading lifestyles Unicorn boat-lifestyle <br /> built using Next.Js framework , Sanity at the backend  and Stripe for payment gateway .
              </p>
            </div>
          </div>
        {/* part -1 ends */}

        {/* part 0  */}
          <div  className={styles.element}>
            <h2 className={styles.compTitle}>
              <Link href="https://github.com/Into-Y0u/Anti-Collision-EV-Tech" passHref>
                <a target="_blank">Anti-Collision EV-Tech</a>
              </Link>
            </h2>
            <div className={styles.tech} > 
              <C color="#00ffff"  size={30} className={styles.ico}/>
              <Arduino color="#00ffff"  size={30} className={styles.ico}/>
            </div>
            <div className={styles.child}>
              <div className={styles.compRole}>
                <Link href="https://github.com/Into-Y0u/Anti-Collision-EV-Tech" passHref>
                  <a target="_blank"><Github color="#ffffff"  size={30} className={styles.ico}/></a>
                </Link>
              </div>
            </div>
            <div>
              <p className={styles.compPara}>
              Obstackle detection and speed control of vechile in motion to avoid accident and collision.
              </p>
            </div>
          </div>
        {/* part 0 ends */}

        {/* part1  */}
          <div  className={styles.element}>
            <h2 className={styles.compTitle}>
              <Link href="https://pastry-kappa.vercel.app/" passHref>
                <a target="_blank">Pastry Shop</a>
              </Link>
            </h2>
            <div className={styles.tech} > 
              <Nextdotjs color="#00ffff"  size={30} className={styles.ico}/>
              <Firebase color="#00ffff"  size={30} className={styles.ico}/>
              <Vercel color="#00ffff"  size={30} className={styles.ico}/>
              <ReactJs color="#00ffff"  size={30} className={styles.ico}/>
            </div>
            <div className={styles.child}>
              <div className={styles.compRole}>
                <Link href="https://github.com/Into-Y0u/Pastry" passHref>
                  <a target="_blank"><Github color="#ffffff"  size={30} className={styles.ico}/></a>
                </Link>
              </div>
              <div className={styles.compRole}>
                <Link href="https://pastry-kappa.vercel.app/" passHref>
                  <a target="_blank"><Firefox color="#f2f924"  size={30} className={styles.ico}/></a>
                </Link>
              </div>
            </div>
            <div>
              <p className={styles.compPara}>
                PastryShop is Food Delivery App and Restaurnet Landing WebApp. It's built using Next Js , React from scratch. <br />
                Mobile responsive multipage website serves Tasty cakes services both on and offline backed by Firebase at the Back.

              </p>
            </div>
          </div>
        {/* part 1 ends */}

        {/* part2  */}
        <div  className={styles.element}>
            <h2 className={styles.compTitle}>
              <Link href="https://filmophile.netlify.app/" passHref>
                <a target="_blank">FILMOPHILE</a>
              </Link>
            </h2>
            <div className={styles.tech} > 
              <ReactJs color="#00ffff"  size={30} className={styles.ico}/>
              <Vercel color="#00ffff"  size={30} className={styles.ico}/>
              <Materialui color="#00ffff"  size={30} className={styles.ico}/>
              <Themoviedatabase color="#00ffff"  size={30} className={styles.ico}/>
            </div>
            <div className={styles.child}>
              <div className={styles.compRole}>
                <Link href="https://github.com/Into-Y0u/Filmophile" passHref>
                  <a target="_blank"><Github color="#ffffff"  size={30} className={styles.ico}/></a>
                </Link>
              </div>
              <div className={styles.compRole}>
                <Link href="https://filmophile.netlify.app/" passHref>
                  <a target="_blank"><Firefox color="#f2f924"  size={30} className={styles.ico}/></a>
                </Link>
              </div>
            </div>
            <div>
              <p className={styles.compPara}>
              FilmoPhile is a movies/series trending page and Database web-app(SPA). Its built using a registered api from The MovieDB org , Reactjs and UI by Material UI.
              <br />
              This web app Served info/casts/trailer of the content with super responsive and interactive UI and being deployed through Netlify

              </p>
            </div>
        </div>
        {/* part 2 ends */}

        {/* part2+5  */}
          <div  className={styles.element}>
            <h2 className={styles.compTitle}>
              <Link href="https://whosarghya.netlify.app/" passHref>
                <a target="_blank">WhosArghya</a>
              </Link>
            </h2>
            <div className={styles.tech} > 
              <Nextdotjs color="#00ffff"  size={30} className={styles.ico}/>
              <Netlify color="#00ffff"  size={30} className={styles.ico}/>
              <Javascript color="#00ffff"  size={30} className={styles.ico}/>
            </div>
            <div className={styles.child}>
              <div className={styles.compRole}>
                <Link href="https://github.com/Into-Y0u/WhosArghya" passHref>
                  <a target="_blank"><Github color="#ffffff"  size={30} className={styles.ico}/></a>
                </Link>
              </div>
              <div className={styles.compRole}>
                <Link href="https://whosarghya.netlify.app/" passHref>
                  <a target="_blank"><Firefox color="#f2f924"  size={30} className={styles.ico}/></a>
                </Link>
              </div>
            </div>
            <div>
              <p className={styles.compPara}>
                WhosArghya is my portfolio website , built using Next js and deployed throgh Netlify. Beatiful glassmorphism UI and multipaged we app

              </p>
            </div>
        </div>
        {/* part 2+5 ends */}


        {/* part3  */}      
          <div  className={styles.element}>
            <h2 className={styles.compTitle}>
              <Link href="https://tech-bites.vercel.app/" passHref>
                <a target="_blank">Tech-Bites</a>
              </Link>
            </h2>
            <div className={styles.tech} > 
              <Nextdotjs color="#00ffff"  size={30} className={styles.ico}/>
              <Vercel color="#00ffff"  size={30} className={styles.ico}/>
              <Html5 color="#00ffff"  size={30} className={styles.ico}/>
              <CssThree color="#00ffff"  size={30} className={styles.ico}/>
            </div>
            <div className={styles.child}>
              <div className={styles.compRole}>
                <Link href="https://github.com/Into-Y0u/TechBites" passHref>
                  <a target="_blank"><Github color="#ffffff"  size={30} className={styles.ico}/></a>
                </Link>
              </div>
              <div className={styles.compRole}>
                <Link href="https://tech-bites.vercel.app/" passHref>
                  <a target="_blank"><Firefox color="#f2f924"  size={30} className={styles.ico}/></a>
                </Link>
              </div>
            </div>
            <div>
              <p className={styles.compPara}>
              Tech-Bites is NewAPI WebApp built with NextJS . It served technology related news round the world at your finger tips. <br />
              Fully responsive SPA and glass morphisom UI ; deployed using Vercel ; superfast and mobile reponsive.

              </p>
            </div>
          </div>
        {/* part 3 ends */}


        {/* part4  */}
          <div  className={styles.element}>
            <h2 className={styles.compTitle}>
              <Link href="https://dayplanner-df160.web.app/" passHref>
                <a target="_blank">Dayplanner</a>
              </Link>
            </h2>
            <div className={styles.tech} > 
              <ReactJs color="#00ffff"  size={30} className={styles.ico}/>
              <Firebase color="#00ffff"  size={30} className={styles.ico}/>
              <Javascript color="#00ffff"  size={30} className={styles.ico}/>
            </div>
            <div className={styles.child}>
              <div className={styles.compRole}>
                <Link href="https://github.com/Into-Y0u/task-tracker" passHref>
                  <a target="_blank"><Github color="#ffffff"  size={30} className={styles.ico}/></a>
                </Link>
              </div>
              <div className={styles.compRole}>
                <Link href="https://dayplanner-df160.web.app/" passHref>
                  <a target="_blank"><Firefox color="#f2f924"  size={30} className={styles.ico}/></a>
                </Link>
              </div>
            </div>
            <div>
              <p className={styles.compPara}>
                DayPlanner is a React web app to plan your day (a modified to-do list) which has CRUD functionality .
                <br />
                It uses Firebase for data Storage and deployment; can do realtime operations with data.

              </p>
            </div>
        </div>
        {/* part 4 ends */}

        {/* part5  */}
          <div  className={styles.element}>
            <h2 className={styles.compTitle}>
              <Link href="https://github.com/Into-Y0u/YoutubeDownloader" passHref>
                <a target="_blank">YoutubeDownloader</a>
              </Link>
            </h2>
            <div className={styles.tech} > 
              <Python color="#00ffff"  size={30} className={styles.ico}/>
              <Django color="#00ffff"  size={30} className={styles.ico}/>
              <Html5 color="#00ffff"  size={30} className={styles.ico}/>
            </div>
            <div className={styles.child}>
              <div className={styles.compRole}>
                <Link href="https://github.com/Into-Y0u/YoutubeDownloader" passHref>
                  <a target="_blank"><Github color="#ffffff"  size={30} className={styles.ico}/></a>
                </Link>
              </div>
            </div>
            <div>
              <p className={styles.compPara}>
              Youtube Downloader is a Youtube Video and mp3 download website; That only works with youtube url.
              <br />It provides all the available downloadble streams link of the provided to download ; YT Search Features and watch enabled.

              </p>
            </div>
        </div>
        {/* part 5 ends */}
        {/* part6  */}
          <div  className={styles.element}>
            <h2 className={styles.compTitle}>
              <Link href="https://www.linkedin.com/posts/arghyadev-sarkar_startup-digital-website-activity-6784094225446383616-2cNu/" passHref>
                <a target="_blank">Craftis-Corner</a>
              </Link>
            </h2>
            <div className={styles.tech} > 
              <Wordpress color="#00ffff"  size={30} className={styles.ico}/>
            </div>
            <div className={styles.child}>
              <div className={styles.compRole}>
                <Link href="https://www.linkedin.com/posts/arghyadev-sarkar_startup-digital-website-activity-6784094225446383616-2cNu/" passHref>
                  <a target="_blank"><Firefox color="#f2f924"  size={30} className={styles.ico}/></a>
                </Link>
              </div>
            </div>
            <div>
              <p className={styles.compPara}>
                Craftis Corner is demo E-Commerce Website for a glass made hand craft selling business ; built with elementor and
                 Wordpress plugins; user login, order , online payment and shipment ; all features available.


              </p>
            </div>
        </div>
        {/* part 6 ends */}


        {/* part8 */}
          <div  className={styles.element}>
            <h2 className={styles.compTitle}>
              <Link href="https://github.com/Into-Y0u/Portfolio1" passHref>
                <a target="_blank">Portfolio Web</a>
              </Link>
            </h2>
            <div className={styles.tech} > 
              <Javascript color="#00ffff"  size={30} className={styles.ico}/>
              <Html5 color="#00ffff"  size={30} className={styles.ico}/>
              <CssThree color="#00ffff"  size={30} className={styles.ico}/>
            </div>
            <div className={styles.child}>
              <div className={styles.compRole}>
                <Link href="https://github.com/Into-Y0u/Portfolio" passHref>
                  <a target="_blank"><Github color="#ffffff"  size={30} className={styles.ico}/></a>
                </Link>
              </div>
              <div className={styles.compRole}>
                <Link href="https://github.com/Into-Y0u/Portfolio1" passHref>
                  <a target="_blank"><Firefox color="#f2f924"  size={30} className={styles.ico}/></a>
                </Link>
              </div>
            </div>
            <div>
              <p className={styles.compPara}>
                This one is my old portfolio website. Its built using only HTML, CSS and javascript.

              </p>
            </div>
        </div>
        {/* part 8 ends */}

        {/* part2  */}
          <div  className={styles.element}>
            <h2 className={styles.compTitle}>
            </h2>
      
            <div className={styles.child}>
             
            </div>
            <div>
              <p className={styles.compPara}>
                For more Visit my GitHub 🚀❤❤

              </p>
            </div>
        </div>
        {/* part 2 ends */}

        



        </div>

    </div> 
    
  )
}

export default Projects;