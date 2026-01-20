import { mainServices } from '../data/services'
import styles from './Services.module.css'

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.mainImage}>
            <img src="/assets/works/work-06.jpeg" alt="Quality renovation work" />
          </div>
          <div className={styles.content}>
            <p className={styles.description}>
              Khinda Homes provides complete residential renovation and finishing services designed 
              around quality, reliability, and attention to detail. From planning and coordination 
              to final finishing, we manage each project with care to ensure smooth execution and 
              lasting results. Our team is committed to delivering skilled workmanship, clear 
              communication, and projects completed to a high standard that homeowners can rely on.
            </p>
            <h2 className={styles.heading}>What We Do</h2>
            <div className={styles.servicesList}>
              {mainServices.map((service) => (
                <div key={service.id} className={styles.serviceItem}>
                  {service.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
