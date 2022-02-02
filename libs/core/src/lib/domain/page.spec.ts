import { Page } from './page';

describe('Page', () => {
  it('should create page', () => {
    const HELLO_WORLD_TEXT = 'Hello World';
    const page = new Page({
      title: HELLO_WORLD_TEXT,
      photo: 'http://example.com',
      description: 'Carpe Diem memento mori',
      shortDescription: 'carpediem',
    });
    expect(page.title).toEqual(HELLO_WORLD_TEXT);
  });
});
