import { useState } from 'react'
import styles from './Header.module.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerHeight = 100 // Approximate height of sticky header + padding
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/assets/logo/kh-logo.jpeg" alt="Khinda Limited" />
        </div>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <a className={styles.navLink} onClick={() => scrollToSection('home')}>Home</a>
          <a className={styles.navLink} onClick={() => scrollToSection('about')}>About</a>
          <a className={styles.navLink} onClick={() => scrollToSection('services')}>Services</a>
          <a className={styles.navLink} onClick={() => scrollToSection('works')}>Works</a>
          <a className={styles.navLink} onClick={() => scrollToSection('testimonials')}>Testimonials</a>
          <a className={styles.navLink} onClick={() => scrollToSection('contact')}>Contact</a>
        </nav>
        
        <button 
          className={`${styles.mobileMenuBtn} ${isMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
