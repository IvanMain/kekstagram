import { isEscape } from '../utils/util';

const body = document.body;

const renderUploadModal = (template, containerSelector) => {
  const uploadModal = template.cloneNode(true);

  body.append(uploadModal);

  const overlay = document.querySelector(`.${containerSelector}`);
  const button = document.querySelector(`.${containerSelector}__button`);


  const documentEscKeyDownHandler = (evt) => {
    if (isEscape(evt)) {
      closeModal(uploadModal);
    }
  };

  const buttonClickHandler = () => {
    closeModal(uploadModal);
  };

  const overlayClickHandler = (evt) => {
    if (!evt.target.closest(`.${containerSelector}__inner`)) {
      closeModal(uploadModal);
    }
  };

  function closeModal(modal) {
    modal.remove();

    button.removeEventListener('click', buttonClickHandler);
    overlay.removeEventListener('click', overlayClickHandler);
    document.removeEventListener('keydown', documentEscKeyDownHandler);
  }

  button.addEventListener('click', buttonClickHandler);
  overlay.addEventListener('click', overlayClickHandler);
  document.addEventListener('keydown', documentEscKeyDownHandler);
};

export { renderUploadModal };
