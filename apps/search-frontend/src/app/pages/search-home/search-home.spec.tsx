import { render } from '@testing-library/react';

import SearchHome from './search-home';

describe('SearchHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchHome />);
    expect(baseElement).toBeTruthy();
  });
});
