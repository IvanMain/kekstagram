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
  if (evt.key === 'Escape') {
    const activeElement = document.activeElement;

    if (activeElement === hashtagsField || activeElement === descriptionField) {
      return;
    }

    closeModalPicture();
  }
};

const formSubmitHandler = (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();

  if (isValid) {
    uploadForm.submit();
  }
};

const hashtagsInputHandler = () => pristine.validate(hashtagsField);

const validateHashtagsField = (hashtagsValue) => {
  if (hashtagsValue.trim().length === 0) {
    return true;
  }

  const hashtags = hashtagsValue.split(' ').filter(Boolean);
  const reg = /^#[a-zа-яё0-9]{1,19}$/i;

  if (hashtags.length > 5) {
    return false;
  }

  const allValid = hashtags.every((tag) => reg.test(tag));

  if (!allValid) {
    return false;
  }

  const lowerCaseTags = hashtags.map((tag) => tag.toLowerCase());
  const uniqueTags = new Set(lowerCaseTags);

  if (lowerCaseTags.length !== uniqueTags.size) {
    return false;
  }

  return true;
};

const validateDescriptionField = (value) => value.length <= 140;

function closeModalPicture() {
  closeModal();

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

  pristine = new Pristine(uploadForm, {
    classTo: 'img-upload__field-wrapper',
    errorClass: 'img-upload__field-wrapper--error',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextTag: 'span',
    errorTextClass: 'text_span-error',
  });

  pristine.addValidator(
    hashtagsField,
    validateHashtagsField,
    'hashtags invalid'
  );

  pristine.addValidator(
    descriptionField,
    validateDescriptionField,
    'Комментарий не больше 140 символов'
  );

  closeButton.addEventListener('click', closeButtonClickHandler);
  document.addEventListener('keydown', documentEscKeyDownHandler);
  hashtagsField.addEventListener('input', hashtagsInputHandler);
  uploadForm.addEventListener('submit', formSubmitHandler);
};

export { modalUploadPictureRender };
