import React from 'react';
import { styled } from 'styled-components';

import { Article } from '^/components/organisms/Article';
import { RecordDropdown } from '^/components/molecules/RecordDropdown';
import { useShmupRecordStore } from '^/stores/shmup-record';

const Root = styled.div``;

export function RecordPage() {
  const recordIds = useShmupRecordStore((state) => state.recordIds);
  const currentRecordId = useShmupRecordStore((state) => state.currentRecordId);

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
