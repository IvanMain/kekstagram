import { MAX_DATA_ELEMENTS, DECIMAL_RADIX } from './const';
import { generateGalleryData } from './data';
import { galleryRender } from './gallery-render';
import { modalPictureRender } from './modal-picture-render';
import { modalUploadPictureRender } from './modal-upload-picture-render';

const galleryData = generateGalleryData(MAX_DATA_ELEMENTS);
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

picturesContainerNode.addEventListener('click', picturesContainerClickHandler);
pictureUploadField.addEventListener('change', pictureUploadFieldClickHandler);
