import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import SearchHome from './pages/search-home/search-home';
import SearchResult from './pages/search-result/search-result';

const StyledApp = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path="/" element={<SearchHome />} />
        <Route path=":titleSearch" element={<SearchResult />} />
      </Routes>
    </StyledApp>
  );
}

export default App;
