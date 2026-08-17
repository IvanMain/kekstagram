import { isEscape } from '../utils/util';

const body = document.body;

const renderUploadModal = (template, buttonSelector) => {
  const uploadModal = template.cloneNode(true);

  body.append(uploadModal);

  const button = document.querySelector(`.${buttonSelector}`);

  const documentEscKeyDownHandler = (evt) => {
    if (isEscape(evt)) {
      closeModal(uploadModal);
    }
  };

  const buttonClickHandler = () => {
    closeModal(uploadModal);
  };

  function closeModal(modal) {
    modal.remove();

    button.removeEventListener('click', buttonClickHandler);
    document.removeEventListener('keydown', documentEscKeyDownHandler);
  }

  button.addEventListener('click', buttonClickHandler);
  document.addEventListener('keydown', documentEscKeyDownHandler);
};

export { renderUploadModal };
