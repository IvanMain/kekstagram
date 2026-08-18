import { getData } from './api/api';
import { DECIMAL_RADIX } from './const/const';
import { renderErrorDataModal } from './error-data-modals/render-error-data-modal';
import { renderFilters } from './filters/render-filters';
import { galleryRender } from './gallery/gallery-render';
import { modalPictureRender } from './gallery/modal-picture-render';
import { modalUploadPictureRender } from './gallery/modal-upload-picture-render';


try {
  const galleryData = await getData();
  const picturesContainerNode = document.querySelector('.pictures');
  const pictureUploadField = document.querySelector('#upload-file');

  const picturesContainerClickHandler = (evt) => {
    const picture = evt.target.closest('.picture');

    if (!picture) {
      return;
    }

    evt.preventDefault();

    const pictureId = parseInt(picture.dataset.id, DECIMAL_RADIX);
    const pictureData = galleryData.find((item) => item.id === pictureId);

    modalPictureRender(pictureData);
  };

  const pictureUploadFieldClickHandler = () => {
    modalUploadPictureRender();
  };

  galleryRender(picturesContainerNode, galleryData);
  renderFilters(galleryData);

  picturesContainerNode.addEventListener('click', picturesContainerClickHandler);
  pictureUploadField.addEventListener('change', pictureUploadFieldClickHandler);
} catch (error) {
  renderErrorDataModal();
}
