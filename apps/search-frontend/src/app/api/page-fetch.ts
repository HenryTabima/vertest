import { IPage, Page } from '@vertest/core';
import fetch from './fetch';

export async function fetchPagesSearch(query: string): Promise<Page[]> {
  const result = await fetch.get(`search?title=${query}`);
  return result.data.map((pageData: IPage) => new Page(pageData));
}
