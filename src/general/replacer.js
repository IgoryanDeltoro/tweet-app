export const replacer = data => {
  const getArray = data.toString().split('');
  return getArray.reduce((previousValue, element, index) => {
    if (index === 2) {
      return previousValue + element + ',';
    }
    return previousValue + element;
  });
};
