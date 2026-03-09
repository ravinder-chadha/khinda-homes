import { contactInfo } from '../data/contact'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.section}>
            <h3>Office</h3>
            <p>{contactInfo.address}</p>
            <p>Postal Code: {contactInfo.postalCode}</p>
            <p>Tel. <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></p>
            <p>Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
          </div>
          <div className={styles.section}>
            <h3>Office Hours</h3>
            <p style={{ whiteSpace: 'pre-line' }}>{contactInfo.officeHours}</p>
          </div>
          <div className={styles.section}>
            <h3>Follow Us</h3>
            <p>
              <a
                href={contactInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                {contactInfo.socialMedia}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
