import { Loader } from 'rsuite';
import styled from 'styled-components';
import Page from '../../models/page';
import PageItem from '../page-item/page-item';

/* eslint-disable-next-line */
export interface PagesProps {
  pages: Page[];
  loading: boolean;
}

const StyledPages = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export function Pages({ loading, pages }: PagesProps) {
  if (loading) {
    return (
      <StyledPages>
        <Loader size="lg" />
      </StyledPages>
    );
  }
  return (
    <StyledPages>
      {pages.map((page) => (
        <PageItem data={page} />
      ))}
    </StyledPages>
  );
}

export default Pages;
