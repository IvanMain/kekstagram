import { renderUploadModal } from './render-upload-modal';

const successUploadModalTemplate = document.querySelector('#success').content.querySelector('.success');

const renderSuccessUploadModal = () => {
  renderUploadModal(successUploadModalTemplate, 'success__button');
};

export { renderSuccessUploadModal };
