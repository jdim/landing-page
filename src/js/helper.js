/**
 * Just for training, of course we can use lodash
 *
 * Creates a throttled function
 *
 * @param {Function} func - The function to throttle.
 * @param {Number} ms - The number of milliseconds to throttle invocations to
 */
export function throttle(func, ms = 500) {
  let timer;
  return function() {
    if (timer) return;

    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = undefined;
      func.apply(this, arguments);
    }, ms);
  };
}

/**
 * Debouncing enforces a function not be called again until a certain amount
 *  of time has passed without it being called
 * @param {Function} func  - The function to debounce.
 * @param {*} ms - The number of milliseconds to debounce invocations to
 */
export function debounce(func, ms = 400) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, ms);
  };
}
