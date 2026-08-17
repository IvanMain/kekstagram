import { TIME_SHOW_ERROR_MODAL } from '../const/const';

const body = document.body;
const dataErrorModalTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

const renderErrorDataModal = () => {
  const dataErrorModal = dataErrorModalTemplate.cloneNode(true);

  body.append(dataErrorModal);

  setTimeout(() => {
    const dataError = document.querySelector('.data-error');

    dataError.remove();
  }, TIME_SHOW_ERROR_MODAL);
};

export { renderErrorDataModal };
