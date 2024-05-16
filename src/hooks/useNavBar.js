import { useEffect, useState } from "react"

var useThrottleCallback = function(fn, t) {
  let timerId = null;
  return function(...args) {
      if (timerId === null) {
          fn(...args);
          timerId = setTimeout(() => {
              timerId = null;
          }, t);
      }
  }
};

export default function useNavBar() {
  const [hide, setHide] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const controlNavBar = useThrottleCallback(() => {
      if (window.scrollY >= 0 && (window.scrollY > lastScrollY)) {
          setHide(true);
      } else{
          setHide(false);
      }

      setLastScrollY(window.scrollY);
  }, 300);

  useEffect(() => {
      window.addEventListener('scroll', controlNavBar);
      return () => {
          window.removeEventListener('scroll', controlNavBar);
      }
  }, [lastScrollY]);
  
  return { hide };
}