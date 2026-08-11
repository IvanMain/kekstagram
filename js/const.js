const MAX_DATA_ELEMENTS = 25;

const COUNT_COMMENTS = 5;

const likesRange = {
  MIN: 15,
  MAX: 200,
};

const avatarsRange = {
  MIN: 1,
  MAX: 6,
};

const commentsRange = {
  MIN: 0,
  MAX: 30,
};

const DECIMAL_RADIX = 10;

const userNames = [
  'Артём', 'Анна', 'Михаил', 'Екатерина', 'Сергей', 'Ольга', 'Дмитрий', 'Наталья', 'Алексей', 'Мария'
];

const userMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTION_RANGE = 140;

const HASHTAGS_RANGE = 5;

const controlScaleRange = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
  DEFAULT: 100,
};

const EFFECTS_DATA = {
  none: {
    filter: '',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  chrome: {
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  sepia: {
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  marvin: {
    filter: 'invert',
    min: 0,
    max: 100,
    step: 0.1,
    unit: '%',
  },
  phobos: {
    filter: 'blur',
    min: 1,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  heat: {
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
};

export {
  MAX_DATA_ELEMENTS,
  likesRange,
  avatarsRange,
  commentsRange,
  userNames,
  userMessages,
  COUNT_COMMENTS,
  DECIMAL_RADIX,
  DESCRIPTION_RANGE,
  HASHTAGS_RANGE,
  controlScaleRange,
  EFFECTS_DATA,
};
