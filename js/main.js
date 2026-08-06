import { MAX_DATA_ELEMENTS } from './const';
import { generateGalleryData } from './data';
import { galleryRender } from './gallery-render';

const galleryData = generateGalleryData(MAX_DATA_ELEMENTS);
const picturesContainerNode = document.querySelector('.pictures');

galleryRender(picturesContainerNode, galleryData);
