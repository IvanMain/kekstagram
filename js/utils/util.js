import { DEBOUNCE_TIME } from '../const/const';

const generateRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomItem = (arr) => arr[generateRandomInteger(0, arr.length - 1)];

const isEscape = (evt) => evt.key === 'Escape';

const debounce = (cb, delay = DEBOUNCE_TIME) => {
  let timer;

  return (...rest) => {
    clearTimeout(timer);

    timer = setTimeout(() => cb.apply(this, rest), delay);
  };
};

const throttle = (cb, delay) => {
  let lastTime = 0;

  return (...rest) => {
    const now = new Date();

    if (now - lastTime >= delay) {
      cb.apply(this, rest);
      lastTime = now;
    }
  };
};

export {
  generateRandomInteger,
  getRandomItem,
  isEscape,
  debounce,
  throttle
};
