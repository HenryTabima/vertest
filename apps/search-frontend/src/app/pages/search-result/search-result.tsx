import { useCallback, useState } from 'react';
import { Container } from 'rsuite';
import styled from 'styled-components';
import Pages from '../../components/pages/pages';
import SearchBar from '../../components/search-bar/search-bar';
import { useSearchMachine } from '../../modules/search/search-service';

/* eslint-disable-next-line */
export interface SearchResultProps {}

const StyledSearchResult = styled.div`
  width: 90%;
  max-width: 800px;
  padding-top: 30px;
`;

export function SearchResult(props: SearchResultProps) {
  const [state, send] = useSearchMachine();

  const handleInputChange = useCallback((value) => send('UPDATE_QUERY', { query: value }), []);
  const handleSearchClick = useCallback(() => send('FETCH'), []);

  return (
    <StyledSearchResult>
      <Container>
        <SearchBar inputValue={state.context.query} onInputChange={handleInputChange} onSearchClick={handleSearchClick} />
        <Pages pages={state.context.searchResults} loading={state.matches('searching')} />
      </Container>
    </StyledSearchResult>
  );
}

export default SearchResult;
