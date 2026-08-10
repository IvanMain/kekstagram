import { COUNT_COMMENTS } from './const';
import { commentLoader } from './comment-loader';

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

const createSocialCommentTemplate = ({ avatar, name, message }) => `
  <li class="social__comment">
    <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
    <p class="social__text">${message}</p>
  </li>
`;

const getSocialComments = (comments, count) => comments.slice(0, count).map(createSocialCommentTemplate).join('');

const modalPictureRender = ({ url, description, likes, comments }) => {
  openModal();

  loadButton.classList.add('hidden');
  commentCount.classList.add('hidden');

  pictureImg.src = url;
  pictureImg.alt = description;
  socialCaption.textContent = description;
  likesCount.textContent = likes;
  commentShownCount.textContent = Math.min(comments.length, COUNT_COMMENTS);
  commentTotalCount.textContent = comments.length;

  commentsContainer.replaceChildren();
  commentsContainer.insertAdjacentHTML('beforeend', getSocialComments(comments, COUNT_COMMENTS));

  if (comments.length > COUNT_COMMENTS) {
    loadButton.classList.remove('hidden');
    commentCount.classList.remove('hidden');
  }

  const closeButtonClickHandler = () => {
    closeModalPicture();
  };

  const documentEscKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      closeModalPicture();
    }
  };

  const loadMore = commentLoader(comments);

  const loadButtonClickHandler = () => {
    const result = loadMore();

    commentsContainer.insertAdjacentHTML('beforeend',
      result.comments.map(createSocialCommentTemplate).join('')
    );

    commentShownCount.textContent = result.shownCount;

    if (!result.hasMore) {
      loadButton.classList.add('hidden');
    }
  };

  function closeModalPicture() {
    closeModal();

    closeButton.removeEventListener('click', closeButtonClickHandler);
    document.removeEventListener('keydown', documentEscKeyDownHandler);
    loadButton.removeEventListener('click', loadButtonClickHandler);
  }

  loadButton.addEventListener('click', loadButtonClickHandler);
  closeButton.addEventListener('click', closeButtonClickHandler);
  document.addEventListener('keydown', documentEscKeyDownHandler);
};

export { modalPictureRender };
