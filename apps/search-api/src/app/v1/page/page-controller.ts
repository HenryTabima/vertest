import { createSearchByTitle, inMemoryPageRepository } from '@vertest/core';

const searchByTitle = createSearchByTitle(inMemoryPageRepository);

export async function searchPage(req, res) {
  if (!req.query.title) {
    res.status(400).send({ error: 'Title not provided' });
  }
  const result = await searchByTitle(req.query.title);
  res.status(200).send(JSON.stringify(result));
}
