import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'rsuite';
import styled from 'styled-components';
import SearchBar from '../../components/search-bar/search-bar';

/* eslint-disable-next-line */
export interface SearchHomeProps {}

const StyledSearchHome = styled.div`
  width: 90%;
  max-width: 800px;
`;

export function SearchHome(props: SearchHomeProps) {
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
    <StyledSearchHome>
      <Container>
        <SearchBar onInputChange={handleInputChange} onSearchClick={handleSearchClick} />
      </Container>
    </StyledSearchHome>
  );
}

export default SearchHome;
