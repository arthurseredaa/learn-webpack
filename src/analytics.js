export const createAnalytics = () => {
  let count = 0,
    isDestroyed = false;

  const listener = () => count++;

  document.addEventListener('click', listener);

  return {
    destroy: () => {
      document.removeEventListener('click', listener);
      isDestroyed = true;
    },
    getClicks: () => {
      if(isDestroyed) {
        return "Analytics destroyed!"
      }
      isDestroyed = false;
      return count;
    },
  }
}
