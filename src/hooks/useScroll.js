import { useState, useEffect } from 'react';

var useDebounceCallback = function(fn, t) {
  let timeoutId = null;
  return function(...args) {
      if (timeoutId) {
          clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
          fn(...args)
      }, t);
  }
};

export default function useScroll() {
  const viewHeight = window.innerHeight;
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const showBackToTop = scrollPosition > viewHeight;

  const handleScroll = useDebounceCallback(() => {
    setScrollPosition(window.scrollY);
  }, 300);

  function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return { showBackToTop, scrollToTop };
}