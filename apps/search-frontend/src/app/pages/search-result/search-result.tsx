import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'rsuite';
import styled from 'styled-components';
import SearchBar from '../../components/search-bar/search-bar';

/* eslint-disable-next-line */
export interface SearchResultProps {}

const StyledSearchResult = styled.div`
  width: 90%;
  max-width: 800px;
`;

export function SearchResult(props: SearchResultProps) {
  const navigate = useNavigate();
  const [input, setInput] = useState('');

  const handleInputChange = useCallback((value) => setInput(value), []);
  const handleSearchClick = useCallback(
    (value) => {
      if (input !== '') {
        navigate(input);
      }
    },
    [input]
  );

  return (
    <StyledSearchResult>
      <Container>
        <SearchBar onInputChange={handleInputChange} onSearchClick={handleSearchClick} />
      </Container>
    </StyledSearchResult>
  );
}

export default SearchResult;
