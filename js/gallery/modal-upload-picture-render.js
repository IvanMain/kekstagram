import { sendData } from '../api/api';
import { DESCRIPTION_RANGE } from '../const/const';
import { isEscape } from '../utils/util';
import { pictureScale } from './picture-scale';
import { pictureEffects } from './picture-effects';
import { renderSuccessUploadModal } from '../upload-modals/render-success-upload-modal';
import { renderErrorUploadModal } from '../upload-modals/render-error-upload-modal';
import { isHashtagCountValid, isHashtagSyntaxValid, isUniqueHashtags, isDescriptionValid } from '../validation/validation-hashtags';

let pristine;

const body = document.body;
const uploadForm = document.querySelector('#upload-select-image');
const fileInput = document.querySelector('#upload-file');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const closeButton = uploadForm.querySelector('#upload-cancel');
const hashtagsField = uploadForm.querySelector('[name="hashtags"]');
const descriptionField = uploadForm.querySelector('[name="description"]');

const openModal = () => {
  body.classList.add('modal-open');
  uploadOverlay.classList.remove('hidden');
};

const closeModal = () => {
  body.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
};

const closeButtonClickHandler = () => {
  closeModalPicture();
};

const documentEscKeyDownHandler = (evt) => {
  if (isEscape(evt)) {
    const activeElement = document.activeElement;
    const errorModal = document.querySelector('.error');

    if (activeElement === hashtagsField || activeElement === descriptionField) {
      return;
    }

    if (errorModal) {
      return;
    }

    closeModalPicture();
  }
};

const switchLockButton = (button, state = true, text = 'Отправка...') => {
  button.disabled = state;
  button.textContent = text;
};

const sendFormData = async (form) => {
  const isValid = pristine.validate();

  if (!isValid) {
    return false;
  }

  const formData = new FormData(form);
  const submitButton = uploadForm.querySelector('.img-upload__submit');

  switchLockButton(submitButton);

  try {
    await sendData(formData);

    renderSuccessUploadModal();
    closeModalPicture();
  } catch (err) {
    renderErrorUploadModal();
  } finally {
    switchLockButton(submitButton, false, 'Опубликовать');
  }
};

const formSubmitHandler = (evt) => {
  evt.preventDefault();

  sendFormData(evt.target);
};

const hashtagsInputHandler = () => pristine.validate(hashtagsField);

function closeModalPicture() {
  closeModal();
  pictureScale.destroy();
  pictureEffects.destroy();

  if (pristine) {
    pristine.reset();
  }

  fileInput.value = '';
  hashtagsField.value = '';
  descriptionField.value = '';

  closeButton.removeEventListener('click', closeButtonClickHandler);
  document.removeEventListener('keydown', documentEscKeyDownHandler);
  hashtagsField.removeEventListener('input', hashtagsInputHandler);
  uploadForm.removeEventListener('submit', formSubmitHandler);
}

const modalUploadPictureRender = () => {
  openModal();
  pictureScale.init();
  pictureEffects.init();

  pristine = new Pristine(uploadForm, {
    classTo: 'img-upload__field-wrapper',
    errorClass: 'img-upload__field-wrapper--error',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextTag: 'span',
    errorTextClass: 'text_span-error',
  });

  pristine.addValidator(
    hashtagsField,
    isHashtagSyntaxValid,
    'введён невалидный хэштег'
  );

  pristine.addValidator(
    hashtagsField,
    isHashtagCountValid,
    'превышено количество хэштегов;'
  );

  pristine.addValidator(
    hashtagsField,
    isUniqueHashtags,
    'хэштеги повторяются'
  );

  pristine.addValidator(
    descriptionField,
    isDescriptionValid,
    `Комментарий не больше ${DESCRIPTION_RANGE} символов`
  );

  closeButton.addEventListener('click', closeButtonClickHandler);
  document.addEventListener('keydown', documentEscKeyDownHandler);
  hashtagsField.addEventListener('input', hashtagsInputHandler);
  uploadForm.addEventListener('submit', formSubmitHandler);
};

export { modalUploadPictureRender };
