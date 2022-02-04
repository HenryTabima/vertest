import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';

import App from './app/app';
import SearchMachineProvider from './app/modules/search/search-service';

import { inspect } from '@xstate/inspect';
inspect({
  // url: 'https://statecharts.io/inspect', // (default)
  iframe: false, // open in new window
});

ReactDOM.render(
  <StrictMode>
    <SearchMachineProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SearchMachineProvider>
  </StrictMode>,
  document.getElementById('root')
);
