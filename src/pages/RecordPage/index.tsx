import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import { Article } from '^/components/organisms/Article';
import { RecordDropdown } from '^/components/molecules/RecordDropdown';
import { useShmupRecordStore } from '^/stores/shmup-record';
import { ShmupRecord } from '^/types';
import { getAPIURL } from '^/utils/api-url';

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
  const pathNameSplit = location.pathname
    .split('/')
    .filter((path) => path.length > 1);
  const recordIds = useShmupRecordStore((state) => state.recordIds);
  const currentRecordId = useShmupRecordStore((state) => state.currentRecordId);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get<string[]>(
          getAPIURL(...pathNameSplit, 'selection')
        );
        useShmupRecordStore.getState().setRecordIds(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          useShmupRecordStore.getState().setRecordIds([]);
        }
      }
    })();
  }, [location.pathname]);

  useEffect(() => {
    useShmupRecordStore
      .getState()
      .setCurrentRecordId(useShmupRecordStore.getState().recordIds[0]);
  }, [recordIds]);

  useEffect(() => {
    if (currentRecordId === undefined) {
      useShmupRecordStore.getState().setRecordArticle(undefined);
      return;
    }
    (async () => {
      try {
        const response = await axios.get<ShmupRecord>(
          getAPIURL(...pathNameSplit, currentRecordId)
        );
        useShmupRecordStore.getState().setRecordArticle({
          ...response.data,
          when: new Date(response.data.when),
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          useShmupRecordStore.getState().setRecordArticle(undefined);
        }
      }
    })();
  }, [currentRecordId]);

  const renderRecordIdSelection =
    recordIds.length > 0 ? (
      <RecordSelectionArea>
        <RecordTitle>기록 선택</RecordTitle>
        <RecordDropdown
          selectedOption={currentRecordId}
          placeholder="선택된 기록이 없습니다."
          options={recordIds}
          /**
           * @todo
           * Implement onSelect to browse the selected record
           */
          onSelect={() => {}}
        />
      </RecordSelectionArea>
    ) : null;

  return (
    <Root>
      {renderRecordIdSelection}
      <Article />
    </Root>
  );
}
