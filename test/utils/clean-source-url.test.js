import CleanSourceURL from '../../src/utils/clean-source-url';

test('Clean Source URL works', () => {
  
  const url = '/content/uploads/image.png';
  const replaced = CleanSourceURL(url);

  expect(replaced).toEqual('https://blog.komododigital.co.uk/content/uploads/image.png');

  const urlFail = '/some/address/content/image.png';
  const replacedFail = CleanSourceURL(urlFail);

  expect(replacedFail).toEqual(urlFail);

});
