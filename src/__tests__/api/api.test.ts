import api from 'api';

it('get returns defaultCurrentUser', () => {
  const result = api.get('/');
  expect(result).toEqual('/');
});
