import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { observerOptions } from 'config';

export default function AnimateOnScroll() {
  const { pathname } = useLocation();
  useEffect(() => {
    function callback (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }

    const observer = new IntersectionObserver(callback, observerOptions);
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}