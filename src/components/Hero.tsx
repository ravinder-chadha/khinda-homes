import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="/assets/logo/kh-logo.jpeg" alt="Khinda Homes Logo" />
        </div>
        <h1 className={styles.title}>
          The home renovation company that <span className={styles.highlight}>never</span> disappoints
        </h1>
      </div>
      <div className={styles.imageWrapper}>
        <img src="/assets/works/work-01.jpeg" alt="Renovation work showcase" />
      </div>
    </section>
  )
}

export default Hero
