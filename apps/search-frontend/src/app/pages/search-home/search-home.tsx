import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'rsuite';
import styled from 'styled-components';
import SearchBar from '../../components/search-bar/search-bar';
import { useSearchMachine } from '../../modules/search/search-service';

/* eslint-disable-next-line */
export interface SearchHomeProps {}

const StyledSearchHome = styled.div`
  width: 90%;
  max-width: 800px;
`;

export function SearchHome(props: SearchHomeProps) {
  const [state, send] = useSearchMachine();
  const navigate = useNavigate();

  const handleInputChange = useCallback((value) => send('UPDATE_QUERY', { query: value }), []);
  const handleSearchClick = useCallback(() => {
    const { query } = state.context;
    if (query !== '') {
      send('FETCH');
      navigate(query);
    }
  }, [state.context.query]);

  return (
    <StyledSearchHome>
      <Container>
        <SearchBar inputValue={state.context.query} onInputChange={handleInputChange} onSearchClick={handleSearchClick} />
      </Container>
    </StyledSearchHome>
  );
}

export default SearchHome;
