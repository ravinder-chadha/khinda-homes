import styles from './About.module.css'

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageGrid}>
            <div className={styles.imageWrapper}>
              <img src="/assets/works/work-02.jpeg" alt="Renovation project" />
            </div>
            <div className={styles.imageWrapper}>
              <img src="/assets/works/work-03.jpeg" alt="Renovation project" />
            </div>
            <div className={styles.imageWrapper}>
              <img src="/assets/works/work-04.jpeg" alt="Renovation project" />
            </div>
            <div className={styles.imageWrapper}>
              <img src="/assets/works/work-05.jpeg" alt="Renovation project" />
            </div>
          </div>
          <div className={styles.text}>
            <h2>Khinda Limited is a licensed, insured, and WCB-covered family-owned residential renovation and finishing company proudly serving communities across Alberta.</h2>
            <p>
              We are committed to delivering high-quality craftsmanship, reliable service, and professional project management for every home renovation and finishing project.
            </p>
            <div className={styles.areasServed}>
              <h3>Areas We Serve</h3>
              <ul className={styles.areasList}>
                {['Calgary', 'Airdrie', 'Chestermere', 'Cochrane', 'Okotoks', 'Strathmore', 'Red Deer', 'Edmonton', 'Canmore', 'Banff'].map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
