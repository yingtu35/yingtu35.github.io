import { useState, useEffect } from 'react';

export default function useImageSlider({length, interval}) {
  const [currentIdx, setCurrentIdx] = useState(0);

  function prevSlide(){
      setCurrentIdx((currentIdx) => (currentIdx - 1 + length) % length);
  };

  function nextSlide(){
      setCurrentIdx((currentIdx) => (currentIdx + 1) % length);
  };

  useEffect(() => {
      let timerId = null;
      if (interval > 0) {
          timerId = setInterval(nextSlide, interval)
      }
      return () => clearInterval(timerId)
  }, [])

  return {
      currentIdx,
      onIdxChange: setCurrentIdx,
      onPrevSlide: prevSlide,
      onNextSlide: nextSlide
  }
}