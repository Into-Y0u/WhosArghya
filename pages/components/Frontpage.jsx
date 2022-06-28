import styles from '../../styles/Home.module.css';

const Frontpage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <h1>
            Hi there!!!!
          </h1>
<<<<<<< HEAD
          <p>"If a decision is reversible, the biggest risk is moving too slow. If a decision is irreversible, the biggest risk is moving too fast."</p>
=======
          <p>
          "If a decision is reversible, the biggest risk is moving too slow. If a decision is irreversible, the biggest risk is moving too fast."
          </p>
>>>>>>> c341238ec22c073a2723625d69ed665c81acf252

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
