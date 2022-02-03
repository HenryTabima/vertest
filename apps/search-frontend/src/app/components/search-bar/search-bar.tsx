import { Button, Input } from 'rsuite';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SearchBarProps {
  onInputChange: (value: string) => void;
  onSearchClick: (value: any) => void;
}

const StyledSearchBar = styled.div`
  display: flex;
  gap: 8px;
  .input-container {
    flex: 4;
    // width: 80%;
  }
  .button-container {
    flex: 1;
    // width: 20%;
  }
`;

export function SearchBar({ onSearchClick, onInputChange }: SearchBarProps) {
  return (
    <StyledSearchBar>
      <div className="input-container">
        <Input placeholder="Search by title" onChange={onInputChange} />
      </div>
      <div className="button-container">
        <Button appearance="primary" block onClick={onSearchClick}>
          Search
        </Button>
      </div>
    </StyledSearchBar>
  );
}

export default SearchBar;
