import styles from "../../styles/Footer.module.css"
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        From Arghya With Love
      </div>
  

    </div>
  )
}

export default Footer;