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
const Root = styled.div``;

export function RecordPage() {
  const location = useLocation();
  const recordIds = useShmupRecordStore((state) => state.recordIds);
  const currentRecordId = useShmupRecordStore((state) => state.currentRecordId);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get<string[]>(
          getAPIURL(location.pathname, 'selection')
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
          getAPIURL(location.pathname, currentRecordId)
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
    ) : null;

  return (
    <Root>
      {renderRecordIdSelection}
      <Article />
    </Root>
  );
}
