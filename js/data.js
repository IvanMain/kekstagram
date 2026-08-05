import { likesRange, avatarsRange, commentsRange, userNames, userMessages } from './const.js';
import { generateRandomInteger, getRandomItem } from './util.js';

const generateDataComment = (commentIndex) => {
  const id = commentIndex + 1;
  const message = getRandomItem(userMessages);
  const name = getRandomItem(userNames);

  return {
    id,
    avatar: `img/avatar-${generateRandomInteger(avatarsRange.MIN, avatarsRange.MAX)}.svg`,
    message,
    name,
  };
};

const generateDataComments = () => {
  const count = generateRandomInteger(commentsRange.MIN, commentsRange.MAX);
  const comments = Array.from({ length: count }).map((_, i) => generateDataComment(i));

  return comments;
};

const generateDataItem = (index) => {
  const id = index + 1;

  return {
    id,
    url: `photos/${id}.jpg`,
    description: `Описание ${id} фотографии`,
    likes: generateRandomInteger(likesRange.MIN, likesRange.MAX),
    comments: generateDataComments(),
  };
};

const generateGalleryData = (count) => Array.from({ length: count }).map((_, i) => generateDataItem(i));

export { generateGalleryData };
