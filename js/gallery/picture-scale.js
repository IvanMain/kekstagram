import { ControlScaleRange, DECIMAL_RADIX } from '../const/const';

const imgPreview = document.querySelector('.img-upload__preview img');
const controlSmaller = document.querySelector('.scale__control--smaller');
const controlBigger = document.querySelector('.scale__control--bigger');
const controlValue = document.querySelector('.scale__control--value');


const updatePreviewTransform = () => {
  const scale = parseInt(controlValue.value, DECIMAL_RADIX) / 100;

  imgPreview.style.transform = `scale(${scale})`;
};

const controlSmallerClickHandler = () => {
  const currentValue = parseInt(controlValue.value, DECIMAL_RADIX);

  controlValue.value = currentValue > ControlScaleRange.MIN ? `${currentValue - ControlScaleRange.STEP}%` : `${currentValue}%`;
  updatePreviewTransform();
};

const controlBiggerClickHandler = () => {
  const currentValue = parseInt(controlValue.value, DECIMAL_RADIX);

  controlValue.value = currentValue < ControlScaleRange.MAX ? `${currentValue + ControlScaleRange.STEP}%` : `${currentValue}%`;
  updatePreviewTransform();
};

const initDefaultStatePreview = () => {
  controlValue.value = '100%';
  updatePreviewTransform();
};

const init = () => {
  initDefaultStatePreview();

  controlSmaller.addEventListener('click', controlSmallerClickHandler);
  controlBigger.addEventListener('click', controlBiggerClickHandler);
};

const destroy = () => {
  initDefaultStatePreview();

  controlSmaller.removeEventListener('click', controlSmallerClickHandler);
  controlBigger.removeEventListener('click', controlBiggerClickHandler);
};

const pictureScale = { init, destroy };

export { pictureScale };
