import { useEffect, useState } from 'react';

import { getShmupRecordPreviewList } from '^/apis/get-shmup-record-preview-list';
import { ShmupRecordPreview } from '^/types';

export function useShmupRecordPreviewList(typeId?: string) {
  const [recordPreviews, setRecordPreviews] = useState<ShmupRecordPreview[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setIsError(false);

      const result = await getShmupRecordPreviewList(typeId);

      switch (result.status) {
        case 'successful':
          setRecordPreviews(result.data);
          break;
        case 'failed':
          setIsError(true);
          break;
        default:
          break;
      }

      setIsLoading(false);
    })();
  }, [typeId]);

  return {
    recordPreviews,
    isLoading,
    isError,
  };
}
