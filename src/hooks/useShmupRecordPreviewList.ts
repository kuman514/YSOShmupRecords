import { useEffect, useState } from 'react';

import { ShmupRecordPreview } from '^/types';
import { getShmupRecordPreviewList } from '^/utils/api';

export function useShmupRecordPreviewList(typeId: string) {
  const [recordPreviews, setRecordPreviews] = useState<ShmupRecordPreview[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    getShmupRecordPreviewList(
      typeId,
      setIsLoading,
      setIsError,
      setRecordPreviews
    );
  }, [typeId]);

  return {
    recordPreviews,
    isLoading,
    isError,
  };
}
