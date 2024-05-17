import { useEffect, useState } from "react"
import { useThrottleCallback } from "utils/functions"

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