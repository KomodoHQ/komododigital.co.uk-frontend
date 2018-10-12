import { fileToSlug } from '../../src/utils/file-to-slug';

test('Given a good slug, returns the correct basepath', () => {
  const testString = '/some/path/to/a/file.md';
  const expected = 'file';

  expect(fileToSlug(testString)).toEqual(expected);
});

test('Given a bad slug, throws an error', () => {
  const testString = '/some/path/to/a/file.mds';
  expect(() => { fileToSlug(testString) }).toThrow();
});