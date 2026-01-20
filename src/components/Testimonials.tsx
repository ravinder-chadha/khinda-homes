import { useState, useEffect } from 'react'
import { testimonials } from '../data/testimonials'
import styles from './Testimonials.module.css'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Testimonials</h2>
        <div className={styles.carousel}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${styles.testimonialItem} ${index === currentIndex ? styles.active : ''}`}
            >
              <div className={styles.messageBox}>
                <span className={styles.quoteIcon}>"</span>
                <p className={styles.quote}>{testimonial.text}</p>
                <p className={styles.author}>{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
