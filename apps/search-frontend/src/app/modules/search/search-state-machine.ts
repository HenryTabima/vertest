import { createMachine, assign } from 'xstate';
import { Page } from '@vertest/core';
import { fetchPagesSearch } from '../../api/page-fetch';

interface Context {
  searchResults: Page[];
  query: string;
}

type Events = { type: 'UPDATE_QUERY'; query: string } | { type: 'FETCH' };

const searchMachine = createMachine<Context, Events>(
  {
    id: 'fetch',
    initial: 'idle',
    context: {
      searchResults: [],
      query: '',
    },
    states: {
      idle: {
        on: {
          FETCH: {
            target: 'searching',
            cond: (ctx) => ctx.query !== '',
          },
          UPDATE_QUERY: {
            actions: assign({ query: (ctx, evt) => evt.query }),
          },
        },
      },
      searching: {
        invoke: {
          src: 'searchByTitle',
          onDone: {
            target: 'idle',
            actions: assign({
              searchResults: (ctx, evt) => evt.data,
            }),
          },
          onError: {
            target: 'idle',
          },
        },
      },
    },
  },
  {
    services: {
      searchByTitle: async (ctx) => {
        const result = await fetchPagesSearch(ctx.query);
        return result;
      },
    },
  }
);

export default searchMachine;
