import { Response, Request } from 'express';
import { createSearchByTitle, inMemoryPageRepository } from '@vertest/core';

const searchByTitle = createSearchByTitle(inMemoryPageRepository);

export async function searchPage(req: Request, res: Response) {
  const title = req.query.title?.toString();

  if (!title) {
    return res.status(400).json({ error: 'Title not provided' });
  }
  const result = await searchByTitle(title);
  res.status(200).json(result);
}
