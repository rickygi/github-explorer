import { createQueryString } from './utils';

test('create query string', () => {
  const params = {
    l: 'JavaScript',
    o: 'desc',
    p: '1',
    q: 'airbnb',
    s: 'stars'
  };
  const queryString = createQueryString(params);
  const result =
    'repositories?q=airbnb+language:JavaScript&sort=stars&order=desc&page=1';
  expect(queryString).toEqual(result);
});
