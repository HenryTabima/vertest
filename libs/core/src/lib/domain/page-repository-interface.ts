import { Page } from './page';

export interface IPageRepository {
  findByTitle: (title: string) => Promise<Page[]>;
}
