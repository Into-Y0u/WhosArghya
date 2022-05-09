import styles from '../../styles/Home.module.css';

const Frontpage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <h1>
            Hi there!!!!
          </h1>
          <p>
          A Kolkata based Engineering Student (FY-22) , love to solve and learn new techs 🚀 ; Software engineer in making ... Hope is the KEY

          </p>

          <a href="content/Arghaydev_Sarkar_Resume.pdf" download>
              <button>
                  <div>
                    Resume
                  </div>
              </button>  
          </a>

        </div>
        <div className={styles.right}>
          <img className={styles.img} src="content/thor1.gif" alt=""  />


        </div>
        
    </div>
  )
}

export default Frontpage