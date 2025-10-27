
import { useEffect, useRef, useState } from 'react';

// FIX: Made the hook generic to accept different HTML element types for the ref,
// with HTMLDivElement as the default. Also improved the useEffect logic for safety.
export const useAnimated = <T extends HTMLElement = HTMLDivElement>(options?: IntersectionObserverInit) => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    const currentElement = ref.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);
  
  const animationClasses = `transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;

  return [ref, animationClasses] as const;
};
