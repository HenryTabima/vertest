import { IPageRepository } from '../domain/page-repository-interface';

export function createSearchByTitle(pageRepository: IPageRepository) {
  return function (pageTitle: string) {
    const result = pageRepository.findByTitle(pageTitle);
    return result;
  };
}
