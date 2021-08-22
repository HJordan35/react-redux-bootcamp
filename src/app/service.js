export const asyncProcess = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: 3 });
    }, 1000);
  });
};
