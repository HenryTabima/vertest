import { render } from '@testing-library/react';

import PageItem from './page-item';

describe('PageItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageItem />);
    expect(baseElement).toBeTruthy();
  });
});
