const generateRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomItem = (arr) => arr[generateRandomInteger(0, arr.length - 1)];

export {
  generateRandomInteger,
  getRandomItem,
};
