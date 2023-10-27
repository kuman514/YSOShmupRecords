import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { useLocation } from 'react-router-dom';

import { Article } from '^/components/organisms/Article';
import { RecordDropdown } from '^/components/molecules/RecordDropdown';
import { useShmupRecordStore } from '^/stores/shmup-record';
import { useShmupRecordIds } from '^/hooks/useShmupRecordIds';
import { useShmupArticle } from '^/hooks/useShmupArticle';

/**
 * @todo
 * Style Root if necessary. Otherwise, changing it into just div looks better.
 */
const Root = styled.div`
  padding: 15px;
`;

const RecordSelectionArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 10px;
`;

const RecordTitle = styled.span`
  color: #000000;
  font-size: 12px;
  font-weight: 600;
`;

export function RecordPage() {
  const location = useLocation();
  /**
   * @todo
   * Change into real code after adding Skeletons
   */
  const {
    recordIds,
    // isLoading: isRecorIdsLoading,
    // isError: isRecorIdsError,
  } = useShmupRecordIds(location.pathname);
  const currentRecordId = useShmupRecordStore((state) => state.currentRecordId);
  const setCurrentRecordId = useShmupRecordStore(
    (state) => state.setCurrentRecordId
  );
  const {
    recordArticle,
    // isLoading: isRecordArticleLoading,
    // isError: isRecordArticleError,
  } = useShmupArticle(location.pathname, currentRecordId);

  useEffect(() => {
    useShmupRecordStore
      .getState()
      .setCurrentRecordId(useShmupRecordStore.getState().recordIds[0]);
  }, [recordIds]);

  const renderRecordIdSelection =
    recordIds.length > 0 ? (
      <RecordSelectionArea>
        <RecordTitle>기록 선택</RecordTitle>
        <RecordDropdown
          selectedOption={currentRecordId}
          placeholder="선택된 기록이 없습니다."
          options={recordIds}
          onSelect={(newSelectedOption) => {
            setCurrentRecordId(newSelectedOption);
          }}
        />
      </RecordSelectionArea>
    ) : null;

  const renderArticle =
    recordArticle !== undefined ? (
      <Article recordArticle={recordArticle} />
    ) : null;

  return (
    <Root>
      {renderRecordIdSelection}
      {renderArticle}
    </Root>
  );
}
