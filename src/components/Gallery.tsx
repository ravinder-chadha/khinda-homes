import { useState, useEffect } from 'react'
import { galleryServices } from '../data/services'
import styles from './Gallery.module.css'

const Gallery = () => {
  // Category-specific image pools
  const categoryImages = {
    flooring: [
      '/assets/works/work-29.jpeg',
      '/assets/works/work-27.jpeg',
      '/assets/works/work-23.jpeg',
      '/assets/works/work-22.jpeg',
      '/assets/works/work-21.jpeg',
      '/assets/works/work-19.jpeg',
      '/assets/works/work-18.jpeg',
      '/assets/works/work-14.jpeg'
    ],
    exterior: [
      '/assets/works/work-26.jpeg',
      '/assets/works/work-24.jpeg',
      '/assets/works/work-03.jpeg',
      '/assets/works/work-05.jpeg',
      '/assets/works/work-06.jpeg',
      '/assets/works/work-10.jpeg',
      '/assets/works/work-11.jpeg',
      '/assets/works/work-12.jpeg',
      '/assets/works/work-13.jpeg',
      '/assets/works/work-16.jpeg',
      '/assets/works/work-20.jpeg'
    ],
    cabinets: [
      '/assets/works/work-04.jpeg',
      '/assets/works/work-07.jpeg',
      '/assets/works/work-08.jpeg',
      '/assets/works/work-09.jpeg',
      '/assets/works/work-15.jpeg'
    ]
  }

  // Get random image from a category, ensuring it's different from current
  const getRandomImage = (category: keyof typeof categoryImages, currentImage?: string) => {
    const images = categoryImages[category]
    const availableImages = currentImage ? images.filter(img => img !== currentImage) : images
    return availableImages[Math.floor(Math.random() * availableImages.length)]
  }

  // Initialize with random images
  const [currentImages, setCurrentImages] = useState({
    flooring: getRandomImage('flooring'),
    exterior: getRandomImage('exterior'),
    cabinets: getRandomImage('cabinets')
  })

  const [fadingIndex, setFadingIndex] = useState<number | null>(null)

  // Rotate images one at a time every 3.5 seconds
  useEffect(() => {
    const categories: Array<keyof typeof categoryImages> = ['flooring', 'exterior', 'cabinets']
    let categoryIndex = 0

    const rotateNextImage = () => {
      const category = categories[categoryIndex]
      const imageIndex = categoryIndex
      
      // Start fade out
      setFadingIndex(imageIndex)
      
      // Update image after fade out completes
      setTimeout(() => {
        setCurrentImages(prev => ({
          ...prev,
          [category]: getRandomImage(category, prev[category])
        }))
        setFadingIndex(null)
      }, 1200) // Wait for fade out animation (1.2s)
      
      // Move to next category
      categoryIndex = (categoryIndex + 1) % categories.length
    }

    const interval = setInterval(rotateNextImage, 3500) // 3.5 seconds between updates
    return () => clearInterval(interval)
  }, [])

  const images = [
    currentImages.flooring,
    currentImages.exterior,
    currentImages.cabinets
  ]

  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Project Gallery</h2>
        <div className={styles.grid}>
          {galleryServices.map((service, index) => (
            <div key={service.id} className={styles.galleryItem}>
              <div className={styles.imageContainer}>
                <img 
                  src={images[index]} 
                  alt={service.title}
                  className={fadingIndex === index ? styles.fadeOut : styles.fadeIn}
                />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.titleSection}>
                <h3>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
