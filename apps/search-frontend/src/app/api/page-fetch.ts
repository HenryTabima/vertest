import Page, { IPage } from '../models/page';
import fetch from './fetch';

export async function fetchPagesSearch(query: string): Promise<Page[]> {
  const result = await fetch.get(`pages/search?title=${query}`);
  return result.data.map((pageData: IPage) => new Page(pageData));
}
