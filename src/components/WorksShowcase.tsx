import { useState, useEffect } from 'react'
import styles from './WorksShowcase.module.css'

const WorksShowcase = () => {
  // All 50 work images
  const allImages = Array.from({ length: 50 }, (_, i) => 
    `/assets/works/work-${String(i + 1).padStart(2, '0')}.jpeg`
  )
  
  const [displayedImages, setDisplayedImages] = useState<string[]>([])
  const [fadingIndices, setFadingIndices] = useState<Set<number>>(new Set())
  const imagesPerView = 9

  // Function to get random images
  const getRandomImages = (count: number) => {
    const shuffled = [...allImages].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, count)
  }

  // Initialize with random images
  useEffect(() => {
    setDisplayedImages(getRandomImages(imagesPerView))
  }, [])

  // Auto-rotate images - 3 at a time with slower animations
  useEffect(() => {
    const rotateImages = () => {
      const indices = Array.from({ length: imagesPerView }, (_, i) => i)
      // Shuffle indices to get random order
      const shuffledIndices = indices.sort(() => Math.random() - 0.5)
      
      // Select 3 random indices to update
      const indicesToUpdate = shuffledIndices.slice(0, 3)
      
      // Fade out all 3 at once
      indicesToUpdate.forEach(index => {
        setFadingIndices(prev => new Set(prev).add(index))
      })
      
      // Swap images and fade in after fade out completes
      setTimeout(() => {
        setDisplayedImages(prev => {
          const newImages = [...prev]
          indicesToUpdate.forEach(index => {
            const availableImages = allImages.filter(img => !newImages.includes(img))
            const randomImage = availableImages[Math.floor(Math.random() * availableImages.length)]
            newImages[index] = randomImage
          })
          return newImages
        })
        
        setFadingIndices(prev => {
          const newSet = new Set(prev)
          indicesToUpdate.forEach(index => newSet.delete(index))
          return newSet
        })
      }, 1200) // Wait for fade out animation (1.2s)
    }
    
    const interval = setInterval(rotateImages, 5000) // 5 seconds between updates (3s visible + 2s for animations)
    return () => clearInterval(interval)
  }, [allImages])

  return (
    <section id="works" className={styles.works}>
      <div className={styles.container}>
        <h2 className={styles.heading}>OUR WORKS</h2>
        <div className={styles.grid}>
          {displayedImages.map((image, index) => (
            <div 
              key={`${image}-${index}`} 
              className={`${styles.imageWrapper} ${fadingIndices.has(index) ? styles.fadeOut : styles.fadeIn}`}
            >
              <img src={image} alt={`Renovation work ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorksShowcase
