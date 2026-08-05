const MAX_DATA_ELEMENTS = 25;

const likesRange = {
  MIN: 15,
  MAX: 200,
};

const avatarsRange = {
  MIN: 1,
  MAX: 6,
};

const commentsRange = {
  MIN: 0,
  MAX: 30,
};

const userNames = [
  'Артём', 'Анна', 'Михаил', 'Екатерина', 'Сергей', 'Ольга', 'Дмитрий', 'Наталья', 'Алексей', 'Мария'
];

const userMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const generateRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomItem = (arr) => arr[generateRandomInteger(0, arr.length - 1)];

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

generateGalleryData(MAX_DATA_ELEMENTS);
