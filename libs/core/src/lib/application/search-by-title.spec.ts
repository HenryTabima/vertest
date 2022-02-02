import { Page } from '../domain/page';
import { createSearchByTitle } from './search-by-title';

describe('Page', () => {
  it('should run findByTitle on page repository object', () => {
    const page = new Page({
      title: 'Hello World',
      photo: 'http://example.com',
      description: 'Carpe Diem memento mori',
      shortDescription: 'carpediem',
    });
    const mockedPageRepository = {
      findByTitle: jest.fn((_) => [page]),
    };

    const SEARCH_WORD = 'HELLO';
    const searchByTitle = createSearchByTitle(mockedPageRepository);
    searchByTitle(SEARCH_WORD);

    expect(mockedPageRepository.findByTitle.mock.calls.length).toEqual(1);
    expect(mockedPageRepository.findByTitle.mock.calls[0][0]).toEqual(
      SEARCH_WORD
    );
  });
});
