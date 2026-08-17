const API_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/'
};

const COUNT_COMMENTS = 5;

const DECIMAL_RADIX = 10;

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

const TIME_SHOW_ERROR_MODAL = 5000;

export {
  COUNT_COMMENTS,
  DECIMAL_RADIX,
  DESCRIPTION_RANGE,
  HASHTAGS_RANGE,
  controlScaleRange,
  EFFECTS_DATA,
  API_URL,
  Method,
  Route,
  TIME_SHOW_ERROR_MODAL
};
