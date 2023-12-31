export const getNumberOfImages = () => {
  const images = require.context("/src/assets/img", false, /^.*\.jpg$/);

  return images.keys().length;
};
