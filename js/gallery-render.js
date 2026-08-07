const galleryRender = (container, data) => {
  const pictureTemplateContent = document.querySelector('#picture').content.querySelector('.picture');
  const fragment = document.createDocumentFragment();

  data.forEach(({ id, url, description, likes, comments }) => {
    const picture = pictureTemplateContent.cloneNode(true);
    const pictureImg = picture.querySelector('.picture__img');
    const pictureComments = picture.querySelector('.picture__comments');
    const pictureLikes = picture.querySelector('.picture__likes');

    picture.dataset.id = id;
    pictureImg.src = url;
    pictureImg.alt = description;
    pictureComments.textContent = comments.length;
    pictureLikes.textContent = likes;

    fragment.append(picture);
  });

  container.append(fragment);
};

export { galleryRender };
