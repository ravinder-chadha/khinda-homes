import styles from './Map.module.css'

const Map = () => {
  return (
    <section className={styles.map}>
      <div className={styles.header}>
        <p className={styles.label}>Our Location</p>
        <h2 className={styles.address}>16 Martindale Dr NE, Calgary, Alberta</h2>
      </div>
      <div className={styles.frameWrapper}>
        <iframe
          title="Khinda Limited Office Location"
          src="https://maps.google.com/maps?q=16+Martindale+Dr+NE+Calgary+Alberta+Canada+T3J+2V6&output=embed"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}

export default Map
