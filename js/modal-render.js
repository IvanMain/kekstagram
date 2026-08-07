const body = document.body;
const modalPicture = document.querySelector('.big-picture');
const pictureImg = modalPicture.querySelector('.big-picture__img img');
const socialCaption = modalPicture.querySelector('.social__caption');
const likesCount = modalPicture.querySelector('.likes-count');
const commentCount = modalPicture.querySelector('.social__comment-count');
const commentShownCount = modalPicture.querySelector('.social__comment-shown-count');
const commentTotalCount = modalPicture.querySelector('.social__comment-total-count');
const commentsContainer = modalPicture.querySelector('.social__comments');
const loadButton = modalPicture.querySelector('.comments-loader');
const closeButton = modalPicture.querySelector('#picture-cancel');

const openModal = () => {
  body.classList.add('modal-open');
  modalPicture.classList.remove('hidden');
};

const closeModal = () => {
  body.classList.remove('modal-open');
  modalPicture.classList.add('hidden');
};

const createSocialCommentTemplate = ({ avatar, username, message }) => `
  <li class="social__comment">
    <img class="social__picture" src="${avatar}" alt="${username}" width="35" height="35">
    <p class="social__text">${message}</p>
  </li>
`;

const getSocialComments = (comments) => comments.map(createSocialCommentTemplate).join('');

const closeButtonClickHandler = () => {
  closeModalPicture();
};

const modalPictureEscKeyDownHandler = (evt) => {
  if (evt.key === 'Escape') {
    closeModalPicture();
  }
};

function closeModalPicture() {
  closeModal();

  closeButton.removeEventListener('click', closeButtonClickHandler);
  document.removeEventListener('keydown', modalPictureEscKeyDownHandler);
}

const modalRender = ({ url, description, likes, comments }) => {
  openModal();

  commentCount.classList.add('hidden');
  loadButton.classList.add('hidden');

  pictureImg.src = url;
  pictureImg.alt = description;
  socialCaption.textContent = description;
  likesCount.textContent = likes;
  commentShownCount.textContent = comments.length;
  commentTotalCount.textContent = comments.length;

  commentsContainer.replaceChildren();
  commentsContainer.insertAdjacentHTML('beforeend', getSocialComments(comments));

  closeButton.addEventListener('click', closeButtonClickHandler);
  document.addEventListener('keydown', modalPictureEscKeyDownHandler);
};

export { modalRender };
