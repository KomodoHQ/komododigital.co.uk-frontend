import { fileToSlug } from '../../src/utils/file-to-slug';

test('Given a good slug, returns the correct basepath', () => {
  const testString = '/base/src/content/some/path/to/a/index.md';
  const expected = 'some/path/to/a';

  expect(fileToSlug(testString)).toEqual(expected);
});

test('Given a file that doesnt end in index.md, returns null', () => {
  const testString = '/some/path/to/a/file.mds';
  const expected = null;

  expect(fileToSlug(testString)).toEqual(expected);
});

test('Given a bad slug, throws an error', () => {
  const testString = '/some/path/to/a/index.md';
  expect(() => { fileToSlug(testString) }).toThrow();
});