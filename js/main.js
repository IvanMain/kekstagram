import { MAX_DATA_ELEMENTS } from './const';
import { generateGalleryData } from './data';
import { galleryRender } from './gallery-render';
import { modalRender } from './modal-render';

const galleryData = generateGalleryData(MAX_DATA_ELEMENTS);
const picturesContainerNode = document.querySelector('.pictures');

const picturesContainerClickHandler = (evt) => {
  evt.preventDefault();

  const picture = evt.target.closest('.picture');

  if (picture) {
    const pictureId = parseInt(picture.dataset.id, 10);
    const pictureData = galleryData.find((item) => item.id === pictureId);

    modalRender(pictureData);
  }
};

galleryRender(picturesContainerNode, galleryData);
picturesContainerNode.addEventListener('click', picturesContainerClickHandler);
