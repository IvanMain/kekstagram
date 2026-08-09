import { COUNT_COMMENTS } from './const';

const commentLoader = (comments, step = COUNT_COMMENTS) => {
  let shownCount = step;

  const loadMore = () => {
    const nextStep = shownCount + step;

    const restComments = comments.slice(shownCount, nextStep);
    shownCount = nextStep;

    return {
      comments: restComments,
      hasMore: shownCount < comments.length,
      shownCount: Math.min(comments.length, shownCount),
    };
  };

  return loadMore;
};

export { commentLoader };
