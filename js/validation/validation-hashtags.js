import { DESCRIPTION_RANGE, HASHTAGS_RANGE } from '../const/const';

const getHashtags = (value) => value.split(' ').filter(Boolean);

const isHashtagCountValid = (value) => getHashtags(value).length <= HASHTAGS_RANGE;

const isHashtagSyntaxValid = (value) => {
  const hashtags = getHashtags(value);
  const reg = /^#[a-zа-яё0-9]{1,19}$/i;

  return hashtags.every((tag) => reg.test(tag));
};

const isUniqueHashtags = (value) => {
  const hashtags = getHashtags(value);
  const lowerCaseTags = hashtags.map((tag) => tag.toLowerCase());
  const uniqueTags = new Set(lowerCaseTags);

  return lowerCaseTags.length === uniqueTags.size;
};

const isDescriptionValid = (value) => value.length <= DESCRIPTION_RANGE;

export {
  isHashtagCountValid,
  isHashtagSyntaxValid,
  isUniqueHashtags,
  isDescriptionValid
};
