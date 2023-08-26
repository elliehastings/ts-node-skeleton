import { getData } from './main';
import jestFetchMock from 'jest-fetch-mock';

describe('getData', () => {
  it('fetches data', async () => {
    const fakeData = { userId: 1, id: 1, title: 'delectus aut autem', completed: false };
    jestFetchMock.mockResponseOnce(JSON.stringify(fakeData));

    const apiRes = await getData();
    expect(apiRes).toEqual(fakeData);
  });
});
