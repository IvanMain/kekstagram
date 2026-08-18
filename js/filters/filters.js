const Filters = {
  DEFAULT: (data) => data,
  RANDOM: (data, count = 10) => {
    const randomData = [];
    const usedIndices = new Set();
    const limit = Math.min(count, data.length);

    while (randomData.length < limit) {
      const index = Math.floor(Math.random() * data.length);

      if (!usedIndices.has(index)) {
        usedIndices.add(index);
        randomData.push(data[index]);
      }
    }

    return randomData;
  },
  DISCUSSED: (data) => [...data].sort((a, b) => b.comments.length - a.comments.length),
};

export { Filters };
