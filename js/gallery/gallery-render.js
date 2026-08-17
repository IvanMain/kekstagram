const createPictureElement = (template, { id, url, description, likes, comments }) => {
  const picture = template.cloneNode(true);

  picture.dataset.id = id;
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;

  return picture;
};

const galleryRender = (container, data) => {
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const fragment = document.createDocumentFragment();

  const pictures = data.map((item) => createPictureElement(pictureTemplate, item));

  fragment.append(...pictures);

  container.append(fragment);
};


export { galleryRender };
