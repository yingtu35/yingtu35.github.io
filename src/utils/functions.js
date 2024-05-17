export function useThrottleCallback(fn, t) {
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