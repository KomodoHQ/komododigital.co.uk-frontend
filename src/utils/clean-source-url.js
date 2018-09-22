export default (dirty) => {
  return dirty.replace(/(\/content\/uploads\/)/g, 'https://blog.komododigital.co.uk$1');
};