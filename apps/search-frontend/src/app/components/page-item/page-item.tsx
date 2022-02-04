import { Panel } from 'rsuite';
import styled from 'styled-components';
import Page from '../../models/page';

/* eslint-disable-next-line */
export interface PageProps {
  data: Page;
}

const StyledPage = styled.div`
  margin-bottom: 20px;
  .page-item {
    display: flex;
    align-items: center;
    .thumbnail {
      width: 20%;
      padding: 10px;
      img {
        width: 100%;
      }
    }
    .info {
      width: 80%;
    }
  }
`;

export function PageItem({ data }: PageProps) {
  return (
    <StyledPage>
      <Panel shaded>
        <div className="page-item">
          <div className="thumbnail">
            <img src={data.photo} alt={data.uuid} />
          </div>
          <div className="info">
            <Panel header={data.title}>{data.shortDescription}</Panel>
          </div>
        </div>
      </Panel>
    </StyledPage>
  );
}

export default PageItem;
