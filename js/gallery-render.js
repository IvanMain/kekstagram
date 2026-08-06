const galleryRender = (container, data) => {
  const pictureTemplateContent = document.querySelector('#picture').content.querySelector('.picture');
  const fragment = document.createDocumentFragment();

  data.forEach(({ url, description, likes, comments }) => {
    const pictureNode = pictureTemplateContent.cloneNode(true);
    const pictureImgNode = pictureNode.querySelector('.picture__img');
    const pictureCommentsNode = pictureNode.querySelector('.picture__comments');
    const pictureLikesNode = pictureNode.querySelector('.picture__likes');

    pictureImgNode.src = url;
    pictureImgNode.alt = description;
    pictureCommentsNode.textContent = comments.length;
    pictureLikesNode.textContent = likes;

    fragment.append(pictureNode);
  });

  container.append(fragment);
};

export { galleryRender };
