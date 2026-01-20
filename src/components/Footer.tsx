import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="#" className={styles.link}>Terms & Support</a>
          <a href="#" className={styles.link}>Privacy Policy</a>
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Khinda Homes. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
