import { useState, useEffect } from 'react';

interface UseFadeAnimationOptions {
  duration?: number;
  autoPlay?: boolean;
  itemCount: number;
}

export function useFadeAnimation({ 
  duration = 5000, 
  autoPlay = true,
  itemCount 
}: UseFadeAnimationOptions) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!autoPlay || itemCount === 0) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % itemCount);
        setIsTransitioning(false);
      }, 600);
    }, duration);

    return () => clearInterval(interval);
  }, [autoPlay, duration, itemCount]);

  const goToIndex = (index: number) => {
    if (index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 600);
  };

  return {
    currentIndex,
    isTransitioning,
    goToIndex
  };
}
