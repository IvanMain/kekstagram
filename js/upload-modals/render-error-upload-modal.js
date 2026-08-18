import { renderUploadModal } from './render-upload-modal';

const errorUploadModalTemplate = document.querySelector('#error').content.querySelector('.error');

const renderErrorUploadModal = () => {
  renderUploadModal(errorUploadModalTemplate, 'error');
};

export { renderErrorUploadModal };
