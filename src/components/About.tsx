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
            <h2>Khinda Limited is a licensed, family-owned residential renovation and finishing company proudly serving communities across Alberta.</h2>
            <p>
              Built on trust and quality craftsmanship, Khinda Limited specializes in residential renovations, 
              exterior work, flooring, tiling, painting, and custom finishing. We focus on clear communication, 
              reliable timelines, and results that meet expectations. From small upgrades to full renovations, 
              we work closely with homeowners to deliver work done right.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
