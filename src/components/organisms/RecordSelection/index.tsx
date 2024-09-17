import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { EmptyIndicator } from '^/components/molecules/EmptyIndicator';
import { RecordListCard } from '^/components/molecules/RecordListCard';
import { ShmupRecordPreview } from '^/types';

const Root = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`;

const RecordCount = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

const RecordSelectionList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;

const RecordSelectionLink = styled(Link)`
  width: 100%;
  color: unset;
  text-decoration: none;
`;

interface Props {
  recordPreviews: ShmupRecordPreview[];
}

export function RecordSelection({ recordPreviews }: Props) {
  const isHavingRecordPreviews = recordPreviews.length > 0;

  const renderRecordCount = isHavingRecordPreviews ? (
    <RecordCount>총 {recordPreviews.length}건의 기록이 있습니다.</RecordCount>
  ) : null;

  const renderRecordSelectionArea = isHavingRecordPreviews ? (
    <RecordSelectionList>
      {recordPreviews.map((recordPreview) => (
        <RecordSelectionLink
          key={recordPreview.recordId}
          to={`/records/${recordPreview.recordId.split('--').join('/')}`}
        >
          <RecordListCard recordPreview={recordPreview} />
        </RecordSelectionLink>
      ))}
    </RecordSelectionList>
  ) : (
    <EmptyIndicator />
  );

  return (
    <Root>
      {renderRecordCount}
      {renderRecordSelectionArea}
    </Root>
  );
}
