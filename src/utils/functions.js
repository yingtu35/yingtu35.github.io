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

export function debounce(fn, t) {
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