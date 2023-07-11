export const randomColor = () => {
  return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)}, 0.5)`;
};

export const firstUpper = (s) => {
  return `${[...s][0].toUpperCase()}${[...s].slice(1).join('')}`;
};
