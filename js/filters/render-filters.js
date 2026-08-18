import { DEBOUNCE_TIME } from '../const/const';
import { galleryRender } from '../gallery/gallery-render';
import { debounce } from '../utils/util';
import { Filters } from './filters';

const ACTIVE_CLASS = 'img-filters__button--active';

const clearPictures = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((picture) => picture.remove());
};

const filtersButtons = document.querySelectorAll('.img-filters__form button');

const setFilter = (currentFIlterButton) => {
  filtersButtons.forEach((button) => button.classList.remove(ACTIVE_CLASS));
  currentFIlterButton.classList.add(ACTIVE_CLASS);
};

const renderFilters = (data) => {
  const picturesContainerNode = document.querySelector('.pictures');
  const filtersContainer = document.querySelector('.img-filters');
  const filtersForm = document.querySelector('.img-filters__form');

  if (!data?.length) {
    return;
  }

  filtersContainer.classList.remove('img-filters--inactive');

  const renderWithDebounce = debounce((filteredData) => {
    clearPictures();
    galleryRender(picturesContainerNode, filteredData);
  }, DEBOUNCE_TIME);

  filtersForm.addEventListener('click', (evt) => {
    const currentFIlterButton = evt.target.closest('.img-filters__button');
    const filterId = currentFIlterButton.id.replace(/^filter-/, '');
    const filter = Filters[filterId.toUpperCase()];

    setFilter(currentFIlterButton);

    if (filter) {
      const filteredData = filter(data);

      renderWithDebounce(filteredData);
    } else {
      Filters.DEFAULT(data);
    }
  });
};

export { renderFilters };
