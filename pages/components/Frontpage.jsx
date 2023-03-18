import styles from '../../styles/Home.module.css';

const Frontpage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <h2>
            Hi there!!!!
          </h2>
          <p>I am <span>Arghya</span></p>
          <p>Currently Wokring as a Backend Developer at Zoho Corp.</p>
          <p>Lets Connect.!🤝</p> 
          <a href= "content/Arghyadev_Sarkar_Resume.pdf" download>
              <button>
                  <div>
                    Resume
                  </div>
              </button>  
          </a>

        </div>
        <div className={styles.right}>
          <img className={styles.img} src="content/giphy (1).gif" alt=""  />
        </div> 
    </div>
  )
}

export default Frontpage
