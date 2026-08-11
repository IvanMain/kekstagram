import { EFFECTS_DATA } from './const';

const imgPreview = document.querySelector('.img-upload__preview img');
const slider = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.img-upload__effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectList = document.querySelector('.effects__list');
let sliderInstance;

const applyEffect = ({ filter, value, unit }) => {
  imgPreview.style.filter = `${filter}(${value}${unit})`;
  effectLevelValue.value = value;
};

const updatePreviewEffect = (effect) => {
  if (sliderInstance) {
    sliderInstance.destroy();
  }

  if (effect === 'none') {
    effectLevel.classList.add('hidden');
    imgPreview.style.filter = '';

    return;
  }

  effectLevel.classList.remove('hidden');

  const { filter, min, max, step, unit } = EFFECTS_DATA[effect];

  sliderInstance = noUiSlider.create(slider, {
    start: max,
    connect: 'lower',
    step,
    range: {
      'min': min,
      'max': max
    }
  });

  applyEffect({ filter, max, unit });

  sliderInstance.on('update', (values) => {
    const value = Number(values[0]);

    applyEffect({ filter, value, unit });
  });
};

const effectListClickHandler = (evt) => {
  const effect = evt.target.closest('.effects__radio');

  if (effect) {
    updatePreviewEffect(effect.value);
  }
};

const init = () => {
  effectLevel.classList.add('hidden');

  effectList.addEventListener('click', effectListClickHandler);
};

const destroy = () => {
  if (sliderInstance) {
    sliderInstance.destroy();
    sliderInstance = null;
  }

  effectLevel.classList.add('hidden');
  imgPreview.style.filter = '';

  effectList.removeEventListener('click', effectListClickHandler);
};

const pictureEffects = { init, destroy };

export { pictureEffects };
