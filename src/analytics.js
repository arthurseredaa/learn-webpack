import * as $ from 'jquery';

export const createAnalytics = () => {
  let count = 0,
    isDestroyed = false;

  const listener = () => count++;
  $('document').on('click', listener);

  return {
    destroy: () => {
      $('document').off('click', listener);
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
