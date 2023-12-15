import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

import { textsForArticle } from '^/constants/texts';
import { useShmupRecordList } from '^/hooks/useShmupRecordList';
import { Skeleton } from '^/components/atoms/Skeleton';
import { RecordListCard } from '^/components/molecules/RecordListCard';
import { convertDateToString } from '^/utils/date-to-string';
import { getAPIURL } from '^/utils/api-url';

const Root = styled.div`
  padding-left: 15px;
  padding-right: 15px;

  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const Title = styled.h1`
  color: var(--light-font-color);

  font-size: 36px;
  font-weight: 700;
`;

const RecordSelectionArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`;

const RecordSelectionList = styled.ul`
  list-style-type: none;
  margin: unset;
  padding: unset;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;

const RecordSelectionLink = styled(Link)`
  color: unset;
  text-decoration: none;
`;

const RecordListCardSkeletonRoot = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

function RecordListCardSkeleton() {
  return (
    <RecordListCardSkeletonRoot>
      <Skeleton width="300px" height="200px" borderRadius="16px" />
      <Skeleton width="300px" height="20px" borderRadius="10px" />
    </RecordListCardSkeletonRoot>
  );
}

export function RecordListPage() {
  const { typeId } = useParams();

  if (!typeId) {
    return null;
  }

  const {
    savedTypeId,
    recordIds,
    isLoading: isRecordIdsLoading,
    isError: isRecordIdsError,
  } = useShmupRecordList(typeId);

  const renderRecordIdSelection = !isRecordIdsLoading ? (
    <RecordSelectionArea>
      {recordIds.length > 0 ? (
        <RecordSelectionList>
          {recordIds.map((recordId) => (
            <li key={recordId}>
              <RecordSelectionLink to={`${recordId}`}>
                <RecordListCard
                  imageUrl={getAPIURL(
                    'records',
                    savedTypeId,
                    'images',
                    `${recordId}_thumbnail.jpg`
                  )}
                  title={`${convertDateToString(new Date(recordId))} 기록`}
                />
              </RecordSelectionLink>
            </li>
          ))}
        </RecordSelectionList>
      ) : (
        '현재 등록된 기록이 없습니다.'
      )}
    </RecordSelectionArea>
  ) : (
    <RecordSelectionArea>
      {!isRecordIdsError ? (
        <>
          <RecordListCardSkeleton />
          <RecordListCardSkeleton />
          <RecordListCardSkeleton />
        </>
      ) : (
        '목록을 불러오는 중 오류가 발생했습니다.'
      )}
    </RecordSelectionArea>
  );

  return (
    <Root>
      <Title>{textsForArticle[typeId] ?? typeId} 기록 목록</Title>
      {renderRecordIdSelection}
    </Root>
  );
}
