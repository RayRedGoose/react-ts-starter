import api from '_ts-assets/apiCalls';
import { defaultCurrentUser } from '__tests__/mocks';

it('get returns defaultCurrentUser', () => {
  const result = api.get('/');
  expect(result).toEqual(defaultCurrentUser);
});
